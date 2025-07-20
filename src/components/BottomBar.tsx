import type { Quote } from '@/pages/api/quote';

import { useEffect, useState } from 'react';
import {
  ArrowForward,
  MoreHoriz,
} from '@nine-thirty-five/material-symbols-react/sharp';
import { useWindowScroll, useWindowSize } from '@uidotdev/usehooks';
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
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch('/api/quote');
      const data: Quote = await response.json();
      setQuote(data);
      console.log('Fetched quote:', data);
    }

    fetchQuote();
  }, []);

  const [{ y }, _scrollTo] = useWindowScroll();
  const { height: viewportHeight } = useWindowSize();
  const pageHeight = document.documentElement.scrollHeight;

  const isAtBottom =
    y !== null && viewportHeight !== null && y + viewportHeight >= pageHeight;

  const showQuote = quote && (isMenuOpen || isAtBottom);

  return (
    <div
      className={twMerge(
        'pointer-events-auto h-16 animate-slide-up grid-cols-[4rem_1fr_4rem] border-t border-default bg-linear-to-b to-grey-800 backdrop-blur-[1px] transition duration-300 md:grid',
        isMenuOpen && 'bg-default/80 backdrop-blur-md',
      )}
    >
      <div className="hidden h-full border-r border-default md:block"></div>
      <div className="relative h-full overflow-hidden">
        {quote && (
          <a href={quote.data.url} target="_blank" rel="noopener noreferrer">
            <div
              className={twMerge(
                'absolute top-0 left-0 flex h-full w-full items-center gap-2 px-6 transition duration-300 hover:text-accent md:justify-center',
                !showQuote && 'translate-y-full',
              )}
            >
              <ArrowForward className="shrink-0" />
              <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                {quote.data.text}
              </span>
            </div>
          </a>
        )}
        <ul
          className={twMerge(
            'absolute top-0 left-0 flex h-full w-full items-center justify-center gap-8 text-2xl text-subtle transition duration-300',
            showQuote && '-translate-y-full',
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
