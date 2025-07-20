import { Close, Menu } from '@nine-thirty-five/material-symbols-react/sharp';
import { useWindowScroll } from '@uidotdev/usehooks';
import { twMerge } from 'tailwind-merge';

import { Logo } from './Logo';

interface TopBarProps {
  isMenuOpen: boolean;
  onClickMenuButton: () => void;
  onClickLogo: () => void;
}

export default function TopBar({
  isMenuOpen,
  onClickMenuButton,
  onClickLogo,
}: TopBarProps) {
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
        <a href="#hero" onClick={onClickLogo}>
          <Logo
            hideWordmark={!isMenuOpen && y !== null && y > 0}
            className="h-8 text-accent transition-colors hover:text-default"
          />
        </a>
        <button
          className="cursor-pointer md:hidden"
          onClick={onClickMenuButton}
        >
          {isMenuOpen ? (
            <Close className="size-8 transition-colors hover:text-accent" />
          ) : (
            <Menu className="size-8 transition-colors hover:text-accent" />
          )}
        </button>
        <ul className="hidden gap-6 text-subtle md:flex">
          <li>
            <a href="#music" className="transition-colors hover:text-default">
              music
            </a>
          </li>
          <li>
            <a href="#about" className="transition-colors hover:text-default">
              about
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-default">
              contact
            </a>
          </li>
        </ul>
      </div>
      {/* Right gutter */}
      <div className="hidden h-full border-l border-default md:block"></div>
    </div>
  );
}
