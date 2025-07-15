import { twMerge } from 'tailwind-merge';

import Icon from './Icon';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <div
      className={twMerge(
        'bg-default/80 pointer-events-auto flex grow flex-col backdrop-blur-md transition duration-300',
        !isOpen && 'translate-x-full transform',
      )}
      aria-hidden={!isOpen}
    >
      <ul className="flex flex-1 flex-col justify-center gap-6 p-6 text-4xl">
        <li>
          <a href="#music" onClick={onClose}>
            music
          </a>
        </li>
        <li>
          <a href="#about" onClick={onClose}>
            about
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClose}>
            contact
          </a>
        </li>
      </ul>
      <ul className="border-default flex flex-1 flex-col justify-center gap-4 border-t p-6">
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Icon name="spotify" />
            spotify
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Icon name="apple" />
            apple music
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Icon name="youtube" />
            youtube music
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Icon name="tidal" />
            tidal
          </a>
        </li>
        <li>
          <a
            href="https://soundcloud.com/xfoxx37"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Icon name="soundcloud" />
            soundcloud
          </a>
        </li>
      </ul>
    </div>
  );
}
