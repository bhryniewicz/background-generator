import { ReactNode } from "react";

export const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="@container/Gen col-span-12 grid grid-cols-1 lg:grid-cols-13 lg:grid-rows-1 grid-rows-[minmax(auto,350px)_1fr] px-4 py-6 md:p-10 border-2 border-[#2e2e2e] bg-[#272727] mt-6 mb-8 overflow-hidden rounded-2xl shadow-[1px_4px_20px_0px_rgba(255,_255,_255,_0.0.05)] gap-6">
      {children}
    </div>
  );
};
