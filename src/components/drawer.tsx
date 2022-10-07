import {
  createContext,
  Fragment,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

const DrawerContext = createContext<{ onClose(): void }>({
  onClose: () => void 0,
});

export function DrawerBody({ children }: PropsWithChildren) {
  return <div className="relative mt-6 flex-1 px-4 sm:px-6">{children}</div>;
}

export function DrawerHeader({
  closeButton = true,
  children,
}: PropsWithChildren<{ closeButton?: boolean }>) {
  const drawer = useContext(DrawerContext);

  return (
    <div className="px-4 sm:px-6">
      <div className="flex items-start justify-between">
        <Dialog.Title className="text-lg font-medium text-gray-900">
          {children}
        </Dialog.Title>
        {closeButton && (
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={drawer?.onClose}
            >
              <span className="sr-only">Close panel</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const directionProps = {
  right: {
    container: 'inset-y-0 right-0 pl-10',
    enterFrom: 'translate-x-full',
    enterTo: 'translate-x-0',
    leaveFrom: 'translate-x-0',
    leaveTo: 'translate-x-full',
    panel: 'h-full max-w-md',
  },
  left: {
    container: 'inset-y-0 left-0 pr-10',
    enterFrom: '-translate-x-full',
    enterTo: 'translate-x-0',
    leaveFrom: 'translate-x-0',
    leaveTo: '-translate-x-full',
    panel: 'h-full max-w-md',
  },
  top: {
    container: 'top-0 pb-10',
    enterFrom: '-translate-y-full',
    enterTo: 'translate-y-0',
    leaveFrom: 'translate-y-0',
    leaveTo: '-translate-y-full',
    panel: 'h-64',
  },
  bottom: {
    container: 'bottom-0 pt-10',
    enterFrom: 'translate-y-full',
    enterTo: 'translate-y-0',
    leaveFrom: 'translate-y-0',
    leaveTo: 'translate-y-full',
    panel: 'h-64',
  },
};

interface Props {
  open: boolean;
  onClose(): void;
  direction?: 'right' | 'left' | 'top' | 'bottom';
}

export default function Drawer({
  open,
  onClose,
  children,
  direction = 'right',
}: PropsWithChildren<Props>) {
  const directionClasses = directionProps[direction];

  return createPortal(
    <DrawerContext.Provider value={{ onClose }}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={twMerge(
                  classNames(
                    'pointer-events-none fixed flex max-w-full',
                    directionClasses.container,
                  ),
                )}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom={directionClasses.enterFrom}
                  enterTo={directionClasses.enterTo}
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom={directionClasses.leaveFrom}
                  leaveTo={directionClasses.leaveTo}
                >
                  <Dialog.Panel
                    className={classNames(
                      'pointer-events-auto w-screen',
                      'flex flex-col overflow-y-scroll bg-white py-6 shadow-xl',
                      directionClasses.panel,
                    )}
                  >
                    {children}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </DrawerContext.Provider>,
    document.body,
  );
}
