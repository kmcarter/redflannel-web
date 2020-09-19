import { Grid, Input, TextField, Box, Button } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import AWS from 'aws-sdk';
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {token: ""};

    AWS.config.update({
      apiVersion: '2010-12-01',
      region: 'us-west-2',
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    const form = new FormData(e.target);
    if (!form.get("recaptcha-token")) {
      return;
    }

    let email = `<html><body><dl><dt>Name</dt><dd>${form.get("name")}</dd><dt>Email</dt><dd>${form.get("email")}</dd><dt>Project description</dt><dd>${form.get("projdesc")}</dd></dl></body></html>`;
    var params = {
      Destination: { /* required */
        ToAddresses: [
          'kelly@redflannel.co',
        ]
      },
      Message: { /* required */
        Body: { /* required */
          Html: {
           Charset: "UTF-8",
           Data: email
          },
          Text: {
           Charset: "UTF-8",
           Data: email
          }
         },
         Subject: {
          Charset: 'UTF-8',
          Data: 'Test email'
         }
        },
      Source: "admin@redflannel.co", /* required */
      ReplyToAddresses: [
        form.get("email")
      ],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES().sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
      function(data) {
        console.log(data.MessageId);
      }).catch(
        function(err) {
        console.error(err, err.stack);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField required id="name" name="name" label="Name" fullWidth autoComplete="name" variant="outlined" color="secondary" />
            <TextField required id="email" name="email" label="Email address" fullWidth autoComplete="email" variant="outlined" color="secondary" margin="normal" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="projdesc" name="projdesc" label="Describe your project" fullWidth autoComplete="off" variant="outlined" color="secondary" multiline rows={4} />
          </Grid>
          <Grid item component={Box} xs={12} textAlign="right">
            <GoogleReCaptcha onVerify={(token) => this.setState({token})} />
            <Input type="hidden" name="recaptcha-token" value={this.state.token} />
            <Button variant="contained" color="primary" type="submit" size="large" endIcon={<FontAwesomeIcon icon={faPaperPlane} />}>Send</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}