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

interface TextFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  inputProps?: InputProps;
  formControlProps?: FormControlProps;
}

function TextField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  inputProps,
  formControlProps,
}: TextFieldProps<TFieldValues>) {
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
      <Input id={name} {...field} {...inputProps} />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default TextField;
