import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-card)] border border-[color:var(--color-ink-950)]/8 bg-[color:var(--color-paper-50)] p-6 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]',
        className,
      )}
      {...props}
    />
  );
}
