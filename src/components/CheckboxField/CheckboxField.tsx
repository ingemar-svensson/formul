import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  Checkbox,
  CheckboxProps,
  FormControlProps,
} from '@chakra-ui/react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';

interface CheckboxFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  checkboxProps?: CheckboxProps;
  formControlProps?: FormControlProps;
}

function CheckboxField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  checkboxProps,
  formControlProps,
}: CheckboxFieldProps<TFieldValues>) {
  const { 
    field,
    fieldState: { error },
  } = useController<TFieldValues>({
    name,
    control,
  });
  return (
    <FormControl isInvalid={!!error} {...formControlProps}>
      <Checkbox
        id={name}
        {...field}
        isChecked={field.value}
        {...checkboxProps}
      >
        {label}
      </Checkbox>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default CheckboxField;
