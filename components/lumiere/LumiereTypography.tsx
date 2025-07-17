import React, { forwardRef } from 'react';
import { cn } from './utils.js';

export interface LumiereTypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'accent';
  children: React.ReactNode;
}

export const LumiereTypography = forwardRef<HTMLElement, LumiereTypographyProps>(
  ({ className, variant, children, ...props }, ref): React.ReactElement => {
    const variants = {
      h1: 'text-5xl md:text-6xl font-heading font-bold text-foreground',
      h2: 'text-4xl font-heading font-bold text-foreground',
      h3: 'text-2xl font-heading font-bold text-foreground',
      h4: 'text-xl font-heading text-foreground',
      body: 'text-base font-body text-foreground',
      caption: 'text-sm font-body text-muted-foreground',
      accent: 'text-xl font-accent text-foreground',
    };
    type HTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
    const elementMap: Record<LumiereTypographyProps['variant'], HTMLTag> = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      body: 'p',
      caption: 'span',
      accent: 'span',
    };
    const Component = elementMap[variant];
    return (
      <Component
        ref={ref as any}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

LumiereTypography.displayName = 'LumiereTypography';