import React, { forwardRef } from 'react';
import { cn } from './utils.js';

export interface LumiereColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  hex: string;
  note?: string;
  swatchStyle?: React.CSSProperties;
}

export const LumiereColorSwatch = forwardRef<HTMLDivElement, LumiereColorSwatchProps>(
  ({ className, name, hex, note, swatchStyle, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'text-center border border-primary rounded-lg overflow-hidden shadow-card',
          className
        )}
        {...props}
      >
        <div 
          className="h-24 w-full flex items-center justify-center"
          style={swatchStyle}
        >
          <div>
            <div className="font-heading font-bold">{name}</div>
            <div className="font-mono text-sm opacity-70">{hex}</div>
          </div>
        </div>
        <div className="p-3 bg-card">
          {note && (
            <small className="text-muted-foreground font-body">{note}</small>
          )}
        </div>
      </div>
    );
  }
);

LumiereColorSwatch.displayName = 'LumiereColorSwatch';