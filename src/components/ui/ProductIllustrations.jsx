const bgGradient = 'url(#cardBg)';
const accent = '#1E6FD9';
const accentLight = '#4B9AFF';
const dark = '#0B1A30';
const mid = '#122645';
const light = '#1A3358';
const white = '#FFFFFF';
const gray = '#8A9BB5';

function Defs() {
  return (
    <defs>
      <linearGradient id="cardBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={dark} />
        <stop offset="100%" stopColor={mid} />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={accent} />
        <stop offset="100%" stopColor={accentLight} />
      </linearGradient>
    </defs>
  );
}

// Fire Alarm Systems - alarm panel with detectors and horn
export function FASIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Main panel */}
      <rect x="60" y="20" width="80" height="60" rx="4" fill={light} stroke={accentLight} strokeWidth="1" />
      <rect x="66" y="26" width="68" height="30" rx="2" fill={dark} />
      {/* Screen text lines */}
      <rect x="72" y="32" width="30" height="3" rx="1" fill={accent} />
      <rect x="72" y="38" width="20" height="3" rx="1" fill={accentLight} opacity="0.5" />
      <rect x="72" y="44" width="25" height="3" rx="1" fill={accent} opacity="0.3" />
      {/* LED indicators */}
      <circle cx="120" cy="34" r="3" fill="#22C55E" />
      <circle cx="120" cy="42" r="3" fill={accent} />
      <circle cx="120" cy="50" r="3" fill="#EF4444" />
      {/* Buttons */}
      <rect x="70" y="62" width="12" height="8" rx="2" fill={accent} />
      <rect x="86" y="62" width="12" height="8" rx="2" fill={gray} opacity="0.3" />
      <rect x="102" y="62" width="12" height="8" rx="2" fill={gray} opacity="0.3" />
      {/* Smoke detector left */}
      <circle cx="28" cy="40" r="14" fill={light} />
      <circle cx="28" cy="40" r="8" fill={mid} />
      <circle cx="28" cy="40" r="3" fill={accent} opacity="0.6" />
      {/* Horn strobe right */}
      <rect x="158" y="28" width="20" height="28" rx="3" fill={light} />
      <rect x="162" y="32" width="12" height="12" rx="1" fill={accent} opacity="0.6" />
      <rect x="162" y="48" width="12" height="4" rx="1" fill="#EF4444" opacity="0.4" />
      {/* Wires */}
      <line x1="42" y1="40" x2="60" y2="40" stroke={gray} strokeWidth="1" strokeDasharray="3 2" />
      <line x1="140" y1="40" x2="158" y2="40" stroke={gray} strokeWidth="1" strokeDasharray="3 2" />
      {/* Floor text */}
      <text x="100" y="110" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">FIRE ALARM PANEL</text>
      {/* Pulse ring on detector */}
      <circle cx="28" cy="40" r="18" fill="none" stroke={accentLight} strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

// Access Control System - card reader with door
export function ACSIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Door */}
      <rect x="55" y="15" width="55" height="95" rx="3" fill={light} />
      <rect x="58" y="18" width="49" height="89" rx="2" fill={mid} />
      {/* Door handle */}
      <rect x="96" y="58" width="8" height="16" rx="4" fill={gray} />
      {/* Card reader on wall */}
      <rect x="120" y="40" width="30" height="45" rx="4" fill={light} stroke={accentLight} strokeWidth="1" />
      <rect x="125" y="46" width="20" height="14" rx="2" fill={dark} />
      {/* Screen glow */}
      <rect x="127" y="48" width="16" height="10" rx="1" fill={accent} opacity="0.3" />
      {/* LED */}
      <circle cx="135" cy="68" r="3" fill="#22C55E" />
      {/* Fingerprint icon */}
      <circle cx="135" cy="78" r="4" fill="none" stroke={accentLight} strokeWidth="0.8" />
      <path d="M133 76 C133 78, 135 80, 137 78" fill="none" stroke={accentLight} strokeWidth="0.6" />
      {/* Card in hand approaching */}
      <rect x="155" y="48" width="24" height="16" rx="2" fill={accent} opacity="0.7" transform="rotate(-15 167 56)" />
      <rect x="158" y="51" width="14" height="2" rx="1" fill={white} opacity="0.4" transform="rotate(-15 165 52)" />
      {/* Signal waves */}
      <path d="M152 60 C154 58, 154 54, 152 52" fill="none" stroke={accentLight} strokeWidth="0.8" opacity="0.4" />
      <path d="M156 62 C159 58, 159 52, 156 48" fill="none" stroke={accentLight} strokeWidth="0.6" opacity="0.3" />
      {/* Person silhouette */}
      <circle cx="30" cy="45" r="8" fill={gray} opacity="0.15" />
      <path d="M20 95 Q20 65, 30 60 Q40 65, 40 95" fill={gray} opacity="0.1" />
      <text x="100" y="125" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">ACCESS CONTROL</text>
    </svg>
  );
}

