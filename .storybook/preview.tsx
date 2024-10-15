import React from 'react';
import type { Preview } from "@storybook/react";
import { Button, ChakraProvider, Spacer } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const withProviders = (Story: React.FC, context) => {
  const validationSchema = Yup.object().shape({
    field: Yup.string().required("Field value is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema)};
  const { handleSubmit, control } = useForm(formOptions);
  const submit = async (data: any) => {
    console.log(data);
  };
  const methods = useForm();
  return (
    <RecoilRoot>
      <ChakraProvider>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submit)}>
            <Story {...context} control={control} />
            <Spacer h={4} />
            <Button type="submit">Submit</Button>
          </form>
        </FormProvider>
      </ChakraProvider>
    </RecoilRoot>
  )
};

const preview: Preview = {
  decorators: [withProviders],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
