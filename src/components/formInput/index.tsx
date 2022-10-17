import styles from './index.module.css';

import { FormControl, Input, Typography } from '@mui/material';

type FormInputProps = {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  type?: string;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormInput(props: FormInputProps) {
  const { label, id, name, placeholder, value, type, required, onChange } =
    props;
  return (
    <FormControl fullWidth required={required} className={styles.item}>
      <Typography component="label" htmlFor={id} className={styles.label}>
        {label}
      </Typography>
      <Input
        id={id}
        aria-describedby={id}
        name={name}
        placeholder={placeholder && placeholder}
        value={value}
        type={type && type}
        className={styles.input}
        onChange={onChange}
      />
    </FormControl>
  );
}
