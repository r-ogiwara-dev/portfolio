export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 380"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm"
      aria-hidden="true"
    >
      {/* 背景の丸 */}
      <circle cx="200" cy="190" r="160" fill="#e8f3fb" />

      {/* 大きな葉っぱ（左） */}
      <ellipse cx="80" cy="230" rx="38" ry="18" fill="#86c98e" transform="rotate(-40 80 230)" />
      <ellipse cx="78" cy="228" rx="20" ry="8" fill="#6db876" transform="rotate(-40 78 228)" />
      {/* 茎 */}
      <line x1="100" y1="215" x2="115" y2="255" stroke="#6db876" strokeWidth="3" strokeLinecap="round" />

      {/* 大きな葉っぱ（右） */}
      <ellipse cx="318" cy="220" rx="38" ry="18" fill="#86c98e" transform="rotate(40 318 220)" />
      <ellipse cx="320" cy="218" rx="20" ry="8" fill="#6db876" transform="rotate(40 320 218)" />
      <line x1="298" y1="207" x2="283" y2="248" stroke="#6db876" strokeWidth="3" strokeLinecap="round" />

      {/* 小さい植物（左下） */}
      <ellipse cx="115" cy="295" rx="22" ry="11" fill="#a8d8a8" transform="rotate(-30 115 295)" />
      <ellipse cx="130" cy="288" rx="22" ry="11" fill="#86c98e" transform="rotate(-10 130 288)" />
      <line x1="125" y1="300" x2="128" y2="320" stroke="#6db876" strokeWidth="2.5" strokeLinecap="round" />

      {/* 小さい植物（右下） */}
      <ellipse cx="278" cy="295" rx="22" ry="11" fill="#a8d8a8" transform="rotate(30 278 295)" />
      <ellipse cx="263" cy="288" rx="22" ry="11" fill="#86c98e" transform="rotate(10 263 288)" />
      <line x1="270" y1="300" x2="268" y2="320" stroke="#6db876" strokeWidth="2.5" strokeLinecap="round" />

      {/* ノートPC本体 */}
      <rect x="118" y="230" width="164" height="108" rx="10" fill="#2d4a6a" />
      <rect x="124" y="236" width="152" height="96" rx="7" fill="#1a2e4a" />

      {/* 画面の光沢 */}
      <rect x="124" y="236" width="152" height="96" rx="7" fill="url(#screenGrad)" />
      <defs>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f1e30" />
        </linearGradient>
      </defs>

      {/* コード表示 */}
      <text x="134" y="256" fontSize="9" fill="#f97316" fontFamily="monospace" opacity="0.9">const coffee =</text>
      <text x="134" y="269" fontSize="9" fill="#86c98e" fontFamily="monospace" opacity="0.9">  await brew();</text>
      <text x="134" y="282" fontSize="9" fill="#7da9d4" fontFamily="monospace" opacity="0.9">// ☕ 集中力UP</text>
      <text x="134" y="295" fontSize="9" fill="#a78bfa" fontFamily="monospace" opacity="0.9">return happy;</text>
      {/* カーソル */}
      <rect x="134" y="300" width="6" height="10" rx="1" fill="#f97316" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0;0.8" dur="1.2s" repeatCount="indefinite" />
      </rect>

      {/* PCのヒンジ部分 */}
      <rect x="110" y="336" width="180" height="10" rx="5" fill="#3d5a7a" />
      <rect x="140" y="340" width="120" height="6" rx="3" fill="#2d4a6a" />

      {/* コーヒーカップ */}
      <rect x="218" y="155" width="58" height="52" rx="8" fill="#f97316" />
      <rect x="222" y="159" width="50" height="44" rx="6" fill="#fff7ed" />
      {/* コーヒーの液体 */}
      <rect x="222" y="175" width="50" height="28" rx="0 0 6 6" fill="#c8764a" />
      {/* ハンドル */}
      <path d="M276 168 Q295 168 295 180 Q295 192 276 192" fill="none" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
      {/* ソーサー */}
      <ellipse cx="247" cy="210" rx="38" ry="8" fill="#f97316" opacity="0.3" />
      <ellipse cx="247" cy="208" rx="34" ry="6" fill="#fbd5b0" />

      {/* コーヒーのハート */}
      <path d="M238 165 Q238 161 242 161 Q247 161 247 165 Q247 161 252 161 Q256 161 256 165 Q256 170 247 175 Q238 170 238 165Z"
        fill="#c8764a" />

      {/* 湯気 */}
      <path d="M235 148 Q232 140 235 132 Q238 124 235 116" fill="none" stroke="#b0c8d8" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M247 145 Q244 136 247 127 Q250 118 247 109" fill="none" stroke="#b0c8d8" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.4s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2.4s" repeatCount="indefinite" />
      </path>
      <path d="M259 148 Q256 139 259 130 Q262 121 259 113" fill="none" stroke="#b0c8d8" strokeWidth="2.5" strokeLinecap="round" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.8s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="1.8s" repeatCount="indefinite" />
      </path>

      {/* 星・キラキラ */}
      <circle cx="155" cy="155" r="4" fill="#f97316" opacity="0.6">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="310" cy="165" r="3" fill="#86c98e" opacity="0.7">
        <animate attributeName="r" values="2;4;2" dur="1.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="185" r="2.5" fill="#7da9d4" opacity="0.6">
        <animate attributeName="r" values="2;3.5;2" dur="2.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="295" cy="265" r="3" fill="#f97316" opacity="0.5">
        <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* 小さい葉っぱのアクセント */}
      <ellipse cx="170" cy="170" rx="12" ry="6" fill="#a8d8a8" transform="rotate(20 170 170)" opacity="0.8" />
      <ellipse cx="310" cy="300" rx="10" ry="5" fill="#86c98e" transform="rotate(-20 310 300)" opacity="0.7" />
    </svg>
  );
}
