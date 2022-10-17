import styles from './index.module.css';

import {
  FormControl,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

type Radio = {
  value: string;
  label: string;
};

type FormRadioProps = {
  radioData: Radio[];
  label: string;
  id: string;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormRadio(props: FormRadioProps) {
  const { radioData, label, id, required, onChange } = props;

  return (
    <FormControl fullWidth required={required} className={styles.item}>
      <Typography component="label" id={id} className={styles.label}>
        {label}
      </Typography>

      <RadioGroup aria-labelledby={id} defaultValue="" name={id} row>
        {radioData.map((item, index) => {
          return (
            <FormControlLabel
              value={item.value}
              control={<Radio onChange={onChange} required={required} />}
              label={item.label}
              key={index}
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontWeight: '600',
                  color: '#333',
                },
              }}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
