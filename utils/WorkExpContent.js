"use client";
import { useState,useEffect,useRef } from "react";
export default function WorkExpContent({ content }) {
    const [isExpanded,setIsExpanded] = useState(false);
    const [isClamped,setIsClamped] = useState(false);
    const textRef = useRef(null);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    useEffect(() => {
        if (textRef.current) {
            const isOverflowing =
                textRef.current.scrollHeight > textRef.current.clientHeight;
            setIsClamped(isOverflowing);
        }
    },[content]);

    return (
        <>
            <p ref={textRef} className={`text-sm text-gray-400 leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>{content}</p>
            {isClamped && (
                <button
                    onClick={toggleExpand}
                    className="text-blue-500 hover:underline text-sm"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            )}
        </>
    );
}