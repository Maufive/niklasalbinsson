import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { LINKS } from './links';
import { CloseIcon } from '../icons';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  pathname: string;
};

const DrawerMenu: React.FC<Props> = ({ isOpen, closeModal, pathname }) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto"
      onClose={() => closeModal()}
    >
      <div className="min-h-screen">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-zinc-900/50" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-full"
        >
          <div className="inline-block h-screen w-9/12 transform overflow-hidden rounded-r-md bg-zinc-200 pt-4 shadow-sm transition-all dark:bg-zinc-900">
            <Dialog.Title
              as="button"
              className="rounded-md pl-3 focus:outline-2 focus:outline-primary"
              onClick={() => closeModal()}
            >
              <CloseIcon className="h-6 w-6" />
            </Dialog.Title>

            <ol className="mt-6 flex flex-col">
              <Link href="/" passHref>
                <li
                  className={
                    pathname === '/'
                      ? 'mb-2 border-l-4 border-primary py-2 px-3'
                      : 'mb-2 py-2 px-3'
                  }
                >
                  <a
                    className={
                      pathname === '/'
                        ? 'font-bold text-zinc-900 transition-colors hover:text-zinc-800 dark:text-zinc-100'
                        : 'font-normal text-zinc-600 transition-colors dark:text-zinc-500 dark:hover:text-zinc-200'
                    }
                  >
                    Home
                  </a>
                </li>
              </Link>
              {LINKS.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                  <li
                    className={
                      pathname === link.href
                        ? 'mb-2 border-l-4 border-primary py-2 px-3'
                        : 'mb-2 py-2 px-3'
                    }
                  >
                    <a
                      className={
                        pathname.includes(link.href)
                          ? 'font-bold text-zinc-900 transition-colors hover:text-zinc-800 dark:text-zinc-100'
                          : 'font-normal text-zinc-600 transition-colors dark:text-zinc-500 dark:hover:text-zinc-200'
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                </Link>
              ))}
            </ol>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

export default DrawerMenu;
