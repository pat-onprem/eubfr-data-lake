import elasticsearch from 'elasticsearch';
import connectionClass from 'http-aws-es';

export const handler = async (event, context, callback) => {
  const { API, INDEX } = process.env;

  if (!API || !INDEX) {
    return callback(
      new Error('API and INDEX environment variables are required!')
    );
  }

  /*
   * Some checks here before going any further
   */

  if (!event.Records) {
    return callback(new Error('No record'));
  }

  // Only work on the first record
  const snsRecord = event.Records[0];

  // Was the lambda triggered correctly? Is the file extension supported? etc.
  if (!snsRecord || snsRecord.EventSource !== 'aws:sns') {
    return callback(new Error('Bad record'));
  }

  try {
    /*
   * Extract information from the event
   */

    // Extract S3 record
    const s3record = JSON.parse(snsRecord.Sns.Message).Records[0];

    const computedKey = s3record.s3.object.key;

    // elasticsearch client instantiation
    const client = elasticsearch.Client({
      host: `https://${API}`,
      apiVersion: '6.2',
      connectionClass,
      index: INDEX,
    });

    await client.deleteByQuery({
      index: INDEX,
      type: 'file',
      q: `computed_key:"${computedKey}"`,
    });

    return callback(null, 'All fine');
  } catch (err) {
    return callback(err);
  }
};

export default handler;