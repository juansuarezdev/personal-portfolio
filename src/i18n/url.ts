const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an absolute site path ("/en/cv/") with the deploy base. */
export const url = (p: string) => base + p;
/** Remove the deploy base from a pathname. */
export const unbase = (p: string) => (base && p.startsWith(base) ? p.slice(base.length) || '/' : p);
export const BASE = base;
