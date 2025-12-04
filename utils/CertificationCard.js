"use client";

import Image from "next/image";
import { FaExternalLinkAlt,FaCertificate } from "react-icons/fa";
import { HiCalendar,HiOfficeBuilding } from "react-icons/hi";
import { SiUdemy,SiCoursera } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle,FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function CertificationCard({
    name,
    issuer,
    date,
    credentialId,
    imageUrl,
    verifyUrl,
    description,
}) {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const issuerName = issuer.toLowerCase()
    const issuerImage = issuerName == 'udemy' ? <SiUdemy className="text-gray-400 text-sm" /> : issuerName == 'meta' ? <FaMeta className="text-gray-400 text-sm" /> : issuerName == 'google' ? <FaGoogle className="text-gray-400 text-sm" /> : issuerName == 'linkedin' ? <FaLinkedin className="text-gray-400 text-sm" /> : <SiCoursera className="text-gray-400 text-sm" />
    return (
        <>
            <div className="group bg-gray-900 rounded-xl text-wrap overflow-hidden  border border-gray-700 hover:border-red-500 shadow-2xl cursor-pointer">
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden" onClick={openModal}>
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" /> */}
                </div>

                {/* Content Section */}
                <div className="p-4">
                    <h3 className="text-lg font-bold text-yellow-300 mb-2 line-clamp-2 break-words">{name}</h3>

                    <div className="flex items-center gap-2 mb-2">
                        {issuerImage}
                        <p className="text-sm text-gray-400">{issuer}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                        <HiCalendar className="text-gray-400 text-sm" />
                        <p className="text-sm text-gray-400">{date}</p>
                    </div>

                    {/* {description && (
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                        {description}
                    </p>
                )} */}

                    {credentialId && (
                        <div className="mb-4 text-wrap">
                            <p className="text-xs text-gray-500">Credential ID:</p>
                            <p className="text-xs text-gray-400 font-mono break-words">{credentialId}</p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gray-400">
                            <FaCertificate className="text-yellow-500" />
                            <span className="text-xs">Verified</span>
                        </div>

                        {verifyUrl && (
                            <a
                                href={verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-lg text-xs transition-colors"
                            >
                                <span>Verify</span>
                                <FaExternalLinkAlt className="text-xs" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {typeof window !== "undefined" && isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-gray-800 rounded-lg p-1 max-w-4xl max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={imageUrl}
                            alt={name}
                            width={900}
                            height={600}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}