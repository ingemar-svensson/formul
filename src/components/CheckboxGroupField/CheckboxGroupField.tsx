import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  Checkbox,
  FormControlProps,
  CheckboxGroupProps,
  CheckboxGroup,
  Stack,
  CheckboxProps,
  StackProps,
  FormLabel,
} from '@chakra-ui/react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';

export interface Option {
  value: string | number;
  label?: string;
}

interface CheckboxGroupFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  options: Option[];
  stackProps?: StackProps;
  checkboxProps?: CheckboxProps;
  checkboxGroupProps?: CheckboxGroupProps;
  formControlProps?: FormControlProps;
}

function CheckboxGroupField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  options,
  stackProps,
  checkboxProps,
  checkboxGroupProps,
  formControlProps,
}: CheckboxGroupFieldProps<TFieldValues>) {
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
      <CheckboxGroup
        value={field.value || []}
        onChange={(value) => field.onChange(value)}
        {...checkboxGroupProps}
      >
        <Stack {...stackProps}>
          {options.map((option) => (
            <Checkbox
              key={option.value}
              value={option.value}
              {...checkboxProps}
              colorScheme="brand"
            >
              {option.label}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default CheckboxGroupField;
