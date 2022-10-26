import { LoadingButton } from '@mui/lab';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import LinkComponent from '../../components/custom/link.component';
import FormikPasswordFieldComponent from '../../components/formik/formik-password-field.component';
import FormikTextFieldComponent from '../../components/formik/formik-text-field.component';
import { AppUrlEnum } from '../../routes/app-url.enum';
import { globalProps } from '../../styles/global.props';
import { signinValidationSchema } from '../../validations/auth/auth-validation';

const SigninScreen = () => {
  const { box1200 } = globalProps;

  /**
   * Local states
   */
  const [loading, setLoading] = useState(false);

  /**
   * Handlers
   */
  const handleSignin = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log(email);
      console.log(password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Input form
   */
  const signinForm = (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={signinValidationSchema}
      onSubmit={async values => {
        const { email, password } = values;
        return await handleSignin(email, password);
      }}>
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={4} mt={3}>
            <FormikTextFieldComponent
              label="Email"
              name="email"
              disabled={false}
              size="large"
            />
            <FormikPasswordFieldComponent formik={formik} loading={false} />

            <LoadingButton
              type="submit"
              loading={loading}
              variant="contained"
              fullWidth>
              Sign In
            </LoadingButton>
          </Stack>
        </form>
      )}
    </Formik>
  );

  return (
    <Box
      sx={{
        height: '100vh',
      }}>
      <Box sx={{ ...box1200 }}>
        <Box
          sx={{
            margin: '150px auto 20px auto',
            maxWidth: '600px',
            padding: { xs: '10px', sm: '20px' },
          }}>
          <Paper
            elevation={5}
            sx={{
              borderRadius: 3,
              padding: '50px 20px',
            }}>
            <Typography
              sx={{ fontSize: '2rem', fontWeight: 500, textAlign: 'center' }}
              color="primary">
              Sign in
            </Typography>

            {signinForm}

            <Stack spacing={1} sx={{ marginTop: '20px' }}>
              <LinkComponent
                name="Forgot Password?"
                linkTo={AppUrlEnum.ForgotPassword}
              />

              <LinkComponent
                name="Don't have an account? Sign up"
                linkTo={AppUrlEnum.Signup}
              />
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default SigninScreen;
