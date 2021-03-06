import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../../components/Spinner';

import clients from '../../../clientFactory';
import indices from '../../../clientFactory/esIndices';

class Projects extends React.Component {
  constructor() {
    super();

    this.state = {
      relatedProjects: [],
      projectsLoading: false,
      projectsCount: 0,
    };

    this.loadProjects = this.loadProjects.bind(this);
    this.setProjects = this.setProjects.bind(this);
    this.setEmptyProjects = this.setEmptyProjects.bind(this);
  }

  componentDidMount() {
    this.clients = clients.Create();

    this.loadProjects();
  }

  // Load related Projects
  loadProjects() {
    const { computedKey } = this.props;
    this.setState({ projectsLoading: true }, this.setProjects(computedKey));
  }

  setProjects(computedKey) {
    return () =>
      this.clients.public.indices
        .exists({
          index: indices.projects,
        })
        .then(exists =>
          exists
            ? this.clients.public
                .search({
                  index: indices.projects,
                  type: 'project',
                  q: `computed_key:"${computedKey}.ndjson"`,
                })
                .then(data =>
                  this.setState({
                    projectsLoading: false,
                    relatedProjects: data.hits.hits,
                    projectsCount: data.hits.total,
                  })
                )
                .catch(error => {
                  this.setEmptyProjects();
                  throw Error(`An error occured: ${error.message}`);
                })
            : this.setEmptyProjects()
        )
        .catch(() => {
          this.setEmptyProjects();
        });
  }

  setEmptyProjects() {
    this.setState({
      projectsLoading: false,
      relatedProjects: [],
      projectsCount: 0,
    });
  }

  render() {
    const { relatedProjects, projectsLoading, projectsCount } = this.state;

    if (projectsLoading) {
      return <Spinner />;
    }

    if (!relatedProjects || projectsCount === 0) {
      return (
        <h1 className="ecl-heading ecl-heading--h1 ecl-u-mt-none">
          No projects found
        </h1>
      );
    }

    return (
      <ul>
        {relatedProjects.map(project => (
          <li key={project._source.project_id}>{project._source.title}</li>
        ))}
      </ul>
    );
  }
}

Projects.propTypes = {
  computedKey: PropTypes.string,
};

export default Projects;