// Public Address System - speakers and console
export function PASIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Ceiling speaker left */}
      <circle cx="45" cy="35" r="18" fill={light} />
      <circle cx="45" cy="35" r="12" fill={mid} />
      <circle cx="45" cy="35" r="6" fill={light} />
      <circle cx="45" cy="35" r="2" fill={accent} />
      {/* Sound waves from speaker */}
      <path d="M63 30 C67 28, 67 42, 63 40" fill="none" stroke={accentLight} strokeWidth="0.8" opacity="0.4" />
      <path d="M68 26 C74 24, 74 46, 68 44" fill="none" stroke={accentLight} strokeWidth="0.6" opacity="0.3" />
      {/* Ceiling speaker right */}
      <circle cx="155" cy="35" r="18" fill={light} />
      <circle cx="155" cy="35" r="12" fill={mid} />
      <circle cx="155" cy="35" r="6" fill={light} />
      <circle cx="155" cy="35" r="2" fill={accent} />
      {/* PA Console */}
      <rect x="65" y="65" width="70" height="45" rx="4" fill={light} stroke={gray} strokeWidth="0.5" />
      <rect x="70" y="70" width="35" height="18" rx="2" fill={dark} />
      {/* Console screen content */}
      <rect x="73" y="73" width="20" height="3" rx="1" fill={accent} opacity="0.6" />
      <rect x="73" y="79" width="15" height="3" rx="1" fill={accentLight} opacity="0.3" />
      {/* Gooseneck mic */}
      <rect x="110" y="60" width="3" height="20" rx="1" fill={gray} />
      <circle cx="111.5" cy="58" r="4" fill={light} />
      <circle cx="111.5" cy="58" r="2" fill={gray} />
      {/* Sliders/knobs */}
      <rect x="72" y="94" width="3" height="10" rx="1" fill={accent} />
      <rect x="80" y="96" width="3" height="8" rx="1" fill={accent} opacity="0.7" />
      <rect x="88" y="92" width="3" height="12" rx="1" fill={accent} opacity="0.5" />
      <rect x="96" y="95" width="3" height="9" rx="1" fill={accent} opacity="0.6" />
      <text x="100" y="125" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">PA SYSTEM</text>
    </svg>
  );
}

// BMS - Building dashboard
export function BMSIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Monitor */}
      <rect x="30" y="15" width="140" height="85" rx="4" fill={light} stroke={gray} strokeWidth="0.5" />
      <rect x="35" y="20" width="130" height="72" rx="2" fill={dark} />
      {/* Dashboard grid */}
      <rect x="40" y="25" width="55" height="30" rx="2" fill={mid} />
      <rect x="100" y="25" width="60" height="30" rx="2" fill={mid} />
      <rect x="40" y="60" width="38" height="27" rx="2" fill={mid} />
      <rect x="83" y="60" width="38" height="27" rx="2" fill={mid} />
      <rect x="126" y="60" width="34" height="27" rx="2" fill={mid} />
      {/* HVAC widget */}
      <text x="48" y="35" fill={gray} fontSize="5" fontFamily="Inter, sans-serif">HVAC</text>
      <rect x="44" y="39" width="30" height="4" rx="2" fill={light} />
      <rect x="44" y="39" width="18" height="4" rx="2" fill={accent} />
      <text x="48" y="51" fill={accentLight} fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">22°C</text>
      {/* Energy widget */}
      <text x="108" y="35" fill={gray} fontSize="5" fontFamily="Inter, sans-serif">ENERGY</text>
      {/* Bar chart */}
      <rect x="108" y="48" width="6" height="4" fill={accent} opacity="0.4" />
      <rect x="118" y="44" width="6" height="8" fill={accent} opacity="0.6" />
      <rect x="128" y="40" width="6" height="12" fill={accent} opacity="0.8" />
      <rect x="138" y="42" width="6" height="10" fill={accent} />
      {/* Lighting */}
      <circle cx="58" cy="74" r="6" fill={accent} opacity="0.4" />
      <text x="48" y="84" fill={gray} fontSize="5" fontFamily="Inter, sans-serif">LIGHTS</text>
      {/* Security */}
      <circle cx="102" cy="72" r="4" fill="#22C55E" opacity="0.6" />
      <text x="92" y="84" fill={gray} fontSize="5" fontFamily="Inter, sans-serif">SECURE</text>
      {/* Fire status */}
      <circle cx="143" cy="72" r="4" fill="#22C55E" opacity="0.6" />
      <text x="133" y="84" fill={gray} fontSize="5" fontFamily="Inter, sans-serif">FIRE OK</text>
      {/* Monitor stand */}
      <rect x="90" y="100" width="20" height="5" rx="1" fill={gray} opacity="0.3" />
      <rect x="80" y="105" width="40" height="3" rx="1" fill={gray} opacity="0.2" />
      <text x="100" y="125" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">BMS DASHBOARD</text>
    </svg>
  );
}

