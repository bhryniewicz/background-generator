import { Button } from "@/components/ui/button";

export const HomeInfo = () => {
  return (
    <>
      <div className="col-start-2 col-end-12 container mx-auto text-white h-[90vh] content-center flex-grow-1">
        <div className="flex items-center justify-center flex-col gap-10 self-center">
          <h1 className="text-[70px]/20 font-bold text-center ">
            Make{" "}
            <span className="text-[#9900FF] uppercase">Awesome Background</span>{" "}
            on your own!
          </h1>
          <p className="text-md text-center font-semibold">
            Create unique, eye-catching backgrounds that match your style, mood,
            or creative vision — all with just a few clicks.
          </p>
          <Button className="flex items-center px-32 py-6 bg-transparent border border-gray-500">
            Get&apos;s started
          </Button>
        </div>
      </div>
    </>
  );
};
