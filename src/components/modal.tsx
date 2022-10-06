import { Dialog, Transition } from '@headlessui/react';
import { Fragment, PropsWithChildren, useState } from 'react';
import { DivProps } from '../types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

interface Props {
  open: boolean;
  onClose(): void;
}

export function useModalToggle() {
  const [open, setOpen] = useState(false);

  return {
    open: () => setOpen(true),
    close: () => setOpen(false),
    props: {
      open,
      onClose: () => setOpen(false),
    },
  };
}

export function ModalHeader({ children }: PropsWithChildren) {
  return (
    <ModalBody className={'pb-2 pt-4'}>
      <p className={'text-2xl font-medium text-gray-700'}>{children}</p>
    </ModalBody>
  );
}

export function ModalBody({ children, ...props }: PropsWithChildren<DivProps>) {
  return (
    <div className={twMerge(classNames('px-6 py-4', props.className))}>
      {children}
    </div>
  );
}

export function ModalFooter({ children }: PropsWithChildren) {
  return <div className="bg-gray-50 px-4 py-3 sm:px-6">{children}</div>;
}

export default function Modal({
  open,
  onClose,
  children,
}: PropsWithChildren<Props>) {
  // todo: ssr?
  if (typeof window === 'undefined') {
    return null;
  }

  return createPortal(
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>,
    document.body,
  );
}