// Water Leak Detection
export function WLDIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Sensor unit */}
      <rect x="75" y="25" width="50" height="35" rx="4" fill={light} stroke={accentLight} strokeWidth="1" />
      <rect x="80" y="30" width="40" height="16" rx="2" fill={dark} />
      <circle cx="90" cy="38" r="3" fill="#22C55E" />
      <rect x="97" y="36" width="16" height="4" rx="1" fill={accent} opacity="0.5" />
      {/* LED row */}
      <circle cx="85" cy="52" r="2" fill={accent} />
      <circle cx="93" cy="52" r="2" fill={accent} opacity="0.5" />
      <circle cx="101" cy="52" r="2" fill={gray} opacity="0.3" />
      {/* Sensing cable */}
      <path d="M80 60 L80 90 C80 95, 85 95, 85 90 L85 80 C85 75, 90 75, 90 80 L90 90 C90 95, 95 95, 95 90 L95 80 C95 75, 100 75, 100 80 L100 90 C100 95, 105 95, 105 90 L105 80 C105 75, 110 75, 110 80 L110 90 C110 95, 115 95, 115 90 L115 80 L120 80" fill="none" stroke={accent} strokeWidth="2" />
      {/* Water drop icons */}
      <path d="M40 70 C40 65, 45 60, 45 55 C45 60, 50 65, 50 70 C50 75, 40 75, 40 70 Z" fill={accentLight} opacity="0.3" />
      <path d="M150 60 C150 55, 155 50, 155 45 C155 50, 160 55, 160 60 C160 65, 150 65, 150 60 Z" fill={accentLight} opacity="0.2" />
      <path d="M160 80 C160 77, 163 74, 163 71 C163 74, 166 77, 166 80 C166 83, 160 83, 160 80 Z" fill={accentLight} opacity="0.15" />
      {/* Alert indicator */}
      <circle cx="155" cy="30" r="10" fill={accent} opacity="0.15" />
      <text x="155" y="33" textAnchor="middle" fill={accentLight} fontSize="10" fontFamily="Inter, sans-serif" fontWeight="700">!</text>
      <text x="100" y="118" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">LEAK DETECTION</text>
    </svg>
  );
}

