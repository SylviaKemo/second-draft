export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold leading-none tracking-[-0.03em] ${className}`}>
      second <span className="rounded bg-lime px-1.5 text-ink">draft</span>
    </span>
  );
}
