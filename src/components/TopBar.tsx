import { useWindowScroll } from '@uidotdev/usehooks';
import { twMerge } from 'tailwind-merge';

import Icon from './Icon';
import { Logo } from './Logo';

interface TopBarProps {
  isMenuOpen: boolean;
  onClickMenuButton: () => void;
}

export default function TopBar({ isMenuOpen, onClickMenuButton }: TopBarProps) {
  const [{ y }, _scrollTo] = useWindowScroll();

  return (
    <div
      className={twMerge(
        'border-default animate-slide-down to-grey-800 pointer-events-auto h-16 grid-cols-[4rem_1fr_4rem] border-b bg-linear-to-t backdrop-blur-[1px] transition duration-300 md:grid',
        isMenuOpen && 'bg-default/80 backdrop-blur-md',
      )}
    >
      {/* Left gutter */}
      <div className="border-default hidden h-full border-r md:block"></div>
      {/* Center content */}
      <div className="flex h-full items-end justify-between px-6 md:px-0">
        <Logo
          hideWordmark={!isMenuOpen && y !== null && y > 0}
          className="text-accent h-8"
        />
        <button
          className="flex cursor-pointer text-3xl md:hidden"
          onClick={onClickMenuButton}
        >
          {isMenuOpen ? <Icon name="close" /> : <Icon name="menu" />}
        </button>
        <ul className="text-subtle hidden gap-6 md:flex">
          <li>
            <a href="#music">music</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      {/* Right gutter */}
      <div className="border-default hidden h-full border-l md:block"></div>
    </div>
  );
}
