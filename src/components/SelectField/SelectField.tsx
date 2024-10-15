import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormControlProps,
  FormLabel,
  SelectProps,
} from '@chakra-ui/react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';
import { Select } from 'chakra-react-select';
import { Props as ReactSelectProps } from 'react-select';

export interface Option {
  value: string | number;
  label?: string;
}

interface SelectFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  options: Option[];
  selectProps?: Partial<ReactSelectProps<Option, false>>;
  onSelect?: any;
  formControlProps?: FormControlProps;
}

function SelectField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  options,
  selectProps,
  onSelect,
  formControlProps,
}: SelectFieldProps<TFieldValues>) {
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
      <Select
        {...field}
        options={options}
        onChange={(selectedOption) => {
          field.onChange(selectedOption ? selectedOption.value : null);
          if(onSelect) {
            onSelect(selectedOption, field);
          }
        }}
        onBlur={field.onBlur}
        value={
          options.find((option) => option.value === field.value) || null
        }
        colorScheme='brand'
        {...selectProps}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default SelectField;
