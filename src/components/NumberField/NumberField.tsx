import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormControlProps,
  NumberInput,
  NumberInputProps,
  NumberInputField,
} from '@chakra-ui/react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';

interface NumberFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  numberInputProps?: NumberInputProps;
  formControlProps?: FormControlProps;
}

function NumberField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  numberInputProps,
  formControlProps,
}: NumberFieldProps<TFieldValues>) {
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
      <NumberInput
        {...numberInputProps}
        value={field.value || ''}
        onChange={(valueString) => field.onChange(Number(valueString))}
      >
        <NumberInputField id={name} {...field} />
      </NumberInput>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default NumberField;
