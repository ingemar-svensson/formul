import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  FormControlProps,
} from '@chakra-ui/react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';
import ReactDatePicker, { DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  datePickerProps?: Partial<Omit<DatePickerProps, 'selected' | 'onChange' | 'selectsRange' | 'selectsMultiple'>>;
  inputProps?: InputProps,
  formControlProps?: FormControlProps;
}

function DateField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  datePickerProps,
  inputProps,
  formControlProps,
}: DateFieldProps<TFieldValues>) {
  const { 
    field,
    fieldState: { error },
  } = useController<TFieldValues>({
    name,
    control,
  });
  return (
    <FormControl isInvalid={!!error} {...formControlProps}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ReactDatePicker
        id={name}
        selected={field.value}
        onChange={(date: Date | null) => field.onChange(date)}
        onBlur={field.onBlur}
        customInput={<Input ref={field.ref} {...inputProps} />}
        {...datePickerProps}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default DateField;
