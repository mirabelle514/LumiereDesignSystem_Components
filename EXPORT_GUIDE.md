# Lumière Component Library - Export Guide

This guide explains how to export and use the Lumière Component Library in other projects.

## Quick Export Steps

### Option 1: Copy Individual Files

1. **Copy the component directory:**
   ```
   /components/lumiere/ → your-project/src/components/lumiere/
   ```

2. **Copy the CSS theme:**
   ```
   /styles/globals.css → your-project/src/styles/lumiere-theme.css
   ```

3. **Install dependencies:**
   ```bash
   npm install clsx tailwind-merge lucide-react
   ```

4. **Import and use:**
   ```tsx
   import { LumiereButton, LumiereCard } from './components/lumiere';
   ```

### Option 2: Create NPM Package

1. **Create package.json in `/components/lumiere/`:**
   ```json
   {
     "name": "@the-wednesday-projects/lumiere-components",
     "version": "1.0.0",
     "main": "index.js",
     "module": "index.js",
     "types": "index.d.ts",
     "files": ["*.tsx", "*.ts", "index.js", "index.d.ts"],
     "peerDependencies": {
       "react": ">=18.0.0",
       "react-dom": ">=18.0.0"
     },
     "dependencies": {
       "clsx": "^2.0.0",
       "tailwind-merge": "^2.0.0",
       "lucide-react": "^0.400.0"
     }
   }
   ```

2. **Build and publish:**
   ```bash
   cd components/lumiere
   npm publish
   ```

## CSS Setup in Target Project

### For Tailwind CSS Projects

Add to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // your existing content paths
    "./node_modules/@yourorg/lumiere-components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'ivory-white': '#FAF8F3',
        'parisian-navy': '#22304A',
        'antique-gold': '#C6A664',
        'burgundy': '#7C3048',
        'sage-green': '#A6B89A',
        'dove-grey': '#E5E2DD',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Open Sans', 'sans-serif'],
        'accent': ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 4px 16px rgba(198, 166, 100, 0.1)',
        'soft': '0px 2px 8px rgba(34, 48, 74, 0.12)',
      }
    }
  }
}
```

### For Regular CSS Projects

Copy this CSS to your main stylesheet:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap');

:root {
  --ivory-white: #FAF8F3;
  --parisian-navy: #22304A;
  --antique-gold: #C6A664;
  --burgundy: #7C3048;
  --sage-green: #A6B89A;
  --dove-grey: #E5E2DD;
  
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Open Sans', sans-serif;
  
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

.font-heading { font-family: var(--font-heading); }
.font-body { font-family: var(--font-body); }
.shadow-card { box-shadow: 0px 4px 16px rgba(198, 166, 100, 0.1); }
.shadow-soft { box-shadow: 0px 2px 8px rgba(34, 48, 74, 0.12); }
```

## File Structure After Export

Your target project should look like this:

```
your-project/
├── src/
│   ├── components/
│   │   └── lumiere/           # Copied from this project
│   │       ├── LumiereButton.tsx
│   │       ├── LumiereCard.tsx
│   │       ├── LumiereInput.tsx
│   │       ├── LumiereTextarea.tsx
│   │       ├── LumiereToggle.tsx
│   │       ├── LumiereTabBar.tsx
│   │       ├── LumiereMobile.tsx
│   │       ├── LumiereColorSwatch.tsx
│   │       ├── LumiereTypography.tsx
│   │       ├── index.ts
│   │       └── README.md
│   ├── utils/
│   │   └── cn.ts             # Add this utility
│   └── styles/
│       └── lumiere-theme.css # Copied CSS theme
├── package.json
└── tailwind.config.js
```

## Required Utility Function

Create `/src/utils/cn.ts`:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Update imports in component files to match your project structure:

```typescript
// Change this:
import { cn } from '../ui/utils';

// To this:
import { cn } from '../../utils/cn';
```

## Usage Examples

### Basic Usage
```tsx
import { LumiereButton, LumiereCard, LumiereInput } from './components/lumiere';

export function App() {
  return (
    <div className="p-6">
      <LumiereCard variant="featured">
        <LumiereInput label="Email" placeholder="your@email.com" />
        <LumiereButton variant="primary">Submit</LumiereButton>
      </LumiereCard>
    </div>
  );
}
```

### Advanced Form
```tsx
import { 
  LumiereCard, 
  LumiereCardHeader, 
  LumiereCardTitle, 
  LumiereCardContent,
  LumiereInput, 
  LumiereTextarea, 
  LumiereToggle, 
  LumiereButton 
} from './components/lumiere';

export function ContactForm() {
  return (
    <LumiereCard variant="elevated" className="max-w-md mx-auto">
      <LumiereCardHeader>
        <LumiereCardTitle>Get in Touch</LumiereCardTitle>
      </LumiereCardHeader>
      <LumiereCardContent className="space-y-4">
        <LumiereInput
          label="Full Name"
          placeholder="Enter your name"
          required
        />
        <LumiereInput
          label="Email Address"
          type="email"
          placeholder="your@email.com"
          helperText="We'll never share your email"
        />
        <LumiereTextarea
          label="Message"
          placeholder="Tell us about your project"
          rows={4}
        />
        <LumiereToggle
          label="Subscribe to updates"
          description="Get notified about new features"
        />
        <LumiereButton variant="primary" className="w-full">
          Send Message
        </LumiereButton>
      </LumiereCardContent>
    </LumiereCard>
  );
}
```

## Customization

### Overriding Colors
```tsx
// Use CSS custom properties
<LumiereButton 
  style={{ '--primary': '#your-color' }}
  variant="primary"
>
  Custom Color Button
</LumiereButton>
```

### Extending Components
```tsx
import { LumiereButton } from './components/lumiere';

export function MyCustomButton({ children, ...props }) {
  return (
    <LumiereButton 
      className="my-custom-styles" 
      {...props}
    >
      {children}
    </LumiereButton>
  );
}
```

## Troubleshooting

### Common Issues

1. **"cn is not defined" error:**
   - Make sure you've created the `cn` utility function
   - Update import paths in component files

2. **Styles not applying:**
   - Verify Tailwind CSS is configured properly
   - Check that the Lumière theme CSS is imported
   - Ensure Google Fonts are loading

3. **Type errors:**
   - Install `@types/react` and `@types/react-dom`
   - Make sure TypeScript is configured

4. **Missing icons:**
   - Install `lucide-react`: `npm install lucide-react`

### Support

For issues with the original design system, refer to:
- [Lumière Design System](https://lumieredesignsystem.com/)
- [The Wednesday Projects](https://thewednesdayprojects.com/)

## Checklist for Export

- [ ] Copy `/components/lumiere/` directory
- [ ] Copy CSS theme and fonts
- [ ] Install dependencies (`clsx`, `tailwind-merge`, `lucide-react`)
- [ ] Create `cn` utility function
- [ ] Update import paths if needed
- [ ] Configure Tailwind CSS
- [ ] Test components in target project
- [ ] Verify fonts are loading
- [ ] Check responsive behavior
- [ ] Test dark mode (if applicable)
