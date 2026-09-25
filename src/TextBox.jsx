

export default function AccordionHeader({heading}) {
  return (
    <div className="w-full max-w-2xl bg-[#4D8BFF] bold text-black font-monospace text-lg px-6 py-4 rounded-[15px] border-[2px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex justify-center items-center cursor-pointer select-none my-[10px]">
      <span >{heading}</span>
    </div>
  );
}