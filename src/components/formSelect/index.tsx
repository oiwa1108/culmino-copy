import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type FormSelectProps = {
  selectData: number[];
  label: string;
  id: string;
  selectValue: string;
  onChange?: (event: SelectChangeEvent) => void;
};

export function FormSelect(props: FormSelectProps) {
  const { selectData, label, id, selectValue, onChange } = props;
  return (
    <FormControl sx={{ width: '32%' }} required>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        name={id}
        labelId={id}
        id={id}
        value={selectValue}
        label={id}
        onChange={onChange}
        sx={{ fontWeight: 600 }}
      >
        {selectData.map((value, index) => {
          return (
            <MenuItem value={value} key={index}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
