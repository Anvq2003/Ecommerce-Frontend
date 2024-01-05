import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CartIcon } from "@/components/Icons";

interface ISidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Sidebar({ isOpen, onOpenChange }: ISidebarProps) {
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onOpenChange}>
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
            <div className="pointer-events-none fixed inset-y-0 left-0 flex w-80 max-w-full shadow-[0px,40px,90px,20px,rgba(23,28,40,0.40)]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-700 sm:duration-900 delay-150"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-700 sm:duration-900 delay-150"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="dark: flex h-full flex-col overflow-y-auto bg-white p-5 shadow-xl dark:bg-bgPrimary">
                    <ArrowLeftIcon
                      className="h-6 w-6 text-textPrimary cursor-pointer"
                      onClick={() => onOpenChange(false)}
                    />
                    <div className="my-5 flex flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-textPrimary">
                          <CartIcon />
                          Cart
                        </div>
                        <span className="text-textPrimary">2</span>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
