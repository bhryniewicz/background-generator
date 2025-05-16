import { Button } from "@/components/ui/button";

export const HomeInfo = () => {
  return (
    <>
      <div className="col-span-full lg:col-start-3 lg:col-end-11 container mx-auto text-white h-[92svh] content-end md:content-center flex-grow-1 pb-8">
        <div className="flex items-center justify-center flex-col gap-12 md:gap-10 self-center">
          <h1 className="text-[40px] md:text-[70px]/20 font-bold text-center ">
            Make awesome<span className="text-[#9900FF]"> BACKGROUND</span> on
            your own!
          </h1>
          <p className="text-base md:text-lg text-center font-semibold text-white/80 xl:px-32">
            Create unique and eye-catching backgrounds that match your style,
            mood, or creative vision — all with just a few clicks.
          </p>
          <Button variant={"secondary"} size={"lg"}>
            Get&apos;s started
          </Button>
        </div>
      </div>
    </>
  );
};
