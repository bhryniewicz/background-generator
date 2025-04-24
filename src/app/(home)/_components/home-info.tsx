import { Button } from "@/components/ui/button";

export const HomeInfo = () => {
  return (
    <>
      <div className="col-start-3 col-end-11 container mx-auto text-white h-[92vh] content-center flex-grow-1">
        <div className="flex items-center justify-center flex-col gap-10 self-center">
          <h1 className="text-[70px]/20 font-bold text-center ">
            Make awesome<span className="text-[#9900FF]"> BACKGROUND</span> on
            your own!
          </h1>
          <p className="text-lg text-center font-semibold text-white/60 px-16">
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
