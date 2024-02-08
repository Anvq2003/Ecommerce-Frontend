'use client';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { IActionForm, IForm, renderActionForm, renderForm } from '@/shared/helpers/formRenderer';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  fullName: z.string().nonempty({ message: 'Full name is required' }),
  phoneNumber: z.string().nonempty({ message: 'Phone number is required' }),
  email: z.string().nonempty({ message: 'Email is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});

type FormFields = z.infer<typeof formSchema>;
export interface IPersonalInfoProps {}

export default function PersonalInfo(props: IPersonalInfoProps) {
  const { control, handleSubmit } = useForm<FormFields>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const formLeft: IForm[] = useMemo(
    () => [
      {
        field: 'input',
        name: 'fullName',
        label: 'Full Name',
        placeholder: 'John Doe',
      },
      {
        field: 'input',
        name: 'phoneNumber',
        label: 'Phone Number',
        placeholder: '1234567890',
      },
    ],
    [],
  );

  const formRight: IForm[] = useMemo(
    () => [
      {
        field: 'input',
        name: 'email',
        label: 'Email',
        placeholder: 'admin@uihut.com"',
      },
      {
        field: 'input',
        name: 'password',
        label: 'Password',
        placeholder: '********',
      },
    ],
    [],
  );

  const actions: IActionForm[] = useMemo(
    () => [
      {
        label: 'Cancel',
        variant: 'light',
        className: 'font-medium',
      },
      {
        label: 'Save Edit',
        variant: 'light',
        color: 'yellow',
        className: 'font-medium',
      },
    ],
    [],
  );

  return (
    <div className='flex flex-col gap-main'>
      <div className="flex cursor-pointer items-center gap-3">
        <span>
          <ArrowLeftIcon className="h-5 w-5" />
        </span>
        <h1 className="text-[22px] font-medium">Personal Information</h1>
      </div>
      <div className="mb-3 flex flex-col gap-main xl:flex-row">
        {renderForm(formLeft)}
        {renderForm(formRight)}
      </div>
      <div className='flex gap-2 items-center justify-end'>{renderActionForm(actions)}</div>
    </div>
  );
}
