import { TextField } from '@mui/material';
import { useField } from 'formik';

const FormikTextFieldComponent = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      fullWidth
      size={props.size ?? 'small'}
      variant="outlined"
      label={label}
      helperText={meta.touched && meta.error}
    />
  );
};

export default FormikTextFieldComponent;
