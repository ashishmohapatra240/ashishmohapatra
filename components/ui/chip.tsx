interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className = "" }: ChipProps) {
  return (
    <div
      className={`inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-[8px] bg-gray-100 text-[10px] sm:text-[14px] font-mono ${className}`}
    >
      {children}
    </div>
  );
}
