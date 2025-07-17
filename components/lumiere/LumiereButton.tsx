import React, { forwardRef } from 'react';
import { cn } from './utils.js';

export interface LumiereButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const LumiereButton = forwardRef<HTMLButtonElement, LumiereButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-3xl font-heading font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50';
    
    const variants = {
      primary: 'bg-foreground text-background hover:bg-foreground/90 shadow-soft hover:shadow-lg hover:-translate-y-0.5',
      secondary: 'bg-background text-foreground border-2 border-primary hover:bg-foreground hover:text-background',
      tertiary: 'bg-transparent text-foreground underline hover:text-destructive hover:no-underline',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft hover:shadow-lg hover:-translate-y-0.5'
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm min-h-9',
      md: 'px-6 py-3 text-base min-h-11',
      lg: 'px-8 py-4 text-lg min-h-12'
    };
    
    const disabledStyles = disabled ? 'bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground hover:translate-y-0 hover:shadow-none' : '';
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          disabledStyles,
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

LumiereButton.displayName = 'LumiereButton';