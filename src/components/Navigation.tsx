import { useEffect, useState } from 'react';
import { FocusOn } from 'react-focus-on';

import BottomBar from '@/components/BottomBar';
import Menu from '@/components/Menu';
import TopBar from '@/components/TopBar';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMediumDevice = useBreakpoint('md');

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMediumDevice) {
      setIsMenuOpen(false);
    }
  }, [isMediumDevice]);

  return (
    <FocusOn enabled={isMenuOpen}>
      <nav
        className="pointer-events-none fixed top-0 left-0 z-50 flex h-full w-full flex-col"
        onKeyDown={(e) => {
          if (e.key === 'Escape') setIsMenuOpen(false);
        }}
      >
        <TopBar isMenuOpen={isMenuOpen} onClickMenuButton={toggleMenu} />
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
        <BottomBar isMenuOpen={isMenuOpen} onClickMenuButton={toggleMenu} />
      </nav>
    </FocusOn>
  );
}
