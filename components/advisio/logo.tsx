export function AdvisioLogo({ size = 40 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Outer ring */}
      <circle cx="20" cy="20" r="18.5" stroke="#c9a84c" strokeWidth="1"/>
      {/* Inner geometric A shape */}
      <path d="M20 8 L28.5 28 H11.5 Z" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Cross bar of A */}
      <line x1="14.5" y1="22" x2="25.5" y2="22" stroke="#c9a84c" strokeWidth="1.5"/>
      {/* Scan line accent */}
      <line x1="8" y1="20" x2="12" y2="20" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
      <line x1="28" y1="20" x2="32" y2="20" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
      {/* Corner ticks */}
      <line x1="8" y1="8" x2="11" y2="8" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
      <line x1="8" y1="8" x2="8" y2="11" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
      <line x1="32" y1="8" x2="29" y2="8" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
      <line x1="32" y1="8" x2="32" y2="11" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
      <line x1="8" y1="32" x2="11" y2="32" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
      <line x1="8" y1="32" x2="8" y2="29" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
      <line x1="32" y1="32" x2="29" y2="32" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
      <line x1="32" y1="32" x2="32" y2="29" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
    </svg>
  )
}

export function LogoWithText({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3.5">
      <AdvisioLogo size={size} />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-2xl font-semibold text-white tracking-wide">
          Advisio
        </span>
        <span className="text-[0.65rem] font-normal text-gold tracking-[0.12em] uppercase mt-0.5">
          AI Business Audit
        </span>
      </div>
    </div>
  )
}
