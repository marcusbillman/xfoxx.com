import { Close, Menu } from '@nine-thirty-five/material-symbols-react/sharp';
import { useWindowScroll } from '@uidotdev/usehooks';
import { twMerge } from 'tailwind-merge';

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
        'pointer-events-auto h-16 animate-slide-down grid-cols-[4rem_1fr_4rem] border-b border-default bg-linear-to-t to-grey-800 backdrop-blur-[1px] transition duration-300 md:grid',
        isMenuOpen && 'bg-default/80 backdrop-blur-md',
      )}
    >
      {/* Left gutter */}
      <div className="hidden h-full border-r border-default md:block"></div>
      {/* Center content */}
      <div className="flex h-full items-end justify-between px-6 md:px-0">
        <Logo
          hideWordmark={!isMenuOpen && y !== null && y > 0}
          className="h-8 text-accent"
        />
        <button
          className="flex cursor-pointer text-3xl md:hidden"
          onClick={onClickMenuButton}
        >
          {isMenuOpen ? <Close /> : <Menu />}
        </button>
        <ul className="hidden gap-6 text-subtle md:flex">
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
      <div className="hidden h-full border-l border-default md:block"></div>
    </div>
  );
}
