import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Input } from '@/components';
import { PERSONAL_INFO_FIELDS } from '@/constants';
import { FormData, useFormData } from '@/context';

const schema = yup
  .object({
    name: yup.string().required('This is required field'),
    email: yup.string().email('Must be a valid email').required('This is required field'),
    phone: yup
      .string()
      .length(14, 'Phone must be exactly 14 characters')
      .required('This is required field'),
  })
  .required();

type SchemaFormData = yup.InferType<typeof schema>;

interface PersonalInfoProps {
  endAdornment: React.ReactNode;
}

export const PersonalInfo: FC<PersonalInfoProps> = ({ endAdornment }) => {
  const { formData, setFormValues, nextStep } = useFormData();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormData>({
    defaultValues: formData,
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const saveData = (values: Partial<FormData>) => {
    setFormValues(values);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(saveData)}
      className="PersonalInfo"
      autoComplete="off"
      noValidate
    >
      <h1 className="form-title">Personal info</h1>
      <p className="form-description">
        Please provide your name, email address, and phone number.
      </p>
      {PERSONAL_INFO_FIELDS.map(({ name, label, placeholder, type, mask }) => (
        <Controller
          key={label}
          render={({ field: { ref, ...rest } }) => (
            <Input
              label={label}
              placeholder={placeholder}
              error={errors[name]}
              type={type}
              mask={mask}
              ref={ref}
              {...rest}
            />
          )}
          name={name}
          control={control}
        />
      ))}
      {endAdornment}
    </form>
  );
};

export default PersonalInfo;
