import React from 'react';
import { cn } from './utils.js';
import { 
  LumiereButton, 
  LumiereInput, 
  LumiereTextarea,
  LumiereCard, 
  LumiereCardHeader, 
  LumiereCardTitle, 
  LumiereCardContent,
  LumiereToggle,
  LumiereTabBar,
  LumiereTypography,
  LumiereColorPalette,
  type LumiereTabItem
} from './index';

export interface LumiereShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  showColorPalette?: boolean;
  showTypography?: boolean;
  showButtons?: boolean;
  showFormElements?: boolean;
  showCards?: boolean;
  showTabBar?: boolean;
}

// Mock icons for tab bar
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const tabItems: LumiereTabItem[] = [
  { id: 'home', icon: HomeIcon, label: 'Home' },
  { id: 'profile', icon: UserIcon, label: 'Profile' },
  { id: 'settings', icon: SettingsIcon, label: 'Settings' }
];

export const LumiereShowcase: React.FC<LumiereShowcaseProps> = ({
  className,
  showColorPalette = true,
  showTypography = true,
  showButtons = true,
  showFormElements = true,
  showCards = true,
  showTabBar = true,
  ...props
}) => {
  return (
    <div className={cn("min-h-screen bg-ivory-white p-6", className)} {...props}>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <LumiereTypography variant="h1" className="text-center mb-4">
          Lumière Design System
        </LumiereTypography>
        <LumiereTypography variant="body" className="text-center text-parisian-navy/70">
          A French-inspired design system for modern web applications
        </LumiereTypography>
      </div>

      {/* Color Palette */}
      {showColorPalette && (
        <div className="max-w-7xl mx-auto mb-12">
          <LumiereTypography variant="h2" className="mb-6">
            Color Palette
          </LumiereTypography>
          <LumiereColorPalette />
        </div>
      )}

      {/* Typography */}
      {showTypography && (
        <div className="max-w-7xl mx-auto mb-12">
          <LumiereTypography variant="h2" className="mb-6">
            Typography
          </LumiereTypography>
          <div className="space-y-4">
            <LumiereTypography variant="h1">Heading 1 - Playfair Display</LumiereTypography>
            <LumiereTypography variant="h2">Heading 2 - Playfair Display</LumiereTypography>
            <LumiereTypography variant="h3">Heading 3 - Playfair Display</LumiereTypography>
            <LumiereTypography variant="body">Body text - Open Sans. This is the default body text style used throughout the application.</LumiereTypography>
            <LumiereTypography variant="caption">Caption text - Open Sans. Used for small, secondary information.</LumiereTypography>
          </div>
        </div>
      )}

      {/* Buttons */}
      {showButtons && (
        <div className="max-w-7xl mx-auto mb-12">
          <LumiereTypography variant="h2" className="mb-6">
            Buttons
          </LumiereTypography>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <LumiereButton variant="primary">Primary</LumiereButton>
              <LumiereButton variant="secondary">Secondary</LumiereButton>
              <LumiereButton variant="tertiary">Tertiary</LumiereButton>
              <LumiereButton variant="destructive">Destructive</LumiereButton>
            </div>
            <div className="flex flex-wrap gap-4">
              <LumiereButton variant="primary" size="sm">Small</LumiereButton>
              <LumiereButton variant="primary" size="md">Medium</LumiereButton>
              <LumiereButton variant="primary" size="lg">Large</LumiereButton>
            </div>
          </div>
        </div>
      )}

      {/* Form Elements */}
      {showFormElements && (
        <div className="max-w-7xl mx-auto mb-12">
          <LumiereTypography variant="h2" className="mb-6">
            Form Elements
          </LumiereTypography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <LumiereTextarea
                label="Message"
                placeholder="Enter your message"
                rows={4}
                helperText="Maximum 500 characters"
              />
              <LumiereToggle
                label="Subscribe to newsletter"
                description="Get updates about new features"
              />
            </div>
            
            <div className="space-y-4">
              <LumiereInput
                label="Full Name"
                placeholder="Enter your full name"
                required
              />
              <LumiereInput
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
              />
              <LumiereInput
                label="Disabled Input"
                placeholder="This input is disabled"
                disabled
              />
              <LumiereToggle
                label="I agree to the terms"
                description="Required to proceed"
              />
            </div>
          </div>
        </div>
      )}

      {/* Cards */}
      {showCards && (
        <div className="max-w-7xl mx-auto mb-12">
          <LumiereTypography variant="h2" className="mb-6">
            Cards
          </LumiereTypography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LumiereCard variant="standard">
              <LumiereCardContent>
                <LumiereTypography variant="h3" className="mb-2">Standard Card</LumiereTypography>
                <LumiereTypography variant="body">
                  Simple and clean design for basic content presentation.
                </LumiereTypography>
              </LumiereCardContent>
            </LumiereCard>
            
            <LumiereCard variant="featured">
              <LumiereCardHeader>
                <LumiereCardTitle>Featured Card</LumiereCardTitle>
              </LumiereCardHeader>
              <LumiereCardContent>
                <LumiereTypography variant="body">
                  Enhanced styling with header and title for important content.
                </LumiereTypography>
              </LumiereCardContent>
            </LumiereCard>
            
            <LumiereCard variant="elevated">
              <LumiereCardHeader>
                <LumiereCardTitle>Elevated Card</LumiereCardTitle>
              </LumiereCardHeader>
              <LumiereCardContent>
                <LumiereTypography variant="body">
                  Premium styling with enhanced shadows for premium content.
                </LumiereTypography>
              </LumiereCardContent>
            </LumiereCard>
          </div>
        </div>
      )}

      {/* Tab Bar */}
      {showTabBar && (
        <div className="max-w-7xl mx-auto mb-12">
          <LumiereTypography variant="h2" className="mb-6">
            Tab Bar
          </LumiereTypography>
          <LumiereTabBar
            items={tabItems}
            activeItem="home"
            className="max-w-md"
          />
        </div>
      )}

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto">
        <LumiereCard variant="featured">
          <LumiereCardHeader>
            <LumiereCardTitle>Contact Us</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LumiereInput
                label="Full Name"
                placeholder="Enter your full name"
                required
              />
              <LumiereInput
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <LumiereTextarea
              label="Message"
              placeholder="Enter your message"
              rows={4}
              required
            />
            <div className="flex gap-3">
              <LumiereButton variant="primary" className="flex-1">
                Send Message
              </LumiereButton>
              <LumiereButton variant="tertiary">
                Cancel
              </LumiereButton>
            </div>
          </LumiereCardContent>
        </LumiereCard>
      </div>
    </div>
  );
};

LumiereShowcase.displayName = 'LumiereShowcase'; 