// Nurse Call System
export function NCSIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Bedside display */}
      <rect x="70" y="20" width="60" height="40" rx="4" fill={light} stroke={accentLight} strokeWidth="1" />
      <rect x="75" y="25" width="50" height="25" rx="2" fill={dark} />
      <text x="82" y="35" fill={accent} fontSize="6" fontFamily="Inter, sans-serif">Room 204</text>
      <text x="82" y="44" fill="#22C55E" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">ACTIVE</text>
      {/* Status LEDs */}
      <circle cx="80" cy="54" r="2" fill="#22C55E" />
      <circle cx="88" cy="54" r="2" fill={accent} />
      {/* Call button with cord */}
      <rect x="30" y="50" width="25" height="35" rx="6" fill={light} />
      <circle cx="42.5" cy="62" r="8" fill={accent} opacity="0.8" />
      <text x="42.5" y="65" textAnchor="middle" fill={white} fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700">+</text>
      <line x1="42.5" y1="85" x2="42.5" y2="105" stroke={gray} strokeWidth="2" />
      {/* Corridor light */}
      <rect x="145" y="35" width="28" height="12" rx="3" fill={light} />
      <rect x="149" y="38" width="10" height="6" rx="1" fill="#22C55E" opacity="0.6" />
      <rect x="161" y="38" width="8" height="6" rx="1" fill={accent} opacity="0.4" />
      {/* Connection lines */}
      <line x1="55" y1="65" x2="70" y2="42" stroke={gray} strokeWidth="0.8" strokeDasharray="3 2" />
      <line x1="130" y1="42" x2="145" y2="42" stroke={gray} strokeWidth="0.8" strokeDasharray="3 2" />
      {/* Bed icon */}
      <rect x="25" y="105" width="50" height="3" rx="1" fill={gray} opacity="0.2" />
      <rect x="28" y="98" width="8" height="7" rx="2" fill={gray} opacity="0.15" />
      <text x="100" y="125" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">NURSE CALL</text>
    </svg>
  );
}

// Automatic Fire Suppression
export function AFSSIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Gas cylinders */}
      <rect x="30" y="35" width="18" height="55" rx="9" fill={light} stroke={gray} strokeWidth="0.5" />
      <rect x="30" y="30" width="18" height="10" rx="3" fill={gray} opacity="0.4" />
      <rect x="55" y="35" width="18" height="55" rx="9" fill={light} stroke={gray} strokeWidth="0.5" />
      <rect x="55" y="30" width="18" height="10" rx="3" fill={gray} opacity="0.4" />
      <rect x="80" y="35" width="18" height="55" rx="9" fill="#EF4444" opacity="0.3" stroke={gray} strokeWidth="0.5" />
      <rect x="80" y="30" width="18" height="10" rx="3" fill={gray} opacity="0.4" />
      {/* Pressure gauges */}
      <circle cx="39" cy="50" r="4" fill={dark} stroke={accent} strokeWidth="0.5" />
      <line x1="39" y1="50" x2="41" y2="48" stroke={accent} strokeWidth="0.8" />
      <circle cx="64" cy="50" r="4" fill={dark} stroke={accent} strokeWidth="0.5" />
      <line x1="64" y1="50" x2="66" y2="48" stroke={accent} strokeWidth="0.8" />
      {/* Piping network */}
      <line x1="39" y1="30" x2="39" y2="20" stroke={gray} strokeWidth="2" />
      <line x1="64" y1="30" x2="64" y2="20" stroke={gray} strokeWidth="2" />
      <line x1="89" y1="30" x2="89" y2="20" stroke={gray} strokeWidth="2" />
      <line x1="39" y1="20" x2="170" y2="20" stroke={gray} strokeWidth="2" />
      {/* Nozzles */}
      <line x1="120" y1="20" x2="120" y2="28" stroke={gray} strokeWidth="1.5" />
      <polygon points="116,28 124,28 120,35" fill={gray} opacity="0.5" />
      <line x1="150" y1="20" x2="150" y2="28" stroke={gray} strokeWidth="1.5" />
      <polygon points="146,28 154,28 150,35" fill={gray} opacity="0.5" />
      {/* Spray particles */}
      <circle cx="118" cy="42" r="1" fill={accentLight} opacity="0.3" />
      <circle cx="122" cy="45" r="1" fill={accentLight} opacity="0.2" />
      <circle cx="120" cy="50" r="1.5" fill={accentLight} opacity="0.15" />
      <circle cx="148" cy="42" r="1" fill={accentLight} opacity="0.3" />
      <circle cx="152" cy="46" r="1" fill={accentLight} opacity="0.2" />
      {/* Server rack being protected */}
      <rect x="130" y="60" width="40" height="40" rx="2" fill={mid} stroke={gray} strokeWidth="0.5" />
      <rect x="134" y="65" width="32" height="6" rx="1" fill={light} />
      <rect x="134" y="74" width="32" height="6" rx="1" fill={light} />
      <rect x="134" y="83" width="32" height="6" rx="1" fill={light} />
      <circle cx="160" cy="68" r="1.5" fill="#22C55E" />
      <circle cx="160" cy="77" r="1.5" fill="#22C55E" />
      <circle cx="160" cy="86" r="1.5" fill={accent} />
      <text x="100" y="118" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">FIRE SUPPRESSION</text>
    </svg>
  );
}

