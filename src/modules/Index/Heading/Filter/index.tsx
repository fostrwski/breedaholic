import { Disclosure, Popover } from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  selectAreBreedsFiltered,
  selectFiltersCount,
} from "common/redux/breeds";
import React from "react";
import { useSelector } from "react-redux";

import Category from "./Filters/Category";
// @ts-ignore
import ClearAllButton from "./Filters/ClearAllButton";
import LifeSpan from "./Filters/LifeSpan";
import Name from "./Filters/Name";
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
  {
    title: "Life span",
    component: <LifeSpan />,
  },
];

const Filter: React.FC = () => {
  const areBreedsFiltered = useSelector(selectAreBreedsFiltered());
  const breedsFiltersCount = useSelector(selectFiltersCount());

  return (
    <Popover>
      <Popover.Button
        aria-label="Filter breeds"
        title="Toggle filtering options menu"
        data-cy="breeds-filter-popover-toggle"
        className="relative rounded-lg bg-white p-2"
      >
        {areBreedsFiltered && (
          <div className="absolute top-0 right-0 h-5 w-5 rounded-full bg-green-50 text-sm font-bold tracking-tighter text-green-700">
            {breedsFiltersCount}
          </div>
        )}
        <AdjustmentsHorizontalIcon className="h-6 w-6" />
      </Popover.Button>
      <Popover.Panel className="absolute inset-x-6 z-[100] mt-4 rounded-lg bg-gray-50 p-6 md:inset-x-auto md:right-6 md:w-96 lg:right-28">
        <>
          <Name />

          {filters.map((filter, id) => (
            <div key={filter.title}>
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-xl focus-visible:text-green-700">
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
        {areBreedsFiltered && (
          <ClearAllButton customClasses="mt-6 float-right" />
        )}
      </Popover.Panel>
    </Popover>
  );
};

export default Filter;
