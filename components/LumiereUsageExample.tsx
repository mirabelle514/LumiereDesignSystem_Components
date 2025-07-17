import React from 'react';

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
  type LumiereTabItem
} from './lumiere';

/**
 * Example usage of Lumiere components
 * This shows how to import and use the components in your own projects
 */
export function LumiereUsageExample() {
  const [activeTab, setActiveTab] = React.useState('home');
  const [darkMode, setDarkMode] = React.useState(false);

  const tabItems: LumiereTabItem[] = [
  { id: 'home', icon: undefined, label: 'Home' },
  { id: 'favorites', icon: undefined, label: 'Favorites' },
  { id: 'cart', icon: undefined, label: 'Cart' }
];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Example */}
        <div className="text-center space-y-4">
          <LumiereTypography variant="h1">
            Boutique Lumière
          </LumiereTypography>
          <LumiereTypography variant="body" className="text-xl">
            French elegance meets modern design
          </LumiereTypography>
        </div>

        {/* Form Example */}
        <LumiereCard variant="featured" className="max-w-md mx-auto">
          <LumiereCardHeader>
            <LumiereCardTitle>Newsletter Subscription</LumiereCardTitle>
          </LumiereCardHeader>
          <LumiereCardContent className="space-y-4">
            <LumiereInput
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              helperText="Join our exclusive newsletter"
            />
            <LumiereToggle
              label="Dark Mode"
              description="Toggle dark theme"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <LumiereButton variant="primary" className="w-full">
              Subscribe
            </LumiereButton>
          </LumiereCardContent>
        </LumiereCard>

        {/* Navigation Example */}
        <div className="flex justify-center">
          <LumiereTabBar
            items={tabItems}
            activeItem={activeTab}
            onItemClick={setActiveTab}
            className="max-w-sm"
          />
        </div>

        {/* Product Grid Example */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LumiereCard variant="standard">
            <LumiereCardHeader>
              <LumiereCardTitle>Parisian Scarf</LumiereCardTitle>
            </LumiereCardHeader>
            <LumiereCardContent>
              <LumiereTypography variant="body" className="mb-4">
                Elegant silk scarf with hand-painted floral patterns
              </LumiereTypography>
              <LumiereButton variant="secondary" size="sm">
                View Details
              </LumiereButton>
            </LumiereCardContent>
          </LumiereCard>

          <LumiereCard variant="standard">
            <LumiereCardHeader>
              <LumiereCardTitle>Vintage Perfume</LumiereCardTitle>
            </LumiereCardHeader>
            <LumiereCardContent>
              <LumiereTypography variant="body" className="mb-4">
                Classic French fragrance with notes of jasmine and rose
              </LumiereTypography>
              <LumiereButton variant="secondary" size="sm">
                View Details
              </LumiereButton>
            </LumiereCardContent>
          </LumiereCard>

          <LumiereCard variant="elevated">
            <LumiereCardHeader>
              <LumiereCardTitle>Featured: Gold Jewelry</LumiereCardTitle>
            </LumiereCardHeader>
            <LumiereCardContent>
              <LumiereTypography variant="body" className="mb-4">
                Handcrafted 18k gold necklace with antique finish
              </LumiereTypography>
              <LumiereButton variant="primary" size="sm">
                Shop Now
              </LumiereButton>
            </LumiereCardContent>
          </LumiereCard>
        </div>

      </div>
    </div>
  );
}

// Code example for importing components:
/*
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
  type LumiereTabItem
} from './components/lumiere';

// Basic button usage
<LumiereButton variant="primary" size="md">
  Click me
</LumiereButton>

// Input with label and helper text
<LumiereInput
  label="Email"
  placeholder="Enter email"
  helperText="We'll never share your email"
/>

// Card with content
<LumiereCard variant="featured">
  <LumiereCardHeader>
    <LumiereCardTitle>Card Title</LumiereCardTitle>
  </LumiereCardHeader>
  <LumiereCardContent>
    Card content goes here
  </LumiereCardContent>
</LumiereCard>
*/