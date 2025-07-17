import React, { forwardRef } from 'react';
import { cn } from './utils.js';

export interface LumiereCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'featured' | 'elevated';
  children: React.ReactNode;
}

export const LumiereCard = forwardRef<HTMLDivElement, LumiereCardProps>(
  ({ className, variant = 'standard', children, ...props }, ref) => {
    const baseStyles = 'rounded-2xl border border-primary transition-all duration-300 hover:-translate-y-1';
    
    const variants = {
      standard: 'bg-background shadow-card p-6',
      featured: 'bg-gradient-to-br from-background to-muted border-2 border-primary shadow-card p-6',
      elevated: 'bg-background shadow-2xl p-8 border-2 border-primary/50'
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export const LumiereCardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props} />
  )
);

export const LumiereCardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('font-heading text-lg text-foreground', className)} {...props} />
  )
);

export const LumiereCardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-foreground/80 font-body', className)} {...props} />
  )
);

LumiereCard.displayName = 'LumiereCard';
LumiereCardHeader.displayName = 'LumiereCardHeader';
LumiereCardTitle.displayName = 'LumiereCardTitle';
LumiereCardContent.displayName = 'LumiereCardContent';