// Ultrasonic Rodent Repellent
export function URRSIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Emitter device */}
      <rect x="75" y="35" width="50" height="50" rx="25" fill={light} stroke={accentLight} strokeWidth="1" />
      <circle cx="100" cy="60" r="15" fill={mid} />
      <circle cx="100" cy="60" r="8" fill={dark} />
      <circle cx="100" cy="60" r="3" fill={accent} />
      {/* Ultrasonic waves */}
      <path d="M130 50 C136 46, 136 74, 130 70" fill="none" stroke={accentLight} strokeWidth="1" opacity="0.5" />
      <path d="M138 44 C148 38, 148 82, 138 76" fill="none" stroke={accentLight} strokeWidth="0.8" opacity="0.35" />
      <path d="M146 38 C160 30, 160 90, 146 82" fill="none" stroke={accentLight} strokeWidth="0.6" opacity="0.2" />
      {/* Left waves */}
      <path d="M70 50 C64 46, 64 74, 70 70" fill="none" stroke={accentLight} strokeWidth="1" opacity="0.5" />
      <path d="M62 44 C52 38, 52 82, 62 76" fill="none" stroke={accentLight} strokeWidth="0.8" opacity="0.35" />
      <path d="M54 38 C40 30, 40 90, 54 82" fill="none" stroke={accentLight} strokeWidth="0.6" opacity="0.2" />
      {/* Power LED */}
      <circle cx="100" cy="92" r="3" fill="#22C55E" opacity="0.6" />
      {/* Coverage area dotted circle */}
      <circle cx="100" cy="60" r="45" fill="none" stroke={accent} strokeWidth="0.5" strokeDasharray="4 3" opacity="0.2" />
      <text x="100" y="125" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">ULTRASONIC REPELLENT</text>
    </svg>
  );
}

// Active & Passive IT Infrastructure - Server rack
export function ITInfraIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Server rack left */}
      <rect x="25" y="15" width="50" height="95" rx="3" fill={light} stroke={gray} strokeWidth="0.5" />
      {/* Rack units */}
      {[0,1,2,3,4,5,6].map(i => (
        <g key={i}>
          <rect x="29" y={20 + i * 12} width="42" height="9" rx="1" fill={mid} />
          <circle cx="64" cy={24.5 + i * 12} r="1.5" fill={i < 5 ? '#22C55E' : accent} />
          <rect x="33" y={22 + i * 12} width="18" height="5" rx="1" fill={dark} />
        </g>
      ))}
      {/* Server rack right */}
      <rect x="85" y="15" width="50" height="95" rx="3" fill={light} stroke={gray} strokeWidth="0.5" />
      {[0,1,2,3,4,5,6].map(i => (
        <g key={i}>
          <rect x="89" y={20 + i * 12} width="42" height="9" rx="1" fill={mid} />
          <circle cx="124" cy={24.5 + i * 12} r="1.5" fill={i < 4 ? '#22C55E' : gray} opacity={i < 4 ? 1 : 0.3} />
          <rect x="93" y={22 + i * 12} width="18" height="5" rx="1" fill={dark} />
        </g>
      ))}
      {/* Cables between racks */}
      <path d="M75 40 C80 40, 80 45, 85 45" fill="none" stroke={accent} strokeWidth="1" opacity="0.5" />
      <path d="M75 55 C80 55, 80 50, 85 50" fill="none" stroke={accentLight} strokeWidth="1" opacity="0.4" />
      <path d="M75 70 C80 70, 80 65, 85 65" fill="none" stroke={accent} strokeWidth="1" opacity="0.3" />
      {/* Network switch */}
      <rect x="145" y="40" width="40" height="20" rx="3" fill={light} />
      <rect x="150" y="46" width="4" height="8" rx="1" fill={accent} opacity="0.5" />
      <rect x="157" y="46" width="4" height="8" rx="1" fill="#22C55E" opacity="0.5" />
      <rect x="164" y="46" width="4" height="8" rx="1" fill={accent} opacity="0.5" />
      <rect x="171" y="46" width="4" height="8" rx="1" fill={gray} opacity="0.2" />
      {/* Connection line */}
      <line x1="135" y1="50" x2="145" y2="50" stroke={gray} strokeWidth="1" strokeDasharray="3 2" />
      <text x="100" y="125" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">IT INFRASTRUCTURE</text>
    </svg>
  );
}

