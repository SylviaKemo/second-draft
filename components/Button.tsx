import type { ComponentProps } from "react";

type Variant = "primary" | "outline";
type Size = "sm" | "md" | "lg" | "xl";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-cream hover:text-lime",
  outline: "border-2 border-ink bg-cream text-ink hover:bg-white",
};

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-5 py-3 text-[15px]",
  md: "min-h-[50px] px-[22px] py-3.5 text-base",
  lg: "min-h-[54px] px-7 py-4 text-[17px]",
  xl: "min-h-[60px] px-[34px] py-5 text-[19px]",
};

type ButtonLinkProps = ComponentProps<"a"> & { variant?: Variant; size?: Size };

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full font-semibold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
