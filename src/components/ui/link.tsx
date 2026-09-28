import type { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ className, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        'underline underline-offset-4 decoration-[color:var(--color-moss-700)] decoration-1 transition-[text-decoration-thickness,color] hover:decoration-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-moss-700)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--color-paper-50)]',
        className,
      )}
      {...props}
    />
  );
}
