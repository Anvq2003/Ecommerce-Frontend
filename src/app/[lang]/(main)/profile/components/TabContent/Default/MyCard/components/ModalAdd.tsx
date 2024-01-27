import React, { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import ButtonMain from '@/components/Button';
import renderForm, { IForm } from '@/shared/helpers/formRenderer';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';

import { FormFields, IAction, IModalAddProps } from '../types';

export const formSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  cardNumber: z.string().nonempty({ message: 'Card number is required' }),
  expireDate: z.string().nonempty({ message: 'Expire date is required' }),
  cvv: z.string().nonempty({ message: 'CVV is required' }),
});

export default function ModalAdd({ modal, setModal }: IModalAddProps) {
  const { control, handleSubmit } = useForm<FormFields>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onClose = useCallback(() => setModal({ open: false }), [setModal]);

  const formLeft: IForm[] = useMemo(
    () => [
      {
        field: 'input',
        name: 'name',
        label: 'Name',
        placeholder: 'Imran Khan',
        control,
      },
      {
        field: 'input',
        name: 'cardNumber',
        label: 'Card Number',
        placeholder: '1234 5678 9012 3456',
        control,
      },
      {
        field: 'input',
        name: 'cvv',
        label: 'CVV',
        placeholder: '123',
        control,
      },
    ],
    [control],
  );

  const formRight: IForm[] = useMemo(
    () => [
      {
        field: 'input',
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Khan',
      },
      {
        field: 'input',
        name: 'expireDate',
        label: 'Expiry Date',
        placeholder: '10/22',
      },
      {
        field: 'input',
        name: 'phoneNumber',
        label: 'Phone Number',
        placeholder: '1234567890',
      },
    ],
    [control],
  );

  const actions: IAction[] = useMemo(
    () => [
      {
        label: 'Close',
        variant: 'light',
        color: 'danger',
        className: '',
        onPress: onClose,
      },
      {
        label: 'Save Card',
        variant: 'light',
        color: 'yellow',
        className: 'font-medium',
        onPress: onClose,
      },
    ],
    [onClose],
  );

  const styles = {
    body: 'py-6',
    base: 'p-4 md:p-main',
    closeButton: 'text-2xl',
  };

  return (
    <Modal classNames={styles} size="4xl" isOpen={modal.open} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-[22px] font-semibold">
              Add credit or debit card
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-1 gap-main md:grid-cols-2">
                {renderForm(formLeft)}
                {renderForm(formRight)}
              </div>
            </ModalBody>
            <ModalFooter>
              {actions.map((action, index) => (
                <ButtonMain
                  key={index}
                  color={action.color}
                  variant={action.variant}
                  className={action.className}
                  onPress={action.onPress}
                >
                  {action.label}
                </ButtonMain>
              ))}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
