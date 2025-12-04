"use client";
import { FaExternalLinkAlt,FaGithub,FaFileAlt } from "react-icons/fa";
import { MdSlideshow } from "react-icons/md";
import Image from "next/image";
import { useState,useEffect,useRef } from "react";

export default function ProjectCard({
  name,
  desc,
  skills,
  githubLink,
  imgUrl,
  type,
  reportUrl,
  presentationUrl,
  id,
  onImageClick // <-- NEW
}) {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [isExpanded,setIsExpanded] = useState(false);
  const [isClamped,setIsClamped] = useState(false);
  const textRef = useRef(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (textRef.current) {
      const isOverflowing = textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsClamped(isOverflowing);
    }
  },[desc]);

  return (
    <>

      <div className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 mb-4 sm:m-2 shadow-lg flex flex-col sm:flex-row w-full">

        {/* Project Image */}
        <div
          className="relative h-48 sm:h-auto sm:w-1/3 overflow-hidden cursor-pointer"
          onClick={onImageClick} // <-- click triggers detail view
        >
          <Image
            src={imgUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {type && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-900/90 backdrop-blur-sm text-yellow-300 border border-gray-600">
                Click to View
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 sm:w-2/3">
          <h3 className="text-lg font-bold text-yellow-300 mb-2 line-clamp-2">{name}</h3>
          <div className="text-sm text-gray-300 mb-4">
            <p ref={textRef} className={`${isExpanded ? "" : "line-clamp-3"} flex-1`}>
              {desc}
            </p>
            {isClamped && (
              <button
                onClick={toggleExpand}
                className="text-blue-500 hover:underline text-sm"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill,index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <FaGithub className="text-sm" />
              <span>Code</span>
            </a>

            <div className="flex items-center gap-2">
              {reportUrl && (
                <a
                  href={reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg text-xs transition-colors"
                >
                  <FaFileAlt className="text-xs" />
                  <span>Report</span>
                </a>
              )}
              {presentationUrl && (
                <a
                  href={presentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-lg text-xs transition-colors"
                >
                  <MdSlideshow className="text-xs" />
                  <span>Slides</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
