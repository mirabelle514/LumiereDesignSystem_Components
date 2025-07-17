import { useState, forwardRef } from 'react';
import { Home, User, Settings, Square, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { cn } from './ui/utils';

// Define colors directly
const LUMIERE_COLORS = {
  ivoryWhite: '#FAF8F3',
  parisianNavy: '#22304A',
  antiqueGold: '#C6A664',
  burgundy: '#7C3048',
  sageGreen: '#A6B89A',
  doveGrey: '#E5E2DD'
} as const;

// Define all components inline to avoid import issues
interface LumiereButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const LumiereButton = forwardRef<HTMLButtonElement, LumiereButtonProps>(
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

interface LumiereInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const LumiereInput = forwardRef<HTMLInputElement, LumiereInputProps>(
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

interface LumiereTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const LumiereTextarea = forwardRef<HTMLTextAreaElement, LumiereTextareaProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block font-heading text-sm text-foreground">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-3 py-3 bg-input-background border border-primary rounded-lg',
            'font-body text-foreground placeholder:text-foreground/50',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary',
            'transition-all duration-200 resize-none',
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

interface LumiereCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'featured' | 'elevated';
  children: React.ReactNode;
}

const LumiereCard = forwardRef<HTMLDivElement, LumiereCardProps>(
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

const LumiereCardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props} />
  )
);

const LumiereCardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('font-heading text-lg text-foreground', className)} {...props} />
  )
);

const LumiereCardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-foreground/80 font-body', className)} {...props} />
  )
);

interface LumiereToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

const LumiereToggle = forwardRef<HTMLInputElement, LumiereToggleProps>(
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

interface LumiereTabItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label?: string;
  active?: boolean;
  onClick?: () => void;
}

interface LumiereTabBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: LumiereTabItem[];
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
}

const LumiereTabBar = forwardRef<HTMLDivElement, LumiereTabBarProps>(
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
            <item.icon className="w-5 h-5" />
            {item.label && (
              <span className="text-xs mt-1 font-body">{item.label}</span>
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

interface LumiereMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'standard' | 'large';
}

const LumiereMobile = forwardRef<HTMLDivElement, LumiereMobileProps>(
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

const LumiereMobileContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 h-full flex flex-col', className)} {...props} />
  )
);

interface LumiereColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  hex: string;
  note?: string;
  swatchStyle?: React.CSSProperties;
}

const LumiereColorSwatch = forwardRef<HTMLDivElement, LumiereColorSwatchProps>(
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

interface LumiereTypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'accent';
  children: React.ReactNode;
}

