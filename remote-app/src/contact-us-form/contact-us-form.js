import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

const ContactUsForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateState = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = () => onSubmit(formState);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          name="name"
          value={formState.name}
          onChange={updateState}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          name="email"
          value={formState.email}
          onChange={updateState}
        />
      </Grid>
      <Grid item xs={12}>
        <TextareaAutosize
          name="message"
          style={{ width: "100%", padding: 0 }}
          placeholder="Enter a message..."
          minRows={5}
          value={formState.message}
          onChange={updateState}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          label="Submit"
          variant="contained"
          onClick={onFormSubmit}
          color="primary"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default ContactUsForm;
