import React, { forwardRef } from 'react';
import { cn } from './utils.js';

export interface LumiereMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'standard' | 'large';
}

export const LumiereMobile = forwardRef<HTMLDivElement, LumiereMobileProps>(
  ({ className, children, variant = 'standard', ...props }, ref) => {
    const sizes = {
      standard: 'w-80 h-[600px]',
      large: 'w-96 h-[700px]'
    };
    
    return (
      <div className="bg-muted p-6 rounded-lg flex justify-center">
        <div
          ref={ref}
          className={cn(
            'bg-foreground rounded-[30px] p-2 shadow-2xl',
            sizes[variant],
            className
          )}
          {...props}
        >
          <div className="bg-background h-full rounded-[20px] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export const LumiereMobileContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 h-full flex flex-col', className)} {...props} />
  )
);

LumiereMobile.displayName = 'LumiereMobile';
LumiereMobileContent.displayName = 'LumiereMobileContent';