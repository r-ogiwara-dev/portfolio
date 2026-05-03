"use client";
import { useEffect, useState } from "react";

export default function ScrollCoffeeMug() {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setFill(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const innerY = 15;
  const innerH = 18;
  const fillH = innerH * fill;
  const fillY = innerY + innerH - fillH;
  const steamOpacity = fill > 0.7 ? (fill - 0.7) / 0.3 : 0;

  return (
    <svg
      width="30"
      height="34"
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="sc-mug-clip">
          <rect x="6" y={innerY} width="22" height={innerH} rx="2" />
        </clipPath>
      </defs>

      {/* 湯気（70%以上で出現） */}
      <g style={{ opacity: steamOpacity, transition: "opacity 0.5s" }}>
        <path d="M14 12 Q12 8 14 4" stroke="#94b8c8" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="stroke-opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M20 11 Q18 7 20 3" stroke="#94b8c8" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="stroke-opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M26 12 Q24 8 26 4" stroke="#94b8c8" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="1.8s" repeatCount="indefinite" />
        </path>
      </g>

      {/* カップ本体（背景） */}
      <rect x="4" y="13" width="26" height="24" rx="4" fill="#fff7ed" />

      {/* コーヒー液体（下から満ちていく） */}
      <rect
        x="6"
        y={fillY}
        width="22"
        height={Math.max(0.01, fillH)}
        fill="#c8764a"
        clipPath="url(#sc-mug-clip)"
      />

      {/* カップ枠線（液体の上に重ねる） */}
      <rect x="4" y="13" width="26" height="24" rx="4" stroke="#f97316" strokeWidth="2" />

      {/* ハンドル */}
      <path d="M30 18 Q38 18 38 25 Q38 32 30 32" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />

      {/* ソーサー */}
      <path d="M2 38 Q20 42 38 38" stroke="#fbd5b0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
