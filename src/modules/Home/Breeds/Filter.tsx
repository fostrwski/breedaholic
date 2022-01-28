import { Dialog, Disclosure } from "@headlessui/react";
import { AdjustmentsIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import Button from "common/components/Button";
import Container from "common/components/Container";
import React, { useState } from "react";

const filters = [
  {
    title: "Category",
    component: <h1>Lorem ipsum dolor sit.</h1>,
  },
  {
    title: "Size",
    component: <h1>Lorem ipsum dolor sit.</h1>,
  },
  {
    title: "Temperament",
    component: <h1>Lorem ipsum dolor sit.</h1>,
  },
  {
    title: "Color",
    component: <h1>Lorem ipsum dolor sit.</h1>,
  },

  {
    title: "Origin",
    component: <h1>Lorem ipsum dolor sit.</h1>,
  },
];

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <Container customClasses="bg-gray-100 py-6 rounded-b-2xl">
          <Dialog.Title className="mb-8 font-bold text-2xl">
            Filter breeds
          </Dialog.Title>
          <>
            {filters.map((filter, id) => (
              <div key={filter.title}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="p-2 rounded-xl w-full flex items-center justify-between">
                        <span className="font-semibold">{filter.title}</span>
                        {open ? (
                          <ChevronUpIcon className="w-5 h-5" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-4 px-2">
                        {filter.component}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {id !== filters.length - 1 && (
                  <hr className="rounded-full my-4" />
                )}
              </div>
            ))}
          </>
          <Button
            customClasses="fixed bottom-4 flex justify-center items-center py-3 gap-2 text-xl w-1/2 inset-x-0 mx-auto"
            onClick={handleClose}
          >
            <XIcon className="w-6 h-6" />
            <span>Close</span>
          </Button>
        </Container>
      </Dialog>
      <Button
        customClasses="fixed bottom-4 flex justify-center items-center py-3 gap-2 text-xl w-1/2 inset-x-0 mx-auto"
        onClick={handleOpen}
      >
        <AdjustmentsIcon className="w-6 h-6" />
        <span>Filter</span>
      </Button>
    </>
  );
};

export default Filter;
