'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme, systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'system') {
      setResolvedTheme(systemTheme as 'light' | 'dark');
    } else {
      setResolvedTheme(theme as 'light' | 'dark');
    }
  }, [theme, systemTheme]);

  return (
    <Sonner
      theme={resolvedTheme}
      className='toaster group'
      style={
        {
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
