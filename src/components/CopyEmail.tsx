import { useState } from 'react';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { twMerge } from 'tailwind-merge';

export default function CopyEmail() {
  const [_copiedText, copyToClipboard] = useCopyToClipboard();
  const [hasCopied, setHasCopied] = useState(false);
  const email = 'hello@xfoxx.com';

  function handleCopy() {
    if (hasCopied) return;

    copyToClipboard(email);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  }

  return (
    <div
      className={twMerge(
        'cursor-pointer transition-colors',
        hasCopied
          ? 'bg-accent text-inverted'
          : 'text-accent hover:bg-inverted hover:text-inverted',
      )}
      onClick={handleCopy}
    >
      <div className="mx-auto flex max-w-6xl flex-col px-6 py-32">
        <p className="text-center text-4xl">
          {hasCopied ? 'Email copied' : email}
        </p>
      </div>
    </div>
  );
}
