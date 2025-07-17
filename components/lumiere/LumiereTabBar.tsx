import React, { forwardRef } from 'react';
import { cn } from './utils.js';

export interface LumiereTabItem {
  id: string;
  icon?: React.ComponentType<{ className?: string }>;
  label?: string;
  active?: boolean;
  onClick?: () => void;
}

export interface LumiereTabBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: LumiereTabItem[];
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
}

export const LumiereTabBar = forwardRef<HTMLDivElement, LumiereTabBarProps>(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-foreground rounded-lg p-2 flex justify-around items-center shadow-card',
          className
        )}
        {...props}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              item.onClick?.();
              onItemClick?.(item.id);
            }}
            className={cn(
              'p-2 rounded-lg transition-all duration-200 relative',
              'flex flex-col items-center justify-center min-w-12',
              activeItem === item.id || item.active
                ? 'text-background bg-white/10'
                : 'text-muted hover:text-background'
            )}
          >
            {item.icon && <item.icon className="w-5 h-5" />}
            {item.label && (
              <span className={cn(
                'text-xs mt-1 font-body',
                !item.icon && 'text-sm' // Larger text when no icon
              )}>
                {item.label}
              </span>
            )}
            {(activeItem === item.id || item.active) && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-5 h-0.5 bg-background rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    );
  }
);

LumiereTabBar.displayName = 'LumiereTabBar';