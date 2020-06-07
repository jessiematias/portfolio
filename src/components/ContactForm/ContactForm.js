import React, { useState } from 'react';
import axios from "axios";
import { TextField, ThemeProvider } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer, useStyles, FormTitle, SubmitButton, Thanks } from './ContactFormStyles';
import theme from './theme';

const formSchema = Yup.object().shape({
    name: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string()
        .email("Invalid email")
        .required("Required"),
    message: Yup.string().required("Required")
})

const ContactForm = () => {
    const classes = useStyles()

    const [serverState, setServerState] = useState()
    const handleServerResponse = (ok, msg) => {
        setServerState({ ok, msg })
    }

    const handleOnSubmit = (values, actions) => {
        axios({
            method: "POST",
            url: "https://formspree.io/xwkrozbg",
            data: values
        })
            .then(response => {
                actions.setSubmitting(false)
                actions.resetForm()
                handleServerResponse(true, "Thanks for your message! :-)")
            })
            .catch(error => {
                actions.setSubmitting(false);
                handleServerResponse(false, error.response.data.error);
            })
    }

    return (
        <ThemeProvider theme={theme}>

            <Formik
                initialValues={{ name: "", lastName: "", email: "", message: "" }}
                onSubmit={handleOnSubmit}
                validationSchema={formSchema}
            >
                {({ isSubmitting }) => (
                    <Form id="fs-frm" noValidate>
                        <FormContainer>
                            <FormTitle>Say something</FormTitle>

                            <Field
                                name="name"
                                render={({ field }) => <TextField
                                    id="outlined-textarea"
                                    className={`${classes.name} ${classes.rightMargin}`}
                                    label="First Name"
                                    variant="outlined"
                                    margin="dense"
                                    InputProps={{
                                        classes: {
                                            input: classes.fontSize,
                                        },
                                    }}   {...field} />}
                            />
                            <ErrorMessage name="name" className="errorMsg" component="p" />

                            <Field
                                name="lastName"
                                render={({ field }) => <TextField
                                    id="outlined-textarea"
                                    className={`${classes.name} ${classes.rightMargin}`}
                                    label="Last Name"
                                    variant="outlined"
                                    margin="dense"
                                    InputProps={{
                                        classes: {
                                            input: classes.fontSize,
                                        },
                                    }}   {...field} />}
                            />
                            <ErrorMessage name="lastName" className="errorMsg" component="p" />

                            <Field
                                name="email"
                                render={({ field }) => <TextField
                                    id="outlined-textarea"
                                    label="Email"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth={true}
                                    className={`${classes.widthEmailandMessage}`}
                                    InputProps={{
                                        classes: {
                                            input: classes.fontSize,
                                        },
                                    }}   {...field} />}
                            />
                            <ErrorMessage name="email" className="errorMsg" component="p" />

                            <Field
                                name='message'
                                render={({ field }) => <TextField
                                    className={`${classes.widthEmailandMessage}`}
                                    label="Message"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth={true}
                                    rows={8}
                                    multiline
                                    InputProps={{
                                        classes: {
                                            input: classes.fontSize,
                                        },
                                    }}   {...field} />}
                            />

                            <ErrorMessage name="message" className="errorMsg" component="p" />

                            <SubmitButton type="submit" disabled={isSubmitting} >Submit</SubmitButton>
                        </FormContainer>

                        {/* {serverState && (
                            <p className={!serverState.ok ? "errorMsg" : ""}>
                              
                            </p>
                        )} */}
                         { serverState && serverState.ok && serverState.msg && (
              <Thanks>{ serverState.msg }</Thanks>
         )}
                    </Form>
                )}
            </Formik>

        </ThemeProvider>
    )
}

export default ContactForm