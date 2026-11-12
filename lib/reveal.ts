import type { CSSProperties } from "react";

/**
 * Props that make an element fade up when it scrolls into view.
 * `index` staggers siblings by `step` ms.
 */
export function reveal(index = 0, step = 90) {
  return {
    "data-reveal": "",
    style: { "--delay": `${index * step}ms` } as CSSProperties,
  };
}
