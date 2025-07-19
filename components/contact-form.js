import { useReducer } from 'react';
import { Grid, TextField, Box, Button, Link, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm(props) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: "",
      email: "",
      projDesc: "",
      token: "",
      open: false,
      success: false,
      message: null,
      sending: false
    }
  );

  const handleSubmit = async (e) => {
    setState({sending: true});
    e.preventDefault();

    const token = await executeRecaptcha("contact");
    if (token === "") {
      return;
    }

    fetch(`contact.php`, {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        projDesc: state.projDesc,
        token: token
      })
    }).then((res) => {
      return res.json();
    }).then(content => {
      if (content.success) {
        console.log("Email sent. Message ID:", content.sesMessageId);
        setState({sending: false, open: true, success: true, message: "Thanks for reaching out! You'll hear from me soon.", name: "", email: "", projDesc: ""});
      } else {
        throw new Error(content.message);
      }
    }).catch(error => {
      setState({sending: false, open: true, success: false, message: "Your message could not be sent, but an error has been logged."});
      console.error(error);
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({open: false});
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField required id="name" name="name" label="Name" value={state.name} fullWidth
                autoComplete="name" variant="outlined" color="secondary" onChange={(e) => setState({name: e.target.value})} />
              <TextField required id="email" name="email" label="Email address" value={state.email} fullWidth
                autoComplete="email" variant="outlined" color="secondary" onChange={(e) => setState({email: e.target.value})}
                margin="normal" type="email" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required id="projdesc" name="projdesc" label="Describe your project" value={state.projDesc} fullWidth
                autoComplete="off" variant="outlined" color="secondary" onChange={(e) => setState({projDesc: e.target.value})}
                multiline rows={4} />
            </Grid>
            <Grid item component={Box} xs={12} textAlign="right">
              <Button variant="contained" color="primary" type="submit" size="large" disabled={state.sending}
                endIcon={<FontAwesomeIcon icon={state.sending ? faSyncAlt : faPaperPlane} />} spin={state.sending.toString()}>
                  {state.sending ? "Sending" : "Send"}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar anchorOrigin={{vertical: "top", horizontal: "center"}} open={state.open} autoHideDuration={4000} onClose={handleClose}>
          <MuiAlert elevation={6} variant="filled" severity={state.success ? "success" : "error"}>
            {state.message}
            {!state.success &&
              <>{" "}<Link href="mailto:kelly@redflannel.co?subject=Your contact form errored" target="_blank" rel="noopener" color="textSecondary">Send me an email</Link>{" "}instead.</>
            }
          </MuiAlert>
        </Snackbar>
      </>
    );
}