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

interface PasswordFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  inputProps?: InputProps;
  formControlProps?: FormControlProps;
}

function PasswordField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  inputProps,
  formControlProps,
}: PasswordFieldProps<TFieldValues>) {
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
      <Input id={name} {...field} {...inputProps} type="password" />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default PasswordField;
