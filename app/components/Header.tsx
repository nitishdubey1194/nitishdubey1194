import { MdLocationOn, MdWork } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        Hey, I'm <span className="text-blue-500">Nitish Dubey</span>
      </h1>

      <p className="mt-6 text-xl md:text-2xl text-gray-400 tracking-wide">
        AI / ML Developer • Full Stack Engineer
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm hover:bg-blue-500/20 transition">
          <MdLocationOn size={18} />
          Jammu, India
        </div>
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm hover:bg-blue-500/20 transition">
          <MdWork size={18} />
          9 years Experience
        </div>
      </div>
    </div>
  );
}
