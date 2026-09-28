import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ className, variant = 'primary', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex min-h-12 items-center justify-center rounded-[var(--radius-control)] border px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-moss-700)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--color-paper-50)] disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'primary' && 'border-transparent bg-[color:var(--color-moss-700)] text-[color:var(--color-paper-50)] hover:bg-[color:var(--color-ink-950)]',
        variant === 'secondary' && 'border-[color:var(--color-ink-950)]/20 bg-transparent text-[color:var(--color-ink-950)] hover:bg-[color:var(--color-paper-100)]',
        className,
      )}
      {...props}
    />
  );
}