const LumiereTypography = forwardRef<HTMLElement, LumiereTypographyProps>(
  ({ className, variant, children, ...props }, ref) => {
    const variants = {
      h1: 'text-5xl md:text-6xl font-heading font-bold text-foreground',
      h2: 'text-4xl font-heading font-bold text-foreground',
      h3: 'text-2xl font-heading font-bold text-foreground',
      h4: 'text-xl font-heading text-foreground',
      body: 'text-base font-body text-foreground',
      caption: 'text-sm font-body text-muted-foreground',
      accent: 'text-xl font-accent text-foreground'
    };
    
    type HTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
    const elementMap: Record<string, HTMLTag> = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      body: 'p',
      caption: 'span',
      accent: 'span',
    };
    const Component = elementMap[variant] || 'span';
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

// Add display names
LumiereButton.displayName = 'LumiereButton';
LumiereInput.displayName = 'LumiereInput';
LumiereTextarea.displayName = 'LumiereTextarea';
LumiereCard.displayName = 'LumiereCard';
LumiereCardHeader.displayName = 'LumiereCardHeader';
LumiereCardTitle.displayName = 'LumiereCardTitle';
LumiereCardContent.displayName = 'LumiereCardContent';
LumiereToggle.displayName = 'LumiereToggle';
LumiereTabBar.displayName = 'LumiereTabBar';
LumiereMobile.displayName = 'LumiereMobile';
LumiereMobileContent.displayName = 'LumiereMobileContent';
LumiereColorSwatch.displayName = 'LumiereColorSwatch';
LumiereTypography.displayName = 'LumiereTypography';

export function LumiereLibrary() {
  const [activeTab, setActiveTab] = useState('0');
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const tabItems: LumiereTabItem[] = [
    { id: '0', icon: Home, label: 'Home' },
    { id: '1', icon: User, label: 'Profile' },
    { id: '2', icon: Settings, label: 'Settings' },
    { id: '3', icon: Square, label: 'More' }
  ];

  const colorSwatches = [
    { 
      name: 'Ivory White', 
      hex: LUMIERE_COLORS.ivoryWhite,
      style: { backgroundColor: LUMIERE_COLORS.ivoryWhite, color: LUMIERE_COLORS.parisianNavy }
    },
    { 
      name: 'Parisian Navy', 
      hex: LUMIERE_COLORS.parisianNavy,
      style: { backgroundColor: LUMIERE_COLORS.parisianNavy, color: LUMIERE_COLORS.ivoryWhite }
    },
    { 
      name: 'Antique Gold', 
      hex: LUMIERE_COLORS.antiqueGold,
      note: 'Borders & accents only',
      style: { backgroundColor: LUMIERE_COLORS.antiqueGold, color: LUMIERE_COLORS.parisianNavy }
    },
    { 
      name: 'Burgundy', 
      hex: LUMIERE_COLORS.burgundy,
      style: { backgroundColor: LUMIERE_COLORS.burgundy, color: LUMIERE_COLORS.ivoryWhite }
    },
    { 
      name: 'Sage Green', 
      hex: LUMIERE_COLORS.sageGreen,
      style: { backgroundColor: LUMIERE_COLORS.sageGreen, color: LUMIERE_COLORS.parisianNavy }
    },
    { 
      name: 'Dove Grey', 
      hex: LUMIERE_COLORS.doveGrey,
      style: { backgroundColor: LUMIERE_COLORS.doveGrey, color: LUMIERE_COLORS.parisianNavy }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="text-center py-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-6">
          <LumiereTypography variant="h1" className="mb-2">
            Lumière Component Library
          </LumiereTypography>
          <LumiereTypography variant="body" className="text-xl mb-2">
            Design System for{' '}
            <a 
              href="https://thewednesdayprojects.com/" 
              className="text-foreground underline hover:text-destructive transition-colors"
            >
              The Wednesday Projects
            </a>
          </LumiereTypography>
          <LumiereTypography variant="body" className="text-lg opacity-80 mb-4">
            Reusable React components with French elegance
          </LumiereTypography>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleDarkMode}
          >
            {isDark ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
            Toggle Theme
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="foundations">Foundations</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>

          <TabsContent value="components">
            <div className="space-y-8">
              {/* Buttons */}
              <Card className="border-primary shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
                    LumiereButton
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-3">
                      <LumiereTypography variant="h4">Primary</LumiereTypography>
                      <LumiereButton variant="primary" className="w-full">
                        Primary Button
                      </LumiereButton>
                    </div>
                    <div className="space-y-3">
                      <LumiereTypography variant="h4">Secondary</LumiereTypography>
                      <LumiereButton variant="secondary" className="w-full">
                        Secondary Button
                      </LumiereButton>
                    </div>
                    <div className="space-y-3">
                      <LumiereTypography variant="h4">Tertiary</LumiereTypography>
                      <LumiereButton variant="tertiary" className="w-full">
                        Tertiary Button
                      </LumiereButton>
                    </div>
                    <div className="space-y-3">
                      <LumiereTypography variant="h4">Destructive</LumiereTypography>
                      <LumiereButton variant="destructive" className="w-full">
                        Destructive Button
                      </LumiereButton>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <LumiereButton size="sm">Small</LumiereButton>
                    <LumiereButton size="md">Medium</LumiereButton>
                    <LumiereButton size="lg">Large</LumiereButton>
                  </div>
                </CardContent>
              </Card>

              {/* Inputs */}
              <Card className="border-primary shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
                    LumiereInput & LumiereTextarea
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <LumiereInput
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                        helperText="We'll never share your email"
                      />
                      <LumiereInput
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        error="Password must be at least 8 characters"
                      />
                    </div>
                    <div className="space-y-4">
                      <LumiereTextarea
                        label="Message"
                        placeholder="Enter your message"
                        rows={4}
                        helperText="Maximum 500 characters"
                      />
                      <LumiereToggle
                        label="Enable Notifications"
                        description="Get notified about important updates"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cards */}
              <Card className="border-primary shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
                    LumiereCard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <LumiereCard variant="standard">
                      <LumiereCardHeader>
                        <LumiereCardTitle>Standard Card</LumiereCardTitle>
                      </LumiereCardHeader>
                      <LumiereCardContent>
                        This is a standard card with ivory background and gold border.
                      </LumiereCardContent>
                    </LumiereCard>
                    
                    <LumiereCard variant="featured">
                      <LumiereCardHeader>
                        <LumiereCardTitle>Featured Card</LumiereCardTitle>
                      </LumiereCardHeader>
                      <LumiereCardContent>
                        This is a featured card with gradient background and enhanced styling.
                      </LumiereCardContent>
                    </LumiereCard>
                    
                    <LumiereCard variant="elevated">
                      <LumiereCardHeader>
                        <LumiereCardTitle>Elevated Card</LumiereCardTitle>
                      </LumiereCardHeader>
                      <LumiereCardContent>
                        This is an elevated card with enhanced shadows and spacing.
                      </LumiereCardContent>
                    </LumiereCard>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <Card className="border-primary shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
                    LumiereTabBar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <LumiereTabBar
                      items={tabItems}
                      activeItem={activeTab}
                      onItemClick={setActiveTab}
                      className="max-w-xs"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="foundations">
            <div className="space-y-8">
              {/* Colors */}
              <Card className="border-primary shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
                    Color Palette
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {colorSwatches.map((color) => (
                      <LumiereColorSwatch
                        key={color.name}
                        name={color.name}
                        hex={color.hex}
                        note={color.note}
                        swatchStyle={color.style}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Typography */}
              <Card className="border-primary shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
                    Typography
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 bg-muted border-l-4 border-primary rounded-r-lg">
                      <LumiereTypography variant="h1" className="text-2xl">Heading 1</LumiereTypography>
                      <LumiereTypography variant="caption">Playfair Display, Bold - For main titles</LumiereTypography>
                    </div>
                    <div className="p-4 bg-muted border-l-4 border-primary rounded-r-lg">
                      <LumiereTypography variant="h2" className="text-xl">Heading 2</LumiereTypography>
                      <LumiereTypography variant="caption">Playfair Display, Bold - For section titles</LumiereTypography>
                    </div>
                    <div className="p-4 bg-muted border-l-4 border-primary rounded-r-lg">
                      <LumiereTypography variant="h3">Heading 3</LumiereTypography>
                      <LumiereTypography variant="caption">Playfair Display, Bold - For subsections</LumiereTypography>
                    </div>
                    <div className="p-4 bg-muted border-l-4 border-primary rounded-r-lg">
                      <LumiereTypography variant="body">Body Text</LumiereTypography>
                      <LumiereTypography variant="caption">Open Sans, Regular - For content</LumiereTypography>
                    </div>
                    <div className="p-4 bg-muted border-l-4 border-primary rounded-r-lg">
                      <LumiereTypography variant="accent">Accent Text</LumiereTypography>
                      <LumiereTypography variant="caption">Open Sans, Italic - For emphasis</LumiereTypography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="patterns">
            <div className="space-y-8">
              <Card className="border-primary shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
                    Form Pattern
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="max-w-md mx-auto space-y-4">
                    <LumiereInput
                      label="Full Name"
                      placeholder="Enter your full name"
                    />
                    <LumiereInput
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <LumiereTextarea
                      label="Message"
                      placeholder="Enter your message"
                      rows={4}
                    />
                    <LumiereToggle
                      label="Subscribe to newsletter"
                      description="Get updates about new features"
                    />
                    <div className="pt-4">
                      <LumiereButton variant="primary" className="w-full">
                        Submit Form
                      </LumiereButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mobile">
            <div className="space-y-8">
              <Card className="border-primary shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
                    Mobile App Example
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LumiereMobile>
                    <LumiereMobileContent className="justify-between">
                      <div className="text-center space-y-6 mt-16">
                        <LumiereTypography variant="h3">Welcome to Lumière</LumiereTypography>
                        <LumiereTypography variant="body" className="opacity-80">
                          Experience elegant French-inspired design
                        </LumiereTypography>
                        <div className="space-y-3">
                          <LumiereButton variant="primary" className="w-full">
                            Sign In
                          </LumiereButton>
                          <LumiereButton variant="secondary" className="w-full">
                            Create Account
                          </LumiereButton>
                        </div>
                      </div>
                      
                      <LumiereTabBar
                        items={tabItems}
                        activeItem={activeTab}
                        onItemClick={setActiveTab}
                      />
                    </LumiereMobileContent>
                  </LumiereMobile>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}