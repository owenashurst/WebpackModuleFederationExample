import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

const ContactUsForm = React.lazy(() => import("ContactUsApp/contact-us-form"));

const ContactUs = () => {
  const [contactFormData, setContactFormData] = useState(null);

  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={5}>
        <h2>Contact Us</h2>
        <React.Suspense fallback="Loading Contact Us Form...">
          <ContactUsForm
            onSubmit={(formData) => setContactFormData(formData)}
          />
        </React.Suspense>
      </Grid>
      {contactFormData && (
        <Grid item xs={5}>
          {JSON.stringify(contactFormData, null, 2)}
        </Grid>
      )}
    </Grid>
  );
};

export default ContactUs;
