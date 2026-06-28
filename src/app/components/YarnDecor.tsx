export default function YarnDecor({ className = "", color = "#E2725B", opacity = 0.08, size = 180 }: {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Yarn ball outer circle */}
      <circle cx="100" cy="100" r="85" stroke={color} strokeWidth="6" fill="none" />
      {/* Curved yarn lines across the ball */}
      <path d="M30 60 Q100 20 170 60" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M20 90 Q100 50 180 90" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M18 118 Q100 80 182 118" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M25 145 Q100 110 175 145" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M40 168 Q100 140 160 168" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Vertical curve lines */}
      <path d="M60 18 Q30 100 55 182" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M100 15 Q70 100 95 185" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M140 18 Q160 100 145 182" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Loose yarn tail */}
      <path d="M168 45 Q200 20 195 60 Q185 90 210 80" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
