/**
 * Fernani Fabric "F" mark — geometric, premium, single weight.
 * Renders crisply at any size and inherits `color` from parent.
 * The shape mirrors the brand book logo : a stylised F with a strong
 * horizontal bar swooping down to the right (workwear-rugged feel).
 */
export function LogoMark({ className = 'w-10 h-10', stroke = false }: { className?: string; stroke?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill={stroke ? 'none' : 'currentColor'}
      stroke={stroke ? 'currentColor' : 'none'}
      strokeWidth={stroke ? 6 : 0}
      strokeLinejoin="round"
      aria-label="Fernani Fabric"
    >
      {/* The F mark: tall left bar + descending right bar + cross bar */}
      <path d="M58 22h114l-22 30H82v36h62l-22 30H82v60H46V22h12z" />
    </svg>
  )
}

/**
 * Lockup = mark + wordmark. Use in nav, footer, splitter.
 * Variant controls the wordmark size/treatment.
 */
export function Logo({
  variant = 'horizontal',
  className = '',
  markClassName,
  textClassName,
}: {
  variant?: 'horizontal' | 'stacked' | 'mark-only'
  className?: string
  markClassName?: string
  textClassName?: string
}) {
  if (variant === 'mark-only') {
    return <LogoMark className={markClassName ?? 'w-10 h-10'} />
  }
  const isStacked = variant === 'stacked'
  return (
    <div className={`inline-flex ${isStacked ? 'flex-col items-center gap-3' : 'flex-row items-center gap-3'} ${className}`}>
      <LogoMark className={markClassName ?? (isStacked ? 'w-14 h-14' : 'w-9 h-9')} />
      <div className={`${textClassName ?? ''} leading-none`}>
        <div className={`font-sans font-bold tracking-widest ${isStacked ? 'text-2xl' : 'text-lg'}`}>
          FERNANI
        </div>
        <div className={`font-sans tracking-brand text-[10px] mt-1 ${isStacked ? 'text-center' : ''}`}>
          FABRIC
        </div>
      </div>
    </div>
  )
}
