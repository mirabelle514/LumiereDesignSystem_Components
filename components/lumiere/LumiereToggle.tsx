import React, { forwardRef, useState } from 'react';
import { cn } from './utils.js';

export interface LumiereToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

export const LumiereToggle = forwardRef<HTMLInputElement, LumiereToggleProps>(
  ({ className, label, description, checked: controlledChecked, onChange, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = useState(false);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalChecked(e.target.checked);
      }
      onChange?.(e);
    };

    return (
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={handleChange}
            {...props}
          />
          <div 
            className={cn(
              'w-14 h-8 rounded-full cursor-pointer transition-all duration-300',
              'relative',
              checked ? 'bg-secondary' : 'bg-muted',
              className
            )}
            onClick={() => {
              const event = {
                target: { checked: !checked }
              } as React.ChangeEvent<HTMLInputElement>;
              handleChange(event);
            }}
          >
            <div 
              className={cn(
                'w-6 h-6 bg-background rounded-full mt-1 ml-1 transition-transform duration-300 shadow-soft',
                checked ? 'translate-x-6' : 'translate-x-0'
              )}
            />
          </div>
        </div>
        {(label || description) && (
          <div className="flex-1">
            {label && (
              <label className="block font-heading text-sm text-foreground cursor-pointer">
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-muted-foreground font-body">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

LumiereToggle.displayName = 'LumiereToggle';