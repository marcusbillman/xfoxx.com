import {
  ArrowForward,
  MoreHoriz,
} from '@nine-thirty-five/material-symbols-react/sharp';
import { twMerge } from 'tailwind-merge';

import { Apple, Spotify, YouTube } from '@/components/BrandIcon';

interface BottomBarProps {
  isMenuOpen: boolean;
  onClickMenuButton: () => void;
}

export default function BottomBar({
  isMenuOpen,
  onClickMenuButton,
}: BottomBarProps) {
  return (
    <div
      className={twMerge(
        'pointer-events-auto h-16 animate-slide-up grid-cols-[4rem_1fr_4rem] border-t border-default bg-linear-to-b to-grey-800 backdrop-blur-[1px] transition duration-300 md:grid',
        isMenuOpen && 'bg-default/80 backdrop-blur-md',
      )}
    >
      <div className="hidden h-full border-r border-default md:block"></div>
      <div className="relative h-full overflow-hidden">
        {/* TODO: Add random lyrics easter egg */}
        <div
          className={twMerge(
            'absolute top-0 left-0 flex h-full w-full items-center gap-2 px-6 transition duration-300 md:px-0',
            !isMenuOpen && 'translate-y-full',
          )}
        >
          <ArrowForward />
          have a great day!
        </div>
        <ul
          className={twMerge(
            'absolute top-0 left-0 flex h-full w-full items-center justify-center gap-8 text-2xl text-subtle transition duration-300',
            isMenuOpen && '-translate-y-full',
          )}
        >
          <li>
            <a href="#" className="flex">
              <Spotify />
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              <Apple />
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              <YouTube />
            </a>
          </li>
          <li>
            <button className="flex">
              <MoreHoriz />
            </button>
          </li>
        </ul>
      </div>
      <div className="hidden h-full border-l border-default md:block"></div>
    </div>
  );
}
