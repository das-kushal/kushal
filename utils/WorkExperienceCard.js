// export default function WorkExperienceCard({
//   title,
//   place,
//   location,
//   content,
//   mydate,
//   icon,
// }) {
//   const iconColor = icon === "work" ? "text-[#50D6A0]" : "text-[#F9C74F]";
//   return (
//     <>
//       <div
//         // className="bg-gray-900 border-2 border-gray-700 rounded-lg p-4  h-[100%]   hover:border-red-500 cursor-pointer shadow-2xl"

//         className="group relative bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-red-500 cursor-pointer shadow-xl h-[100%] mb-2 flex flex-col justify-between "
//       >
//         <div>
//           <h3 className={`${iconColor} text-lg font-bold mb-2 `}>{title}</h3>
//           <p className="text-gray-500 mb-2">
//             <strong>{place}</strong> - {location}
//           </p>
//           <p className="text-[#B0B2B4] mb-5  sm:text-lg group-hover:text-white">
//             {content}
//           </p>
//           <div className="absolute right-2 bottom-2">
//             <p className="text-sm text-gray-500 ">{mydate}</p>
//             {/* Add any additional elements here, such as buttons, links, etc. */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default function WorkExperienceCard({
//   title,
//   place,
//   location,
//   content,
//   mydate,
//   icon,
// }) {
//   const iconColor = icon === "work" ? "text-[#50D6A0]" : "text-[#F9C74F]";
//   // const iconStyle = icon === "work" ? "💼" : "";
//   return (
//     <ol className="relative border-l border-gray-200 dark:border-gray-700">
//       <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-red-500 cursor-pointer shadow-xl h-[100%] mb-2 flex flex-col justify-between  ml-6">
//         <span className="absolute flex items-center justify-center w-4 h-4  rounded-full -left-2   ring-white dark:ring-gray-900 bg-[#ec0000d0]"></span>
//         <h3
//           className={`flex items-center mb-1 text-lg font-semibold ${iconColor}`}
//         >
//           {title}
//         </h3>
//         <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//           {mydate}
//         </time>
//         <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
//           <strong>{place}</strong> - {location}
//         </p>
//         <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
//           {content}
//         </p>
//       </div>
//     </ol>
//   );
// }

// import Image from "next/image";

// export default function WorkExperienceCard({
//   title,
//   place,
//   location,
//   content,
//   mydate,
//   icon,
//   logoUrl,
// }) {
//   const iconColor = icon === "work" ? "text-[#50D6A0]" : "text-[#F9C74F]";

//   return (
//     <ol className="relative border-l border-gray-200 dark:border-gray-700">
//       <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-red-500 cursor-pointer shadow-xl h-[100%] mb-2 flex flex-col justify-between ml-6">
//         <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -left-2 ring-white dark:ring-gray-900 bg-[#ec0000d0]"></span>

//         <div className="flex items-start gap-4">
//           {/* Organization Logo */}
//           <div className="flex-shrink-0 w-16 h-16 bg-gray-900 border-1.5  border-white p-1 flex items-center justify-center">
//             <Image
//               src={logoUrl}
//               alt={`${place} logo`}
//               width={60}
//               height={60}
//               className="w-12 h-12 rounded-md object-cover"
//             />
//           </div>

//           {/* Content */}
//           <div className="flex-1">
//             <h3
//               className={`flex items-center mb-1 text-lg font-semibold ${iconColor}`}
//             >
//               {title}
//             </h3>
//             <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//               {mydate}
//             </time>
//             <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
//               <strong>{place}</strong> - {location}
//             </p>
//             <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
//               {content}
//             </p>
//           </div>
//         </div>
//       </div>
//     </ol>
//   );
// }

// import Image from "next/image";

// export default function WorkExperienceCard({
//   title,
//   place,
//   location,
//   content,
//   mydate,
//   icon,
//   logoUrl,
// }) {
//   const iconColor = icon === "work" ? "text-[#50D6A0]" : "text-[#F9C74F]";
//   const timelineColor =
//     icon === "work" ? "border-[#50D6A0]" : "border-[#F9C74F]";
//   const dotColor = icon === "work" ? "bg-[#50D6A0]" : "bg-[#F9C74F]";

//   return (
//     <div className="relative flex items-start mb-8">
//       {/* Timeline Line and Dot */}
//       <div className="flex flex-col items-center mr-6">
//         <div
//           className={`w-4 h-4 rounded-full ${dotColor} border-2 border-gray-900 z-10`}
//         ></div>
//         <div
//           className={`w-0.5 h-full ${timelineColor.replace(
//             "border-",
//             "bg-"
//           )} mt-2`}
//         ></div>
//       </div>

//       {/* Content Card */}
//       <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-red-500 cursor-pointer shadow-xl flex-1 transition-all duration-300">
//         <div className="flex items-start gap-4">
//           {/* Organization Logo */}
//           <div className="flex-shrink-0 w-16 h-16 bg-transparent rounded-lg p-2 flex items-center justify-center">
//             <Image
//               src={logoUrl}
//               alt={`${place} logo`}
//               width={48}
//               height={48}
//               className="w-12 h-12 object-contain"
//             />
//           </div>

//           {/* Content */}
//           <div className="flex-1">
//             <h3 className={`text-lg font-semibold mb-1 ${iconColor}`}>
//               {title}
//             </h3>
//             <time className="block mb-2 text-sm text-gray-400">{mydate}</time>
//             <p className="text-base text-gray-400 mb-2">
//               <strong className="text-white">{place}</strong> - {location}
//             </p>
//             <p className="text-sm text-gray-400 leading-relaxed">{content}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import WorkExpContent from "./WorkExpContent";

export default function WorkExperienceCard({
  title,
  place,
  location,
  content,
  mydate,
  icon,
  logoUrl,
}) {
  const iconColor = icon === "work" ? "text-[#50D6A0]" : "text-[#F9C74F]";
  const dotColor = icon === "work" ? "bg-[#50D6A0]" : "bg-[#F9C74F]";


  return (
    <li className="mb-10 ms-6">
      <span
        className={`absolute flex items-center justify-center w-6 h-6 ${dotColor} rounded-full -start-3 ring-8 ring-white dark:ring-gray-900`}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </span>

      <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:border-red-500 cursor-pointer shadow-xl transition-all duration-300">
        <div className="flex items-start gap-4">
          {/* Organization Logo */}
          <div className="flex-shrink-0 w-16 h-16 bg-transparent rounded-lg p-2 flex items-center justify-center">
            <Image
              src={logoUrl}
              alt={`${place} logo`}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className={`text-lg font-semibold mb-1 ${iconColor}`}>
              {title}
            </h3>
            <time className="block mb-2 text-sm text-gray-400">{mydate}</time>
            <p className="text-base text-gray-400 mb-2">
              <strong className="text-white">{place}</strong> - {location}
            </p>
            <WorkExpContent content={content} />
          </div>
        </div>
      </div>
    </li>
  );
}
