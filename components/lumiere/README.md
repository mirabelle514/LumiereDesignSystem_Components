# Lumière Component Library

A French-inspired design system built with React, TypeScript, and Tailwind CSS. Created for [The Wednesday Projects](https://thewednesdayprojects.com/).

## 🎨 Design Philosophy

Lumière brings elegant French design principles to modern web applications with:
- **Sophisticated Color Palette**: Ivory White, Parisian Navy, Antique Gold, Burgundy, Sage Green, and Dove Grey
- **Premium Typography**: Playfair Display for headings, Open Sans for body text
- **Refined Interactions**: Smooth animations and micro-interactions
- **Mobile-First Design**: Responsive components optimized for all devices

## 📦 Components

### Buttons
- **LumiereButton**: Primary, secondary, tertiary, and destructive variants
- Multiple sizes (sm, md, lg)
- Smooth hover animations and focus states

### Form Elements
- **LumiereInput**: Text input with label, error, and helper text support
- **LumiereTextarea**: Multi-line input with same features as input
- **LumiereToggle**: Custom toggle switch with label and description

### Layout & Content
- **LumiereCard**: Standard, featured, and elevated card variants
- **LumiereCardHeader, LumiereCardTitle, LumiereCardContent**: Card composition components
- **LumiereTypography**: Semantic typography component with multiple variants

### Navigation
- **LumiereTabBar**: Mobile-optimized tab navigation with icons
- **LumiereMobile**: Mobile device mockup container

### Design System
- **LumiereColorSwatch**: Color palette documentation component

## 🚀 Installation & Usage

### 1. Copy the Component Files

Copy the entire `/components/lumiere/` directory to your project:

```
your-project/
└── components/
    └── lumiere/
        ├── LumiereButton.tsx
        ├── LumiereInput.tsx
        ├── LumiereTextarea.tsx
        ├── LumiereCard.tsx
        ├── LumiereToggle.tsx
        ├── LumiereTabBar.tsx
        ├── LumiereMobile.tsx
        ├── LumiereColorSwatch.tsx
        ├── LumiereTypography.tsx
        ├── index.ts
        └── README.md
```

### 2. Copy the CSS Theme

Add the Lumière theme to your global CSS file:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap');

:root {
  /* Lumiere Color Palette */
  --ivory-white: #FAF8F3;
  --parisian-navy: #22304A;
  --antique-gold: #C6A664;
  --burgundy: #7C3048;
  --sage-green: #A6B89A;
  --dove-grey: #E5E2DD;
  
  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Open Sans', sans-serif;
  --font-accent: 'Open Sans', sans-serif;
  
  /* Semantic Color Mapping */
  --background: var(--ivory-white);
  --foreground: var(--parisian-navy);
  --primary: var(--antique-gold);
  --secondary: var(--sage-green);
  --muted: var(--dove-grey);
  --destructive: var(--burgundy);
  --border: var(--antique-gold);
  --input-background: var(--dove-grey);
  --ring: var(--antique-gold);
}

/* Add utility classes */
.font-heading { font-family: var(--font-heading); }
.font-body { font-family: var(--font-body); }
.font-accent { font-family: var(--font-accent); font-style: italic; }
.shadow-card { box-shadow: 0px 4px 16px rgba(198, 166, 100, 0.1); }
.shadow-soft { box-shadow: 0px 2px 8px rgba(34, 48, 74, 0.12); }
```

### 3. Import and Use Components

```tsx
import { 
  LumiereButton, 
  LumiereInput, 
  LumiereCard, 
  LumiereCardHeader, 
  LumiereCardTitle, 
  LumiereCardContent,
  LumiereTabBar,
  LumiereToggle,
  LumiereTypography,
  LUMIERE_COLORS,
  type LumiereTabItem
} from './components/lumiere';

export function MyComponent() {
  return (
    <div className="p-6">
      <LumiereTypography variant="h1" className="mb-4">
        Welcome to Lumière
      </LumiereTypography>
      
      <LumiereCard variant="featured" className="max-w-md">
        <LumiereCardHeader>
          <LumiereCardTitle>Contact Form</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent className="space-y-4">
          <LumiereInput
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            helperText="We'll never share your email"
          />
          <LumiereToggle
            label="Subscribe to newsletter"
            description="Get updates about new features"
          />
          <LumiereButton variant="primary" className="w-full">
            Submit
          </LumiereButton>
        </LumiereCardContent>
      </LumiereCard>
    </div>
  );
}
```

## 🎯 Component Examples

### Button Variants
```tsx
<LumiereButton variant="primary">Primary Action</LumiereButton>
<LumiereButton variant="secondary">Secondary Action</LumiereButton>
<LumiereButton variant="tertiary">Tertiary Action</LumiereButton>
<LumiereButton variant="destructive">Delete</LumiereButton>
```

### Form with Validation
```tsx
<form className="space-y-4">
  <LumiereInput
    label="Full Name"
    placeholder="Enter your name"
    required
  />
  <LumiereInput
    label="Email"
    type="email"
    placeholder="Enter your email"
    error="Please enter a valid email address"
  />
  <LumiereTextarea
    label="Message"
    placeholder="Enter your message"
    rows={4}
    helperText="Maximum 500 characters"
  />
  <LumiereToggle
    label="I agree to the terms"
    description="Required to proceed"
  />
  <LumiereButton type="submit" variant="primary" className="w-full">
    Submit Form
  </LumiereButton>
</form>
```

### Mobile Navigation
```tsx
const tabItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'profile', icon: User, label: 'Profile' },
  { id: 'settings', icon: Settings, label: 'Settings' }
];

<LumiereTabBar
  items={tabItems}
  activeItem={activeTab}
  onItemClick={setActiveTab}
/>
```

## 🎨 Color Palette

Access the color constants:

```tsx
import { LUMIERE_COLORS } from './components/lumiere';

// Use in styles
const customStyle = {
  backgroundColor: LUMIERE_COLORS.ivoryWhite,
  color: LUMIERE_COLORS.parisianNavy,
  borderColor: LUMIERE_COLORS.antiqueGold
};
```

**Available Colors:**
- `ivoryWhite`: #FAF8F3
- `parisianNavy`: #22304A  
- `antiqueGold`: #C6A664 (borders & accents only)
- `burgundy`: #7C3048
- `sageGreen`: #A6B89A
- `doveGrey`: #E5E2DD

## 📱 Responsive Design

All components are mobile-first and fully responsive:

```tsx
<LumiereCard variant="featured" className="w-full md:w-1/2 lg:w-1/3">
  <LumiereCardContent>
    This card adapts to different screen sizes
  </LumiereCardContent>
</LumiereCard>
```

## ♿ Accessibility

- All components support ARIA attributes
- Keyboard navigation included
- Focus states clearly visible
- Color contrast meets WCAG standards

## 🔧 Dependencies

- React 18+
- Tailwind CSS 3.3+
- A `cn` utility function for class merging (from clsx + tailwind-merge)

## 📄 License

Created for [The Wednesday Projects](https://thewednesdayprojects.com/). Please refer to original design system at [lumieredesignsystem.com](https://lumieredesignsystem.com/).

## 🤝 Contributing

This component library is designed to be a complete, production-ready solution. For modifications or extensions, please maintain the French elegance and design principles that define the Lumière system.