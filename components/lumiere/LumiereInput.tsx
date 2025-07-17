import React, { forwardRef } from 'react';
import { cn } from './utils.js';

export interface LumiereInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const LumiereInput = forwardRef<HTMLInputElement, LumiereInputProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block font-heading text-sm text-foreground">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-3 py-3 bg-input-background border border-primary rounded-lg',
            'font-body text-foreground placeholder:text-foreground/50',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary',
            'transition-all duration-200',
            error && 'border-destructive focus:ring-destructive/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive font-body">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-muted-foreground font-body">{helperText}</p>
        )}
      </div>
    );
  }
);

LumiereInput.displayName = 'LumiereInput';