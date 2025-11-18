export default function Logo({ className = "w-32 h-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 100 30" className="h-full w-auto">
        {/* Triangle Logo */}
        <path
          d="M8 25 L20 5 L32 25 L24 25 L20 17 L16 25 Z"
          fill="currentColor"
          className="text-navy-900"
        />
        {/* RYFT Text */}
        <text
          x="40"
          y="22"
          className="fill-current text-navy-900 font-bold"
          style={{ fontSize: '16px', fontFamily: 'Inter, sans-serif' }}
        >
          RYFT
        </text>
      </svg>
    </div>
  );
}