import Image from 'next/image';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import ButtonMain from '@/components/Button';
import { GoogleIcon, LockIcon, MailIcon } from '@/components/Icons';
import Logo from '@/components/Logo';
import { IForm, renderForm } from '@/shared/helpers/formRenderer';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import CheckboxField from '@/components/Form/CheckBoxField';

const signInSchema = z.object({
  email: z.string().email({ message: 'Email is invalid' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});

const signUpSchema = z.object({
  email: z.string().email({ message: 'Email is invalid' }),
  password: z.string().nonempty({ message: 'Password is required' }),
  confirmPassword: z.string().nonempty({ message: 'Confirm password is required' }),
});

const formSchema = z.union([signInSchema, signUpSchema]);

type FormFields = z.infer<typeof formSchema>;

export interface IAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: IAuthModalProps) {
  const { control, handleSubmit } = useForm<FormFields>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const styles = {
    base: 'py-10 dark:bg-bgSecondary',
    closeButton: 'text-2xl',
  };

  const forms: IForm[] = [
    {
      field: 'input',
      type: 'email',
      name: 'email',
      endContent: <MailIcon />,
    },
    {
      field: 'input',
      name: 'password',
      type: 'password',
      endContent: <LockIcon />,
    },
    {
      field: 'input',
      name: 'confirmPassword',
      type: 'password',
      endContent: <LockIcon />,
    },
  ];

  return (
    <Modal classNames={styles} size="2xl" backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalBody>
          <div className="mx-auto flex w-11/12 md:w-9/12  flex-col items-center">
            <Logo />
            <div className="max-md:mt-10 mt-12 whitespace-nowrap text-center text-3xl font-medium leading-10 text-primary">
              Sign Up
            </div>
            <div className="text-zinc-400 max-md:max-w-full mb-10 mt-2.5 text-center text-base font-medium leading-6">
              Let’s create your account and Shop like a pro and save money.
            </div>

            {renderForm(forms)}
            <div className="mb-7 mt-5 flex w-full items-center justify-between">
              <CheckboxField>Remember me</CheckboxField>
              <div className="text-blue font-medium text-[15px]">Forgot password?</div>
            </div>

            <ButtonMain className="mb-5" size="medium" color="yellow" fullWidth>
              Sign Up
            </ButtonMain>
            <ButtonMain
              fullWidth
              size="medium"
              className="font-medium"
              variant="bordered"
              startContent={<GoogleIcon />}
            >
              Sign up with Google
            </ButtonMain>

            <div className="max-md:mt-10 mt-11 flex items-stretch justify-center gap-2.5 whitespace-nowrap text-lg">
              <div className="text-zinc-400 grow leading-[144%]">You have an account yet?</div>
              <div className="text-blue font-medium leading-[144%]">Sign In</div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
