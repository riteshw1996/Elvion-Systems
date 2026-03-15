function ElvionLogo({ height = 36, variant = 'full' }) {
  const iconWidth = height;
  const totalWidth = variant === 'icon' ? iconWidth : height * 5.5;

  return (
    <svg
      viewBox={variant === 'icon' ? '0 0 60 64' : '0 0 240 64'}
      width={totalWidth}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Elvion Systems"
    >
      {/* Bold stylized E with flowing wing arms */}
      <g>
        {/* Vertical spine of the E - thick bold bar */}
        <path
          d="M2 2 L16 2 L16 62 L2 62 Z"
          fill="#0B1A3A"
        />

        {/* Top arm - longest, sweeps up dramatically into flowing tail */}
        <path
          d="M14 2 L38 2 C42 2, 46 1, 50 0
             C54 -0.5, 56 1, 55 4
             C54 7, 50 8, 46 8
             L38 10 L14 12 Z"
          fill="#0D2248"
        />
        {/* Top wing flowing curve */}
        <path
          d="M38 2 C44 1.5, 50 0.5, 54 2
             C58 3.5, 58 7, 54 8
             C50 9, 44 8.5, 38 10
             L38 2 Z"
          fill="#0F2A55"
        />

        {/* Middle arm - medium sweep */}
        <path
          d="M14 24 L36 24 C40 24, 44 23, 48 22
             C52 21, 54 23, 53 26
             C52 29, 48 30, 44 30
             L36 31 L14 32 Z"
          fill="#0D2248"
        />
        {/* Middle wing flowing curve */}
        <path
          d="M36 24 C42 23.5, 48 22, 52 24
             C56 26, 55 29, 51 30
             C47 31, 42 30.5, 36 31
             L36 24 Z"
          fill="#0F2A55"
        />

        {/* Bottom arm / base - shortest with subtle upward curve */}
        <path
          d="M14 50 L34 50 C38 50, 42 49.5, 45 49
             C48 48.5, 50 50, 49 52
             C48 54, 45 55, 42 55
             L34 55.5 L14 56 Z"
          fill="#0D2248"
        />
        {/* Bottom wing flowing curve */}
        <path
          d="M34 50 C39 49.5, 44 49, 47 50
             C50 51, 50 54, 47 55
             C44 56, 39 55.5, 34 55.5
             L34 50 Z"
          fill="#0F2A55"
        />
      </g>

      {variant === 'full' && (
        <g>
          {/* ELVION text */}
          <text
            x="70"
            y="30"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="800"
            fontSize="24"
            fill="#FFFFFF"
            dominantBaseline="middle"
          >
            ELVION
          </text>
          {/* SYSTEMS text */}
          <text
            x="70"
            y="52"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="600"
            fontSize="13"
            fill="#4B9AFF"
            letterSpacing="4"
            dominantBaseline="middle"
          >
            SYSTEMS
          </text>
        </g>
      )}
    </svg>
  );
}

export default ElvionLogo;
