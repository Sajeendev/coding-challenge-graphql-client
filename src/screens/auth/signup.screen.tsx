import { LoadingButton } from '@mui/lab';
import { Box, Paper, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import LinkComponent from '../../components/custom/link.component';
import FormikCheckBoxComponent from '../../components/formik/formik-check-box.component';
import FormikPasswordFieldComponent from '../../components/formik/formik-password-field.component';
import FormikTextFieldComponent from '../../components/formik/formik-text-field.component';
import { envs } from '../../config/env-variables';
import { useRecaptchaV2 } from '../../recaptcha/use-recaptcha-v2';
import { useRecaptchaV3 } from '../../recaptcha/use-recaptcha-v3';
import { AppUrlEnum } from '../../routes/app-url.enum';
import { globalProps } from '../../styles/global.props';

const SignupScreen = () => {
  const { box1200 } = globalProps;
  const { loadRecaptchaScriptV3, generateRecaptchaToken } = useRecaptchaV3();
  const { loadRecaptchaScriptV2 } = useRecaptchaV2();
  /**
   * Local states
   */
  const [loading, setLoading] = useState(false);

  /**
   * Effects
   */
  useEffect(() => {
    loadRecaptchaScriptV3();
    loadRecaptchaScriptV2();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handlers
   */
  const handleSignup = async (
    email: string,
    password: string,
    resetForm: any
  ) => {
    setLoading(true);
    try {
      // await (window as any).grecaptcha.execute();
      const token = await generateRecaptchaToken();
      if (token) {
        const response = await axios.post(`${envs.serverUrl}/api/recaptcha`, {
          token,
        });
        if (response?.data) {
          console.log(response?.data);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Input form
   */
  const signupForm = (
    <Formik
      initialValues={{
        email: '',
        password: '',
        acceptTerms: false,
      }}
      // validationSchema={signupValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        const { email, password } = values;
        return await handleSignup(email, password, resetForm);
      }}>
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={4} mt={3}>
            <FormikTextFieldComponent
              label="Email"
              name="email"
              size="large"
              disabled={loading}
            />
            <FormikPasswordFieldComponent formik={formik} loading={loading} />

            <FormikCheckBoxComponent
              name="acceptTerms"
              label={
                <Typography sx={{ fontSize: '0.9rem' }}>
                  I agree to the User Agreement, and acknowledge the Privacy
                  Policy.
                </Typography>
              }
            />

            <LoadingButton
              type="submit"
              loading={loading}
              variant="contained"
              fullWidth>
              Create account
            </LoadingButton>

            <Box
              className="g-recaptcha"
              data-sitekey="6LeuWNkhAAAAAEVEBYB1tXFCLoTj_3Hg_yXNuyF-"
              // data-size="invisible"
              data-theme="light"
              data-callback="handleRecaptchaSubmit"></Box>
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
            margin: '100px auto 20px auto',
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
              Sign up
            </Typography>

            {signupForm}

            <Stack spacing={1} sx={{ marginTop: '20px' }}>
              <LinkComponent
                name="Already have an account? Sign in"
                linkTo={AppUrlEnum.Signin}
              />
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupScreen;
