import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormControlProps,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';

interface TextareaFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  textareaProps?: TextareaProps;
  formControlProps?: FormControlProps;
}

function TextareaField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  textareaProps,
  formControlProps,
}: TextareaFieldProps<TFieldValues>) {
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
      <Textarea id={name} {...field} {...textareaProps} />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default TextareaField;
