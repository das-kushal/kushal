"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

function getPoint(index, count) {
  const y = 1 - (index / (count - 1)) * 2;
  const ringRadius = Math.sqrt(1 - y * y);
  const angle = GOLDEN_ANGLE * index;

  return {
    x: Math.cos(angle) * ringRadius,
    y,
    z: Math.sin(angle) * ringRadius,
  };
}

function rotatePoint(point, rotationX, rotationY) {
  const radiansY = (rotationY * Math.PI) / 180;
  const radiansX = (rotationX * Math.PI) / 180;
  const x = point.x * Math.cos(radiansY) + point.z * Math.sin(radiansY);
  const z = -point.x * Math.sin(radiansY) + point.z * Math.cos(radiansY);

  return {
    x,
    y: point.y * Math.cos(radiansX) - z * Math.sin(radiansX),
    z: point.y * Math.sin(radiansX) + z * Math.cos(radiansX),
  };
}

export default function SkillsGlobe({ skills, categories }) {
  const globeRef = useRef(null);
  const canvasRef = useRef(null);
  const dragRef = useRef(null);
  const wasDraggedRef = useRef(false);
  const rotationRef = useRef({ x: -12, y: 0 });
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const globe = globeRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!globe || !canvas || !context) return undefined;

    let frameId;
    let previousTime = 0;
    let size = 0;
    let pixelRatio = 1;

    const resizeCanvas = () => {
      size = globe.clientWidth;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(size * pixelRatio);
      canvas.height = Math.round(size * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(globe);
    resizeCanvas();

    const drawMeshLine = (points, radius, lightMode) => {
      const frontColor = lightMode
        ? "rgba(120, 99, 70, 0.26)"
        : "rgba(220, 214, 204, 0.24)";
      const backColor = lightMode
        ? "rgba(120, 99, 70, 0.1)"
        : "rgba(220, 214, 204, 0.07)";

      for (const isFront of [false, true]) {
        context.beginPath();
        let segmentStarted = false;

        points.forEach((point, index) => {
          const visible = point.z >= 0;
          if (visible !== isFront) {
            segmentStarted = false;
            return;
          }

          const perspective = 0.9 + point.z * 0.1;
          const x = size / 2 + point.x * radius * perspective;
          const y = size / 2 + point.y * radius * perspective;
          if (!segmentStarted) {
            context.moveTo(x, y);
            segmentStarted = true;
          } else {
            context.lineTo(x, y);
          }

          if (points[index + 1] && (points[index + 1].z >= 0) !== isFront) {
            context.strokeStyle = isFront ? frontColor : backColor;
            context.lineWidth = isFront ? 0.7 : 0.45;
            context.setLineDash(isFront ? [] : [2, 5]);
            context.stroke();
            context.beginPath();
            segmentStarted = false;
          }
        });

        context.strokeStyle = isFront ? frontColor : backColor;
        context.lineWidth = isFront ? 0.7 : 0.45;
        context.setLineDash(isFront ? [] : [2, 5]);
        context.stroke();
      }
      context.setLineDash([]);
    };

    const createCurve = (rotationX, rotationY, makePoint, samples = 72) =>
      Array.from({ length: samples + 1 }, (_, index) => {
        const angle = (index / samples) * Math.PI * 2;
        return rotatePoint(makePoint(angle), rotationX, rotationY);
      });

    const drawGlobe = (rotationX, rotationY, lightMode) => {
      const radius = size * 0.38;
      const center = size / 2;
      context.clearRect(0, 0, size, size);

      const surface = context.createRadialGradient(
        center - radius * 0.35,
        center - radius * 0.4,
        radius * 0.04,
        center,
        center,
        radius
      );
      surface.addColorStop(
        0,
        lightMode ? "rgba(231, 224, 213, 0.4)" : "rgba(72, 68, 62, 0.22)"
      );
      surface.addColorStop(
        0.72,
        lightMode ? "rgba(248, 247, 245, 0.36)" : "rgba(31, 31, 30, 0.18)"
      );
      surface.addColorStop(
        1,
        lightMode ? "rgba(120, 99, 70, 0.09)" : "rgba(194, 162, 122, 0.06)"
      );
      context.beginPath();
      context.arc(center, center, radius, 0, Math.PI * 2);
      context.fillStyle = surface;
      context.fill();

      context.beginPath();
      context.arc(center, center, radius, 0, Math.PI * 2);
      context.strokeStyle = lightMode
        ? "rgba(120, 99, 70, 0.24)"
        : "rgba(220, 214, 204, 0.2)";
      context.lineWidth = 1;
      context.stroke();

      for (let latitude = -75; latitude <= 75; latitude += 15) {
        const latitudeRadians = (latitude * Math.PI) / 180;
        drawMeshLine(
          createCurve(rotationX, rotationY, (longitude) => ({
            x: Math.cos(latitudeRadians) * Math.sin(longitude),
            y: Math.sin(latitudeRadians),
            z: Math.cos(latitudeRadians) * Math.cos(longitude),
          })),
          radius,
          lightMode
        );
      }

      for (let longitude = 0; longitude < 180; longitude += 15) {
        const longitudeRadians = (longitude * Math.PI) / 180;
        drawMeshLine(
          createCurve(rotationX, rotationY, (latitude) => ({
            x: Math.cos(latitude) * Math.sin(longitudeRadians),
            y: Math.sin(latitude),
            z: Math.cos(latitude) * Math.cos(longitudeRadians),
          })),
          radius,
          lightMode
        );
      }

      for (let latitude = -60; latitude <= 60; latitude += 30) {
        const latitudeRadians = (latitude * Math.PI) / 180;
        for (let longitude = 0; longitude < 360; longitude += 30) {
          const longitudeRadians = (longitude * Math.PI) / 180;
          const point = rotatePoint(
            {
              x: Math.cos(latitudeRadians) * Math.sin(longitudeRadians),
              y: Math.sin(latitudeRadians),
              z: Math.cos(latitudeRadians) * Math.cos(longitudeRadians),
            },
            rotationX,
            rotationY
          );
          if (point.z <= 0) continue;

          const perspective = 0.9 + point.z * 0.1;
          context.beginPath();
          context.arc(
            center + point.x * radius * perspective,
            center + point.y * radius * perspective,
            1.1,
            0,
            Math.PI * 2
          );
          context.fillStyle = lightMode
            ? "rgba(120, 99, 70, 0.3)"
            : "rgba(220, 214, 204, 0.3)";
          context.fill();
        }
      }
    };

    const update = (time) => {
      if (previousTime) {
        const elapsed = Math.min(time - previousTime, 50);
        if (
          !dragRef.current &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          rotationRef.current.y += elapsed * 0.005;
        }
      }
      previousTime = time;

      const { x: rotationX, y: rotationY } = rotationRef.current;
      const lightMode = document.documentElement.classList.contains("light");
      drawGlobe(rotationX, rotationY, lightMode);

      const radius = size * 0.38;
      globe.querySelectorAll(".skill-globe-point").forEach((element) => {
        const pointIndex = Number(element.dataset.index);
        const skillPoint = getPoint(pointIndex, skills.length);
        const point = rotatePoint(
          skillPoint,
          rotationX,
          rotationY
        );
        const perspective = 0.9 + point.z * 0.1;
        element.style.left = `${size / 2 + point.x * radius * perspective}px`;
        element.style.top = `${size / 2 + point.y * radius * perspective}px`;
        element.style.opacity =
          element.classList.contains("is-selected") || point.z >= 0 ? "1" : "0.4";
        element.style.visibility = "visible";
        element.style.zIndex = `${Math.round((point.z + 1) * 100) + 2}`;
        element.style.pointerEvents = "auto";
      });

      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);

    const handlePointerMove = (event) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== event.pointerId) return;

      const deltaX = event.clientX - drag.lastX;
      const deltaY = event.clientY - drag.lastY;
      if (
        Math.abs(event.clientX - drag.startX) +
          Math.abs(event.clientY - drag.startY) >
        4
      ) {
        drag.moved = true;
      }
      rotationRef.current.y += deltaX * 0.45;
      rotationRef.current.x = Math.max(
        -75,
        Math.min(75, rotationRef.current.x - deltaY * 0.35)
      );
      drag.lastX = event.clientX;
      drag.lastY = event.clientY;
    };

    const handlePointerUp = (event) => {
      if (dragRef.current?.pointerId === event.pointerId) {
        wasDraggedRef.current = dragRef.current.moved;
        dragRef.current = null;
        globe.classList.remove("is-dragging");
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [skills]);

  const handlePointerDown = (event) => {
    if (event.button !== 0) return;
    wasDraggedRef.current = false;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      moved: false,
    };
    globeRef.current?.classList.add("is-dragging");
  };

  const handleSkillClick = (skill) => {
    if (wasDraggedRef.current) {
      wasDraggedRef.current = false;
      return;
    }
    setSelectedSkill(skill);
  };

  return (
    <div className="skills-globe-wrap">
      <div
        ref={globeRef}
        className="skills-globe"
        onPointerDown={handlePointerDown}
        role="group"
        aria-label="Interactive skills globe. Drag to rotate and select a skill."
      >
        <canvas ref={canvasRef} className="skills-globe-canvas" aria-hidden="true" />

        {skills.map((skill, index) => {
          const point = getPoint(index, skills.length);
          const isSelected = selectedSkill?.id === skill.id;

          return (
            <button
              key={skill.id}
              type="button"
              className={`skill-globe-point${isSelected ? " is-selected" : ""}`}
              data-index={index}
              style={{
                left: `${50 + Math.round(point.x * 34)}%`,
                top: `${50 + Math.round(point.y * 34)}%`,
              }}
              aria-label={`Select ${skill.name}`}
              aria-pressed={isSelected}
              title={skill.name}
              onClick={() => handleSkillClick(skill)}
              onDragStart={(event) => event.preventDefault()}
            >
              <span className="skill-globe-label">
                <Image
                  src={skill.imageUrl}
                  alt=""
                  width={40}
                  height={40}
                  sizes="40px"
                  draggable={false}
                />
                <span className="skill-globe-name">{skill.name}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="skills-globe-caption" aria-live="polite">
        {selectedSkill ? (
          <>
            <span className="skills-globe-selected">{selectedSkill.name}</span>
            <span>{categories[selectedSkill.type]}</span>
          </>
        ) : (
          <span>Drag to rotate · Select a skill to see its category</span>
        )}
      </div>
    </div>
  );
}
