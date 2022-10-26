import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import { useField } from 'formik';

const FormikCheckBoxComponent = ({ children, label, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <FormControl
      component="fieldset"
      error={meta.touched && Boolean(meta.error)}>
      <FormControlLabel
        label={label}
        control={<Checkbox {...field} {...props} />}
        sx={{ color: 'text.secondary' }}
      />

      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
};

export default FormikCheckBoxComponent;
