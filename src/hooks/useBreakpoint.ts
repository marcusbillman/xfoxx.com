import { useMediaQuery } from '@uidotdev/usehooks';

// Values from Tailwind's default theme
// https://tailwindcss.com/docs/theme#default-theme-variable-reference
const breakpoints = {
  sm: '40rem', // 640px
  md: '48rem', // 768px
  lg: '64rem', // 1024px
  xl: '80rem', // 1280px
  '2xl': '96rem', // 1536px
};

export function useBreakpoint(key: keyof typeof breakpoints) {
  // Return false on server
  if (typeof window === 'undefined') {
    return false;
  }

  return useMediaQuery(`(min-width: ${breakpoints[key]})`);
}
