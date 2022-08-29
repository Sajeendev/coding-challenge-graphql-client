import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { MouseEvent, useState } from 'react';

interface PasswordFieldProps {
  formik: any;
  loading: boolean;
}

const FormikPasswordFieldComponent = (props: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const { formik, loading } = props;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      name="password"
      label="Password"
      type={showPassword ? 'text' : 'password'}
      value={formik.values.password}
      onChange={formik.handleChange}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}
      disabled={loading}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default FormikPasswordFieldComponent;
