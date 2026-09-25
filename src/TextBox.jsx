

export default function AccordionHeader({heading}) {
  return (
    <div className="w-full max-w-2xl bg-[#4D8BFF] bold text-black font-monospace text-lg px-6 py-4 rounded-[15px] border-[2px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex justify-center items-center cursor-pointer select-none my-[10px] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] motion-reduce:transition-none">
      <span >{heading}</span>
    </div>
  );
}