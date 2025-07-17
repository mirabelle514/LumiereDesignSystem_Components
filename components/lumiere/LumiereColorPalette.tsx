import React from 'react';
import { cn } from './utils.js';
import { LumiereColorSwatch } from './LumiereColorSwatch';
import { LUMIERE_COLORS } from './index';

export interface LumiereColorPaletteProps extends React.HTMLAttributes<HTMLDivElement> {
  showNotes?: boolean;
}

export const LumiereColorPalette: React.FC<LumiereColorPaletteProps> = ({
  className,
  showNotes = true,
  ...props
}) => {
  const colorData = [
    { name: 'Ivory White', hex: LUMIERE_COLORS.ivoryWhite, note: 'Primary background color' },
    { name: 'Parisian Navy', hex: LUMIERE_COLORS.parisianNavy, note: 'Primary text color' },
    { name: 'Antique Gold', hex: LUMIERE_COLORS.antiqueGold, note: 'Accent color' },
    { name: 'Burgundy', hex: LUMIERE_COLORS.burgundy, note: 'Secondary accent' },
    { name: 'Sage Green', hex: LUMIERE_COLORS.sageGreen, note: 'Success/positive color' },
    { name: 'Dove Grey', hex: LUMIERE_COLORS.doveGrey, note: 'Neutral background' }
  ];

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", className)} {...props}>
      {colorData.map((color) => (
        <LumiereColorSwatch
          key={color.name}
          name={color.name}
          hex={color.hex}
          note={showNotes ? color.note : undefined}
          swatchStyle={{ backgroundColor: color.hex }}
        />
      ))}
    </div>
  );
};

LumiereColorPalette.displayName = 'LumiereColorPalette'; 