// Audio & Video Systems
export function AVIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Large display/screen */}
      <rect x="35" y="18" width="130" height="70" rx="3" fill={light} stroke={gray} strokeWidth="0.5" />
      <rect x="39" y="22" width="122" height="60" rx="2" fill={dark} />
      {/* Video call grid on screen */}
      <rect x="43" y="26" width="36" height="24" rx="1" fill={mid} />
      <rect x="82" y="26" width="36" height="24" rx="1" fill={mid} />
      <rect x="121" y="26" width="36" height="24" rx="1" fill={mid} />
      <rect x="43" y="54" width="36" height="24" rx="1" fill={mid} />
      <rect x="82" y="54" width="36" height="24" rx="1" fill={accent} opacity="0.2" />
      <rect x="121" y="54" width="36" height="24" rx="1" fill={mid} />
      {/* Person icons in grid */}
      <circle cx="61" cy="34" r="4" fill={gray} opacity="0.2" />
      <circle cx="100" cy="34" r="4" fill={gray} opacity="0.2" />
      <circle cx="139" cy="34" r="4" fill={gray} opacity="0.2" />
      <circle cx="61" cy="62" r="4" fill={gray} opacity="0.2" />
      <circle cx="100" cy="62" r="4" fill={accentLight} opacity="0.3" />
      <circle cx="139" cy="62" r="4" fill={gray} opacity="0.2" />
      {/* Screen stand */}
      <rect x="92" y="88" width="16" height="5" rx="1" fill={gray} opacity="0.3" />
      <rect x="85" y="93" width="30" height="3" rx="1" fill={gray} opacity="0.2" />
      {/* Speakers */}
      <rect x="15" y="40" width="12" height="25" rx="3" fill={light} />
      <circle cx="21" cy="48" r="3" fill={mid} />
      <circle cx="21" cy="58" r="4" fill={mid} />
      <rect x="173" y="40" width="12" height="25" rx="3" fill={light} />
      <circle cx="179" cy="48" r="3" fill={mid} />
      <circle cx="179" cy="58" r="4" fill={mid} />
      {/* Camera */}
      <rect x="93" y="10" width="14" height="8" rx="2" fill={light} />
      <circle cx="100" cy="14" r="2" fill={accent} />
      <text x="100" y="118" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">AUDIO & VIDEO</text>
    </svg>
  );
}

// CCTV Systems
export function CCTVIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* Pole */}
      <rect x="98" y="10" width="4" height="100" fill={gray} opacity="0.4" />
      {/* Dome camera top */}
      <circle cx="60" cy="35" r="16" fill={light} />
      <path d="M44 35 A16 16 0 0 0 76 35" fill={mid} />
      <circle cx="60" cy="38" r="6" fill={dark} />
      <circle cx="60" cy="38" r="2" fill={accent} />
      {/* Dome mount arm */}
      <line x1="76" y1="35" x2="98" y2="30" stroke={gray} strokeWidth="2" />
      {/* Bullet camera right */}
      <rect x="110" y="38" width="35" height="18" rx="3" fill={light} />
      <circle cx="140" cy="47" r="7" fill={mid} />
      <circle cx="140" cy="47" r="4" fill={dark} />
      <circle cx="140" cy="47" r="1.5" fill={accent} />
      {/* Bullet mount */}
      <line x1="110" y1="45" x2="102" y2="40" stroke={gray} strokeWidth="2" />
      {/* Field of view cone - dome */}
      <path d="M54 44 L20 90 L100 90 Z" fill={accent} opacity="0.05" />
      <line x1="54" y1="44" x2="20" y2="90" stroke={accentLight} strokeWidth="0.5" opacity="0.2" />
      <line x1="66" y1="44" x2="100" y2="90" stroke={accentLight} strokeWidth="0.5" opacity="0.2" />
      {/* Field of view cone - bullet */}
      <path d="M147 47 L180 20 L180 74 Z" fill={accent} opacity="0.05" />
      <line x1="147" y1="41" x2="180" y2="20" stroke={accentLight} strokeWidth="0.5" opacity="0.2" />
      <line x1="147" y1="53" x2="180" y2="74" stroke={accentLight} strokeWidth="0.5" opacity="0.2" />
      {/* IR LEDs around bullet */}
      <circle cx="148" cy="42" r="1" fill="#EF4444" opacity="0.4" />
      <circle cx="148" cy="52" r="1" fill="#EF4444" opacity="0.4" />
      <text x="100" y="118" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">CCTV SURVEILLANCE</text>
    </svg>
  );
}

