export default function NatureIllustration() {
  return (
    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg" aria-hidden="true">

      {/* 空の背景 */}
      <rect width="500" height="300" rx="24" fill="#e8f4f0" />

      {/* 太陽 */}
      <circle cx="400" cy="70" r="36" fill="#fde68a" opacity="0.9" />
      <circle cx="400" cy="70" r="28" fill="#fbbf24" opacity="0.8" />
      {/* 太陽の光 */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <line
          key={i}
          x1={400 + Math.cos(deg * Math.PI / 180) * 40}
          y1={70 + Math.sin(deg * Math.PI / 180) * 40}
          x2={400 + Math.cos(deg * Math.PI / 180) * 52}
          y2={70 + Math.sin(deg * Math.PI / 180) * 52}
          stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" opacity="0.7"
        />
      ))}

      {/* 雲 */}
      <ellipse cx="100" cy="60" rx="40" ry="20" fill="white" opacity="0.85" />
      <ellipse cx="125" cy="50" rx="30" ry="18" fill="white" opacity="0.85" />
      <ellipse cx="75" cy="55" rx="25" ry="15" fill="white" opacity="0.85" />

      <ellipse cx="310" cy="45" rx="32" ry="16" fill="white" opacity="0.7" />
      <ellipse cx="330" cy="36" rx="22" ry="14" fill="white" opacity="0.7" />

      {/* 地面 */}
      <ellipse cx="250" cy="285" rx="240" ry="30" fill="#a8d8b0" />
      <rect x="10" y="260" width="480" height="40" fill="#a8d8b0" />

      {/* 草 */}
      {[30,55,70,100,140,170,200,330,360,390,420,455,480].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="262" x2={x - 6} y2="245" stroke="#6db876" strokeWidth="2.5" strokeLinecap="round" />
          <line x1={x} y1="262" x2={x} y2="243" stroke="#86c98e" strokeWidth="2" strokeLinecap="round" />
          <line x1={x} y1="262" x2={x + 6} y2="246" stroke="#6db876" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      ))}

      {/* 奥の木（左） */}
      <rect x="62" y="170" width="14" height="90" rx="4" fill="#8b6914" />
      <ellipse cx="69" cy="165" rx="34" ry="42" fill="#5a9e6f" />
      <ellipse cx="69" cy="155" rx="26" ry="32" fill="#6db876" />

      {/* 奥の木（右） */}
      <rect x="415" y="175" width="14" height="85" rx="4" fill="#8b6914" />
      <ellipse cx="422" cy="168" rx="30" ry="38" fill="#5a9e6f" />
      <ellipse cx="422" cy="158" rx="22" ry="28" fill="#6db876" />

      {/* 手前の大きな木（左） */}
      <rect x="128" y="150" width="18" height="115" rx="5" fill="#7a5c12" />
      <ellipse cx="137" cy="140" rx="45" ry="55" fill="#4a8c5c" />
      <ellipse cx="137" cy="125" rx="36" ry="42" fill="#5aaa6e" />
      <ellipse cx="137" cy="112" rx="26" ry="30" fill="#6db876" />

      {/* 手前の大きな木（右） */}
      <rect x="350" y="148" width="18" height="118" rx="5" fill="#7a5c12" />
      <ellipse cx="359" cy="138" rx="48" ry="58" fill="#4a8c5c" />
      <ellipse cx="359" cy="122" rx="38" ry="44" fill="#5aaa6e" />
      <ellipse cx="359" cy="108" rx="28" ry="32" fill="#6db876" />

      {/* コーヒーテーブル */}
      <rect x="195" y="230" width="110" height="30" rx="8" fill="#c8a265" />
      <rect x="205" y="258" width="10" height="20" rx="3" fill="#a07840" />
      <rect x="285" y="258" width="10" height="20" rx="3" fill="#a07840" />

      {/* コーヒーカップ */}
      <rect x="225" y="198" width="50" height="38" rx="7" fill="#f97316" />
      <rect x="230" y="203" width="40" height="30" rx="5" fill="#fff7ed" />
      <rect x="230" y="215" width="40" height="18" rx="0 0 5 5" fill="#c8764a" />
      {/* ハート */}
      <path d="M245 209 Q245 206 248 206 Q252 206 252 209 Q252 206 256 206 Q259 206 259 209 Q259 213 252 217 Q245 213 245 209Z"
        fill="#c8764a" />
      {/* ハンドル */}
      <path d="M270 207 Q282 207 282 216 Q282 225 270 225" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
      {/* ソーサー */}
      <ellipse cx="250" cy="237" rx="30" ry="5" fill="#fbd5b0" />

      {/* 湯気 */}
      <path d="M240 196 Q237 188 240 181" fill="none" stroke="#94b8c8" strokeWidth="2" strokeLinecap="round" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M250 193 Q247 184 250 176" fill="none" stroke="#94b8c8" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M260 196 Q257 187 260 180" fill="none" stroke="#94b8c8" strokeWidth="2" strokeLinecap="round" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.8s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="1.8s" repeatCount="indefinite" />
      </path>

      {/* 小鳥（左） */}
      <path d="M155 100 Q162 95 170 100 Q162 104 155 100Z" fill="#f97316" opacity="0.8" />
      <circle cx="162" cy="100" r="5" fill="#1a2e4a" opacity="0.7" />

      {/* 小鳥（右） */}
      <path d="M320 88 Q327 83 335 88 Q327 92 320 88Z" fill="#f97316" opacity="0.8" />
      <circle cx="327" cy="88" r="5" fill="#1a2e4a" opacity="0.7" />

      {/* キラキラ */}
      <circle cx="180" cy="180" r="3" fill="#fbbf24" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="175" r="2.5" fill="#86c98e" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="450" cy="130" r="2" fill="#fbbf24" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
