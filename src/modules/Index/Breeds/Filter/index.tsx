import { Dialog, Disclosure } from "@headlessui/react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import Button from "common/components/Button";
import Container from "common/components/Container";
import React, { useState } from "react";

import Category from "./Filters/Category";
import Size from "./Filters/Size";

const filters = [
  {
    title: "Category",
    component: <Category />,
  },
  {
    title: "Size",
    component: <Size />,
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
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <Container customClasses="bg-white shadow-2xl pt-6 pb-8 rounded-b-2xl max-w-full">
          <Dialog.Title className="mb-8 text-2xl font-bold text-green-800">
            Filter breeds
          </Dialog.Title>
          <>
            {filters.map((filter, id) => (
              <div key={filter.title}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-xl sm:focus-visible:text-green-800">
                        <span className="text-xl font-semibold">
                          {filter.title}
                        </span>
                        {open ? (
                          <ChevronUpIcon className="h-5 w-5" />
                        ) : (
                          <ChevronDownIcon className="h-5 w-5" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-4">
                        {filter.component}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {id !== filters.length - 1 && (
                  <hr className="my-4 rounded-full" />
                )}
              </div>
            ))}
          </>
          <Button
            customClasses="fixed bottom-4 py-4 text-lg w-1/2 inset-x-0 mx-auto"
            aria-label="Close filter breeds"
            onClick={handleClose}
            data-cy="breeds-filter-dialog-close"
          >
            Close
          </Button>
        </Container>
      </Dialog>
      {/* Hidden for now */}
      <Button
        customClasses="fixed hidden bottom-4 flex justify-center items-center py-4 gap-2 text-lg w-1/2 inset-x-0 mx-auto z-[10]"
        onClick={handleOpen}
        aria-label="Filter breeds"
        data-cy="breeds-filter-dialog-open"
      >
        <AdjustmentsIcon className="h-6 w-6" />
        <span>Filters</span>
      </Button>
    </>
  );
};

export default Filter;
