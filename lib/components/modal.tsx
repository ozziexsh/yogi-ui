import { Dialog, Transition } from '@headlessui/react';
import {
  createContext,
  Fragment,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { DivProps } from '../types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

const ModalContext = createContext<{ onClose(): void }>({
  onClose: () => void 0,
});

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

export function ModalHeader({
  children,
  closeButton = true,
}: PropsWithChildren<{ closeButton?: boolean }>) {
  const modal = useContext(ModalContext);

  return (
    <ModalBody className={'flex items-start justify-between pb-2 pt-4'}>
      <p className={'pr-4 text-2xl font-medium text-gray-700'}>{children}</p>

      {closeButton && (
        <button onClick={modal?.onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
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
  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </ModalContext.Provider>,
    document.body,
  );
}
