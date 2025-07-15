import { twMerge } from 'tailwind-merge';

import Icon from './Icon';

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
        'border-default animate-slide-up to-grey-800 pointer-events-auto h-16 grid-cols-[4rem_1fr_4rem] border-t bg-linear-to-b backdrop-blur-[1px] transition duration-300 md:grid',
        isMenuOpen && 'bg-default/80 backdrop-blur-md',
      )}
    >
      <div className="border-default hidden h-full border-r md:block"></div>
      <div className="relative h-full overflow-hidden">
        {/* TODO: Add random lyrics easter egg */}
        <div
          className={twMerge(
            'absolute top-0 left-0 flex h-full w-full items-center gap-2 px-6 transition duration-300 md:px-0',
            !isMenuOpen && 'translate-y-full',
          )}
        >
          <Icon name="arrow_forward" />
          have a great day!
        </div>
        <ul
          className={twMerge(
            'text-subtle absolute top-0 left-0 flex h-full w-full items-center justify-center gap-8 text-2xl transition duration-300',
            isMenuOpen && '-translate-y-full',
          )}
        >
          <li>
            <a href="#" className="flex">
              <Icon name="spotify" />
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              <Icon name="apple" />
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              <Icon name="youtube" />
            </a>
          </li>
          <li>
            <button className="flex">
              <Icon name="more_horiz" />
            </button>
          </li>
        </ul>
      </div>
      <div className="border-default hidden h-full border-l md:block"></div>
    </div>
  );
}
