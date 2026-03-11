import { twMerge } from 'tailwind-merge';

import {
  Apple,
  SoundCloud,
  Spotify,
  Tidal,
  YouTube,
} from '@/components/BrandIcon';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <div
      className={twMerge(
        'pointer-events-auto flex grow flex-col bg-default/80 backdrop-blur-md transition duration-300',
        !isOpen && 'translate-x-full transform',
      )}
      aria-hidden={!isOpen}
    >
      <ul className="flex flex-1 flex-col justify-center gap-6 p-6 text-4xl">
        <li>
          <a
            href="#music"
            className="block transition-colors hover:text-accent"
            onClick={onClose}
          >
            music
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block transition-colors hover:text-accent"
            onClick={onClose}
          >
            about
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block transition-colors hover:text-accent"
            onClick={onClose}
          >
            contact
          </a>
        </li>
      </ul>
      <ul className="flex flex-1 flex-col justify-center gap-4 border-t border-default p-6">
        <li>
          <a
            href="https://open.spotify.com/artist/0LtQgT80t5rQw44aANkT4o?si=5BSzv_rCQN-_akT-q_YiCA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Spotify />
            spotify
          </a>
        </li>
        <li>
          <a
            href="https://music.apple.com/se/artist/xfoxx/1880720130"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Apple />
            apple music
          </a>
        </li>
        <li>
          <a
            href="https://music.youtube.com/channel/UCsbEuAn8U5Mg3-ZooQ4jsSg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <YouTube />
            youtube music
          </a>
        </li>
        <li>
          <a
            href="https://tidal.com/artist/75142989"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Tidal />
            tidal
          </a>
        </li>
        <li>
          <a
            href="https://soundcloud.com/xfoxx37"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <SoundCloud />
            soundcloud
          </a>
        </li>
      </ul>
    </div>
  );
}
