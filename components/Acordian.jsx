import React from "react";

function Acordian({ item, index }) {
  return (
    <div className="group/accordion relative flex items-center justify-between gap-4 overflow-hidden border-b border-neutral-200 py-4 pr-4 first:mt-0 focus-within:relative focus-within:z-10 data-[state=closed]:cursor-pointer sm:py-5 sm:pr-6 md:py-6 lg:py-8 AccordionItem">
      <div>
        <h3 data-orientation="vertical" data-state="closed" className="flex">
          <button
            type="button"
            aria-controls="radix-:r1:"
            aria-expanded="false"
            data-state="closed"
            data-orientation="vertical"
            id="radix-:r0:"
            className="data-[state=open]:item-active group/accordion-item group flex flex-1 items-start gap-4 rounded-xl px-4 text-left leading-5 leading-none text-neutral-800 outline-none data-[state=closed]:cursor-pointer"
            data-radix-collection-item=""
          >
            <span className="text-lg font-medium text-neutral-800 md:text-xl">
              [{index}]
            </span>
            <div className="text-lg font-bold text-neutral-800 md:text-xl">
              {item}
            </div>
          </button>
        </h3>
        <div className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden text-sm text-neutral-800 transition-all sm:text-base"></div>
      </div>
    </div>
  );
}

export default Acordian;