// Smart Surveillance - AI camera with analytics
export function SmartSurvIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <rect width="200" height="140" rx="8" fill={bgGradient} />
      {/* AI Camera */}
      <rect x="20" y="25" width="45" height="28" rx="4" fill={light} />
      <circle cx="58" cy="39" r="10" fill={mid} />
      <circle cx="58" cy="39" r="6" fill={dark} />
      <circle cx="58" cy="39" r="2" fill={accent} />
      {/* AI indicator */}
      <rect x="24" y="29" width="16" height="8" rx="2" fill={accent} opacity="0.3" />
      <text x="32" y="35" textAnchor="middle" fill={accentLight} fontSize="5" fontFamily="Inter, sans-serif" fontWeight="700">AI</text>
      {/* License plate recognition */}
      <rect x="90" y="20" width="90" height="55" rx="3" fill={mid} />
      {/* Video feed area */}
      <rect x="94" y="24" width="82" height="36" rx="2" fill={dark} />
      {/* Car outline */}
      <rect x="108" y="38" width="40" height="16" rx="3" fill={light} opacity="0.3" />
      <rect x="112" y="42" width="12" height="8" rx="1" fill={mid} opacity="0.5" />
      <rect x="128" y="42" width="12" height="8" rx="1" fill={mid} opacity="0.5" />
      {/* License plate highlight box */}
      <rect x="113" y="49" width="26" height="8" rx="1" fill="none" stroke={accent} strokeWidth="1" />
      <rect x="115" y="51" width="22" height="4" rx="1" fill={accent} opacity="0.3" />
      <text x="126" y="54.5" textAnchor="middle" fill={white} fontSize="3.5" fontFamily="monospace">HR 26 AB 1234</text>
      {/* Tracking corners */}
      <path d="M108 36 L108 32 L114 32" fill="none" stroke={accentLight} strokeWidth="1" />
      <path d="M148 36 L148 32 L142 32" fill="none" stroke={accentLight} strokeWidth="1" />
      <path d="M108 56 L108 60 L114 60" fill="none" stroke={accentLight} strokeWidth="1" />
      <path d="M148 56 L148 60 L142 60" fill="none" stroke={accentLight} strokeWidth="1" />
      {/* Analytics panel */}
      <text x="98" y="68" fill={gray} fontSize="4.5" fontFamily="Inter, sans-serif">ANPR Active</text>
      <circle cx="94" cy="66.5" r="2" fill="#22C55E" opacity="0.6" />
      <text x="145" y="68" fill={gray} fontSize="4.5" fontFamily="Inter, sans-serif">98.5%</text>
      {/* Connection line */}
      <line x1="65" y1="39" x2="90" y2="39" stroke={gray} strokeWidth="0.8" strokeDasharray="3 2" />
      {/* Centralized monitoring text */}
      <rect x="50" y="90" width="100" height="22" rx="3" fill={mid} />
      <text x="100" y="103" textAnchor="middle" fill={accent} fontSize="6" fontFamily="Inter, sans-serif" fontWeight="600">CENTRALIZED MONITORING</text>
      <circle cx="60" cy="101" r="3" fill={accent} opacity="0.3" />
      <circle cx="140" cy="101" r="3" fill="#22C55E" opacity="0.3" />
      <text x="100" y="128" textAnchor="middle" fill={gray} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.5">SMART SURVEILLANCE</text>
    </svg>
  );
}

// Map product IDs to illustration components
const illustrations = {
  fas: FASIllustration,
  acs: ACSIllustration,
  pas: PASIllustration,
  bms: BMSIllustration,
  wld: WLDIllustration,
  ncs: NCSIllustration,
  afss: AFSSIllustration,
  urrs: URRSIllustration,
  'it-infra': ITInfraIllustration,
  av: AVIllustration,
  cctv: CCTVIllustration,
  'smart-surv': SmartSurvIllustration,
};

export function ProductIllustration({ productId }) {
  const Component = illustrations[productId];
  if (!Component) return null;
  return <Component />;
}

export default ProductIllustration;
