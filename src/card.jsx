

function Card({ text, desc, background, width, height }) {
  return (
    <div 
      className="shadow-[4px_4px_0px_0px_rgb(0,0,0)] border-2 border-solid border-black rounded-[0.75rem] p-4 flex flex-col gap-2 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgb(0,0,0)] motion-reduce:transition-none motion-reduce:hover:translate-y-0" 
      style={{ backgroundColor: background, width: width, height: height }}
    >
      <h3 className="font-bold text-lg text-black">{text}</h3>
      {desc && <p className="text-sm text-black leading-snug">{desc}</p>}
    </div>
  );
}

export default Card;