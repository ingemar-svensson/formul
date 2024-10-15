import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  FormControlProps,
  Box,
  Text,
} from '@chakra-ui/react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { DatePickerProps } from 'react-datepicker';

interface FileFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  dropzoneOptions?: DropzoneOptions;
  dropzoneProps?: React.HTMLAttributes<HTMLElement>;
  dropzoneRender?: (props: DropzoneRenderProps) => React.ReactNode;
  formControlProps?: FormControlProps;
}

interface DropzoneRenderProps {
  getRootProps: () => any;
  getInputProps: () => any;
  isDragActive: boolean;
  acceptedFiles: File[];
  rejectedFiles: File[];
}

function FileField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  dropzoneOptions,
  dropzoneProps,
  formControlProps,
}: FileFieldProps<TFieldValues>) {
  const { 
    field,
    fieldState: { error },
  } = useController<TFieldValues>({
    name,
    control,
  });
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({
    ...dropzoneOptions,
    onDrop: (acceptedFiles: File[], fileRejections) => {
      field.onChange(acceptedFiles);
    },
  });
  return (
    <FormControl isInvalid={!!error} {...formControlProps}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Box
        {...getRootProps({ ...dropzoneProps })}
        p={4}
        borderWidth={2}
        borderStyle="dashed"
        borderColor="gray.400"
        borderRadius="md"
        textAlign="center"
      >
        <input type="button" {...getInputProps()} style={{ display: 'none' }} />
        <Text>
          {isDragActive
            ? 'Drop the files here...'
            : 'Drag and drop some files here, or click to select files'}
        </Text>
      </Box>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default FileField;
