import { ReactNode } from "react";

export const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="col-span-12 grid grid-cols-13 p-10 border-2 border-[#2e2e2e] bg-[#272727] mt-12 mb-6 overflow-hidden rounded-2xl shadow-[1px_4px_30px_0px_rgba(255,_255,_255,_0.1)]">
      {children}
    </div>
  );
};
