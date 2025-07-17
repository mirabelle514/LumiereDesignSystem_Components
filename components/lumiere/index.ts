// Export all components
export { LumiereButton } from './LumiereButton';
export type { LumiereButtonProps } from './LumiereButton';

export { LumiereInput } from './LumiereInput';
export type { LumiereInputProps } from './LumiereInput';

export { LumiereTextarea } from './LumiereTextarea';
export type { LumiereTextareaProps } from './LumiereTextarea';

export { 
  LumiereCard, 
  LumiereCardHeader, 
  LumiereCardTitle, 
  LumiereCardContent 
} from './LumiereCard';
export type { LumiereCardProps } from './LumiereCard';

export { LumiereToggle } from './LumiereToggle';
export type { LumiereToggleProps } from './LumiereToggle';

export { LumiereTabBar } from './LumiereTabBar';
export type { LumiereTabBarProps, LumiereTabItem } from './LumiereTabBar';

export { LumiereMobile, LumiereMobileContent } from './LumiereMobile';
export type { LumiereMobileProps } from './LumiereMobile';

export { LumiereColorSwatch } from './LumiereColorSwatch';
export type { LumiereColorSwatchProps } from './LumiereColorSwatch';

export { LumiereColorPalette } from './LumiereColorPalette';
export type { LumiereColorPaletteProps } from './LumiereColorPalette';

export { LumiereTypography } from './LumiereTypography';
export type { LumiereTypographyProps } from './LumiereTypography';

export { LumiereShowcase } from './LumiereShowcase';
export type { LumiereShowcaseProps } from './LumiereShowcase';

// Export color constants
export const LUMIERE_COLORS = {
  ivoryWhite: '#FAF8F3',
  parisianNavy: '#22304A',
  antiqueGold: '#C6A664',
  burgundy: '#7C3048',
  sageGreen: '#A6B89A',
  doveGrey: '#E5E2DD'
} as const;

export type LumiereColorNames = keyof typeof LUMIERE_COLORS;