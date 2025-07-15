import { twMerge } from 'tailwind-merge';

interface ArrowProps {
  className?: string;
}

export default function Arrow({ className = '' }: ArrowProps) {
  return (
    <svg
      width="49"
      height="35"
      viewBox="0 0 49 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('w-auto', className)}
    >
      <path
        d="M1.70902 30.6448C11.7975 35.8654 34.3693 37.3687 43.9493 1.61548M43.9493 1.61548L31.8056 8.2994M43.9493 1.61548L47.3522 14.8502"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
