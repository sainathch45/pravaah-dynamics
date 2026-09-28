import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary';

const baseStyles =
  'inline-flex min-h-12 items-center justify-center rounded-[var(--radius-control)] border px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-moss-700)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--color-paper-50)] disabled:cursor-not-allowed disabled:opacity-50 no-underline';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'border-transparent bg-[color:var(--color-moss-700)] text-[color:var(--color-paper-50)] hover:bg-[color:var(--color-ink-950)]',
  secondary:
    'border-[color:var(--color-ink-950)]/20 bg-transparent text-[color:var(--color-ink-950)] hover:bg-[color:var(--color-paper-100)]',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ className, variant = 'primary', type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={cn(baseStyles, variantStyles[variant], className)} {...props} />;
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

export function ButtonLink({ className, variant = 'primary', ...props }: ButtonLinkProps) {
  return <a className={cn(baseStyles, variantStyles[variant], className)} {...props} />;
}
