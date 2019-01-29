const AWS = require('aws-sdk');
const fs = require('fs');

/**
 * Utility to sync an S3 content repository to a local file system.
 */
const getContentFiles = async ({ folder, producer }) => {
  // This presence of a value in this variable is assured by the top-level command.
  const { EUBFR_CONTENT_REPOSITORY: repo } = process.env;

  const s3 = new AWS.S3();

  try {
    // Ensure the folder where we are going to place the files exists.
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }

    const results = await s3.listObjects({ Bucket: repo }).promise();
    let files = results.Contents;

    // If there's a preference for a specific producer, respect it.
    if (producer !== '*') {
      files = files.filter(file => file.Key.includes(producer));
    }

    return Promise.all(
      files.map(file => {
        return new Promise((resolve, reject) => {
          const target = file.Key;

          // Check whether the target object has an extension.
          // If it doesn't, then it's a folder.
          if (!target.match(/\.[0-9a-z]+$/i)) {
            // Ensure the folder existis.
            if (!fs.existsSync(`${folder}/${target}`)) {
              fs.mkdirSync(`${folder}/${target}`);
              // Nothing more to do if it's a folder.
              resolve();
            }
          } else {
            const localFile = fs.createWriteStream(`${folder}/${target}`);

            s3.getObject({ Bucket: repo, Key: target })
              .createReadStream()
              .on('error', error => reject(error))
              .pipe(localFile)
              .on('close', () => {
                console.log(`Downloaded: ${folder}/${target}`);
                resolve();
              });
          }
        });
      })
    );
  } catch (error) {
    throw new Error('Issue while trying to download files.', error);
  }
};

module.exports = getContentFiles;