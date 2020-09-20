import { Grid, Input, TextField, Box, Button, Link, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import AWS from 'aws-sdk';
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      projDesc: "",
      token: "",
      success: false,
      message: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);

    AWS.config.update({
      apiVersion: '2010-12-01',
      region: 'us-west-2',
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.token === "") {
      return;
    }

    let emailContent = `<html><body><dl><dt>Name</dt><dd>${this.state.name}</dd><dt>Email</dt><dd>${this.state.email}</dd><dt>Project description</dt><dd>${this.state.projDesc}</dd></dl></body></html>`;
    var params = {
      Destination: { /* required */
        ToAddresses: [ 'kelly@redflannel.co' ]
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
          Data: 'Test email'
         }
        },
      Source: "admin@redflannel.co", /* required */
      ReplyToAddresses: [ this.state.email ],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES().sendEmail(params).promise();
    const thisComp = this;

    // Handle promise's fulfilled/rejected states
    sendPromise.then((data) => {
        console.log("Email sent. Message ID:", data.MessageId);
        thisComp.setState({open: true, success: true, message: "Thanks for reaching out! You'll hear from me soon.", name: "", email: "", projDesc: ""});
      }).catch((err) => {
        console.error(err, err.stack);
        thisComp.setState({open: true, success: false, message: <>Your message could not be sent, but an error has been logged. <Link href="mailto:kelly@redflannel.co?subject=Your contact form errored" target="_blank">Send me an email</Link> instead.</>});
      });
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({open: false});
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField required id="name" name="name" label="Name" value={this.state.name} fullWidth
                autoComplete="name" variant="outlined" color="secondary" onChange={(e) => this.setState({name: e.target.value})} />
              <TextField required id="email" name="email" label="Email address" value={this.state.email} fullWidth
                autoComplete="email" variant="outlined" color="secondary" onChange={(e) => this.setState({email: e.target.value})}
                margin="normal" type="email" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required id="projdesc" name="projdesc" label="Describe your project" value={this.state.projDesc} fullWidth
                autoComplete="off" variant="outlined" color="secondary" onChange={(e) => this.setState({projDesc: e.target.value})}
                multiline rows={4} />
            </Grid>
            <Grid item component={Box} xs={12} textAlign="right">
              <GoogleReCaptcha onVerify={(token) => this.setState({token})} />
              <Input type="hidden" name="token" value={this.state.token} />
              <Button variant="contained" color="primary" type="submit" size="large" endIcon={<FontAwesomeIcon icon={faPaperPlane} />}>Send</Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar anchorOrigin={{vertical: "top", horizontal: "center"}} open={this.state.open} autoHideDuration={4000} onClose={this.handleClose}>
          <MuiAlert elevation={6} variant="filled" severity={this.state.success ? "success" : "error"}>
            {this.state.message}
          </MuiAlert>
        </Snackbar>
      </>
    );
  }
}