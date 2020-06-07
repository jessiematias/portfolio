import React, { Component } from 'react';
import { TextField, ThemeProvider } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContainer, useStyles, FormTitle, SubmitButton } from './ContactFormStyles';
import theme from './theme';

const ContactForm = () => {
        const classes = useStyles();
        return (
            <ThemeProvider theme={theme}>
            <FormContainer>
                <FormTitle>Say something</FormTitle>
                <TextField
                    id="outlined-textarea"
                    label="First Name"
                    variant="outlined"
                    margin="dense"
                    className={`${classes.name} ${classes.rightMargin}`}
                    InputProps={{
                        classes: {
                          input: classes.fontSize,
                        },
                      }}
                />
                <TextField
                    id="outlined-textarea"
                    label="Last Name"
                    variant="outlined"
                    margin="dense"
                    className={classes.name}
                    InputProps={{
                        classes: {
                          input: classes.fontSize,
                        },
                      }}
                />
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    variant="outlined"
                    fullWidth={true}
                    margin="dense"
                    InputProps={{
                        classes: {
                          input: classes.fontSize,
                        },
                      }}

                />
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={8}
                    variant="outlined"
                    fullWidth={true}
                    margin="dense"
                    InputProps={{
                        classes: {
                          input: classes.fontSize,
                        },
                      }}
                />
                <SubmitButton>Submit</SubmitButton>
            </FormContainer>
            </ThemeProvider>
        )
    }

export default ContactForm