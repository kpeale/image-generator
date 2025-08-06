'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Toaster as Sonner, ToasterProps } from 'sonner';
import clsx from 'clsx'; // optional: for cleaner className switching

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme, systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    setResolvedTheme(currentTheme as 'light' | 'dark');
  }, [theme, systemTheme]);

  return (
    <Sonner
      theme={resolvedTheme}
      className={clsx(
        'toaster group',
        resolvedTheme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      )}
      {...props}
    />
  );
};

export { Toaster };
