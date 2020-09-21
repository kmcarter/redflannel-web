import AWS from 'aws-sdk';

const minimum_score = parseFloat(process.env.GOOGLE_RECAPTCHA_MINIMUM_SCORE);

export default async (req, res) => {
  return new Promise(async (resolve) => {
    if (!await verifyRecaptcha(req.body['token'])) {
      res.statusCode = 403
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, message: "Google RECAPTCHA token could not be verified." }))
      return resolve();
    }

    AWS.config.update({
      apiVersion: '2010-12-01',
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    //TODO: put this somewhere better, either SES templated email, or in its own file
    let emailContent = `<html><body><dl><dt>Name</dt><dd>${req.body['name']}</dd><dt>Email</dt><dd>${req.body['email']}</dd><dt>Project description</dt><dd>${req.body['projDesc']}</dd></dl></body></html>`;

    var params = {
      Destination: { /* required */
        ToAddresses: ['kelly@redflannel.co']
      },
      Message: { /* required */
        Body: { /* required */
          Html: {
            Charset: "UTF-8",
            Data: emailContent
          },
          Text: {
            Charset: "UTF-8",
            Data: emailContent
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: '[Red Flannel] contact submission'
        }
      },
      Source: "Red Flannel Admin <admin@redflannel.co>", /* required */
      ReplyToAddresses: [req.body['email']],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES().sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    res.setHeader('Content-Type', 'application/json')
    sendPromise.then((data) => {
      console.log("Email sent. Message ID:", data.MessageId);
      res.statusCode = 200
      res.end(JSON.stringify({ success: true, sesMessageId: data.MessageId }));
      return resolve();
    }).catch((err) => {
      console.error(err, err.stack);
      res.statusCode = 500
      res.end(JSON.stringify({ success: false, message: err }))
      return resolve();
    });
  });
}

async function verifyRecaptcha(token) {
  let verified = false;
  const formData = new URLSearchParams();
  formData.set("secret", process.env.GOOGLE_RECAPTCHA_SECRET_KEY);
  formData.set("response", token);

  await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "post",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  }).then(data => {
    if (!data.ok) {
      console.error("Google RECAPTCHA could not be reached");
    }
    return data.json();
  }).then(content => {
    console.log(content);
    if (content['success']) {
      if (parseFloat(content['score']) >= minimum_score) {
        verified = true;
      } else {
        console.info(`RECAPTCHA score of ${content["score"]} did not meet minimum of ${minimum_score}`)
      }
    } else {
      console.error(`Google RECAPTCHA returned a failure: ${content["error-codes"]}`)
    }
  });
  return verified;
}