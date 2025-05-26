interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className = "" }: ChipProps) {
  return (
    <div
      className={`inline-flex items-center px-2 py-1 md:px-4 md:py-2 rounded-[8px] bg-gray-100 text-[8px] sm:text-[14px] font-mono ${className}`}
    >
      {children}
    </div>
  );
}
