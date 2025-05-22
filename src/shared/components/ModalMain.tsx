import { isArray } from 'lodash';
import { useCallback } from 'react';

import { IActionForm, renderActionForm } from '@/shared/helpers/formRenderer';
import { IModal } from '@/shared/types';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps } from "@heroui/react";

export interface IModalMainProps extends ModalProps {
  title: string;
  modal: IModal;
  setModal: (modal: IModal) => void;
  actions?: IActionForm[];
  children: React.ReactNode;
}

export default function ModalMain(props: IModalMainProps) {
  const { title, modal, actions, children, setModal } = props;
  const styles = {
    base: 'p-4 md:p-main dark:bg-bgSecondary',
    body: 'py-6',
    closeButton: 'text-2xl',
  };

  const onClose = useCallback(() => setModal({ open: false }), [setModal]);

  return (
    <Modal classNames={styles} size="4xl" isOpen={modal.open} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-[22px] font-semibold">{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        {isArray(actions) && <ModalFooter>{renderActionForm(actions)}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}
