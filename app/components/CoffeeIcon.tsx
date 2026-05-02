export default function CoffeeIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* カップ本体 */}
      <rect x="10" y="20" width="26" height="20" rx="4" fill="#f97316" />
      <rect x="13" y="23" width="20" height="14" rx="3" fill="#fff7ed" />
      {/* コーヒー液体 */}
      <rect x="13" y="29" width="20" height="8" rx="0 0 3 3" fill="#c8764a" />
      {/* ハンドル */}
      <path d="M36 24 Q43 24 43 30 Q43 36 36 36" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
      {/* ソーサー */}
      <ellipse cx="23" cy="41" rx="18" ry="4" fill="#fbd5b0" />
      {/* 湯気 */}
      <path d="M18 18 Q16 13 18 8" fill="none" stroke="#94b8c8" strokeWidth="1.8" strokeLinecap="round" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M24 16 Q22 11 24 6" fill="none" stroke="#94b8c8" strokeWidth="1.8" strokeLinecap="round" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M30 18 Q28 13 30 8" fill="none" stroke="#94b8c8" strokeWidth="1.8" strokeLinecap="round" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.8s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="1.8s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
