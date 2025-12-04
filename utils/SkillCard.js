import Image from "next/image";

export default function SkillCard({ imgUrl, name }) {
  return (
    // <div className="sm:relative bg-gray-900 text-[#B0B2B4] shadow-2xl border sm:flex-col flex justify-center items-center border-gray-700 hover:border-red-500 cursor-pointer rounded-md hover:text-[#ec0000]">
    //   <div className="sm:flex hidden justify-center items-center m-4 opacity-30 hover:opacity-50 relative group">

    <div className="group relative bg-gray-900 text-[#d3d6d8] shadow-xl border sm:flex-col flex justify-center items-center border-gray-700 hover:border-red-500 cursor-pointer rounded-xl hover:text-[#ffffff]">
      <div className="sm:flex hidden justify-center items-center m-4 opacity-50 w-14 group-hover:opacity-70">
        <Image
          src={imgUrl}
          width={50}
          height={50}
          loading="lazy"
          // layout="fixed"
          alt="..."
          className="group-hover:opacity-100 w-auto"
        />
      </div>
      <div className="sm:p-2 p-3 sm:absolute sm:bottom-3 grid">
        <p className="font-bold text-center">{name}</p>
      </div>
    </div>
  );
}
