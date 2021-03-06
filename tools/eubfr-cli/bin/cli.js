#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

/**
 * EUBFR CLI
 *
 * Low-level utilities for managing assets of EUBFR data lake.
 *
 * Please refer to [Getting Started guide](./docs/GETTING_STARTED.md) before jumping into using the utility.
 *
 * Each command and sub-command has a help menu, which you can open by passing `-h` or `--help` flags without any arguments.
 *
 * ### Usage
 *
 * ```sh
 * $ eubfr-cli -h
 * ```
 *
 * @name Introduction
 * @public
 */
program.version(pkg.version).usage('[resource] [action]');

/**
 * Manage resources
 *
 * ### Usage
 *
 * ```sh
 * $ eubfr-cli resources -h
 * ```
 *
 * @name Resources
 * @public
 */
program.command('resources', 'Resources management');

/**
 * Manage services
 *
 * ### Usage
 *
 * ```sh
 * $ eubfr-cli services -h
 * ```
 *
 * @name Services
 * @public
 */
program.command('services', 'Services management');

/**
 * Manage demo applications
 *
 * ### Usage
 *
 * ```sh
 * $ eubfr-cli demo -h
 * ```
 *
 * @name Demo
 * @public
 */
program.command('demo', 'Demo applications management');

// The following comment contains `tree` results which cause lintint issues.
/* eslint-disable no-irregular-whitespace */
/**
 *
 * Manage content
 *
 * ### Usage
 *
 * ```sh
 * $ eubfr-cli content -h
 * ```
 *
 * ### Notes
 *
 * If you want to make use of the CLI to automatically upload or delete all content of a given stage, you can optionally create a `.content` folder in the root of your project, with the following example structure:
 *
 * ```
 * .
 * ├── agri
 * │   └── agri_history.csv
 * ├── eac
 * │   └── CreativeEurope_Projects_Overview_2017-08-21.xls
 * ├── iati
 * │   └── activity.csv
 * ├── inforegio
 * │   ├── EUBFR_VIEW_16052018.xml
 * │   └── regio_projects.json
 * ├── valor
 * │   └── valor_sample.xls
 * └── wifi4eu
 *     └── wifi4euRegistrations.xlsx
 * ```
 *
 * This content can be found at [eubfr-content](https://s3.console.aws.amazon.com/s3/buckets/eubfr-content/?region=eu-central-1&tab=overview) S3 bucket. If you have `aws` CLI installed, create the folder and get the content by:
 *
 * ```sh
 * $ mkdir .content && aws s3 sync s3://eubfr-content ./.content
 * ```
 *
 * There are 2 abstracted operations on a project level:
 *
 * - `yarn content:upload` uploads files from `.content` producers' folders to their respective S3 buckets in the cloud. This triggers the ingestion process.
 * - `yarn content:delete` deletes all the currently uploaded content of all producers, for a given stage.
 *
 * You will need to have the `config.json` file correctly setup in the root folder of the project, as producers' credentials are currently stored only there in the existing workflows.
 *
 * @name Content
 * @public
 */
/* eslint-enable no-irregular-whitespace */
program.command('content', 'Content management');

/**
 * Manage environment
 *
 * ### Usage
 *
 * ```sh
 * $ eubfr-cli env -h
 * ```
 *
 * @name Environment
 * @public
 */
program.command('env', 'Environment management');

/**
 * Manage Elasticsearch assets
 *
 * ### Usage
 *
 * ```sh
 * $ eubfr-cli es -h
 * ```
 *
 * @name Elasticsearch
 * @public
 */

program.command('es', 'Elasticsearch management');

// If no arguments provided, display help menu.
if (!process.argv.slice(2).length) {
  program.help();
} else {
  program.parse(process.argv);
}
