# Lumiere Design System

A French-inspired React component library for building elegant, consistent UIs. Built with React, TypeScript, Tailwind CSS, and Storybook.

## Features
- **French-inspired design** with sophisticated color palette and typography
- **Custom React components** built specifically for your brand
- **Tailwind CSS** utility classes for rapid styling
- **Storybook** for interactive component documentation and development
- **TypeScript** for type safety and better developer experience
- **Accessible components** with proper ARIA attributes and keyboard navigation

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run Storybook
```bash
npm run storybook
```
Visit [http://localhost:6006](http://localhost:6006) (or next available port) to view and test all components.

### 3. Run Next.js Dev Server
```bash
npm run dev
```

## Components
All components are in `components/lumiere/` and are written in TypeScript. Each has a corresponding `.stories.tsx` file for Storybook usage.

### Core Components
- **LumiereButton** - Primary, secondary, tertiary, and destructive variants
- **LumiereInput** - Text input with label, error, and helper text support
- **LumiereTextarea** - Multi-line input with same features as input
- **LumiereCard** - Standard, featured, and elevated card variants
- **LumiereToggle** - Custom toggle switch with label and description
- **LumiereTabBar** - Mobile-optimized tab navigation with icons
- **LumiereTypography** - Semantic typography component with multiple variants
- **LumiereColorSwatch** - Color palette documentation component
- **LumiereMobile** - Mobile device mockup container

### Design System
- **Color Palette**: Ivory White, Parisian Navy, Antique Gold, Burgundy, Sage Green, Dove Grey
- **Typography**: Playfair Display for headings, Open Sans for body text
- **Spacing**: Consistent spacing system with Tailwind CSS
- **Shadows**: Custom shadow system for depth and elegance

## Development
- Modify or add components in `components/lumiere/`.
- Add new stories in the same folder using `ComponentName.stories.tsx`.
- Use `npm run storybook` for interactive development.
- All components follow the French-inspired design language.

## Contributing
1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License
MIT

---

**Lumiere Design System** — French-inspired elegance for modern web applications.
