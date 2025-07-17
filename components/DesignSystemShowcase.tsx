import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Home, User, Settings, Square, Sun, Moon } from "lucide-react";
import { useState } from "react";

export function DesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const lumiereColors = [
    { 
      name: 'Ivory White', 
      hex: '#FAF8F3', 
      style: { backgroundColor: '#FAF8F3', color: '#22304A' }
    },
    { 
      name: 'Parisian Navy', 
      hex: '#22304A', 
      style: { backgroundColor: '#22304A', color: '#FAF8F3' }
    },
    { 
      name: 'Antique Gold', 
      hex: '#C6A664', 
      note: 'Borders & accents only',
      style: { backgroundColor: '#C6A664', color: '#22304A' }
    },
    { 
      name: 'Burgundy', 
      hex: '#7C3048', 
      style: { backgroundColor: '#7C3048', color: '#FAF8F3' }
    },
    { 
      name: 'Sage Green', 
      hex: '#A6B89A', 
      style: { backgroundColor: '#A6B89A', color: '#22304A' }
    },
    { 
      name: 'Dove Grey', 
      hex: '#E5E2DD', 
      style: { backgroundColor: '#E5E2DD', color: '#22304A' }
    }
  ];

  const tabItems = [
    { icon: Home, active: activeTab === 0 },
    { icon: User, active: activeTab === 1 },
    { icon: Settings, active: activeTab === 2 },
    { icon: Square, active: activeTab === 3 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="text-center py-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-2">
            Lumière
          </h1>
          <p className="text-xl font-semibold text-foreground mb-2">
            Design System for{' '}
            <a 
              href="https://thewednesdayprojects.com/" 
              className="text-foreground underline hover:text-destructive transition-colors"
            >
              The Wednesday Projects
            </a>
          </p>
          <p className="text-lg text-foreground opacity-80">
            Elegant French-inspired mobile app design kit
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleDarkMode}
            className="mt-4"
          >
            {isDark ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
            Toggle Theme
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Color Palette Section */}
        <Card className="border-primary shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
              Color Palette
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lumiereColors.map((color) => (
                <div key={color.name} className="text-center border border-primary rounded-lg overflow-hidden">
                  <div 
                    className="h-24 w-full flex items-center justify-center"
                    style={color.style}
                  >
                    <div>
                      <div className="font-heading font-bold">{color.name}</div>
                      <div className="font-mono text-sm opacity-70">{color.hex}</div>
                    </div>
                  </div>
                  <div className="p-3 bg-card">
                    {color.note && (
                      <small className="text-muted-foreground">{color.note}</small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Typography Section */}
        <Card className="border-primary shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
              Typography
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { 
                  element: 'h1', 
                  text: 'Heading 1 - Playfair Display Bold',
                  description: '32pt, Bold - For main titles and hero text',
                  className: 'text-4xl font-heading font-bold'
                },
                { 
                  element: 'h2', 
                  text: 'Heading 2 - Playfair Display Bold',
                  description: '24pt, Bold - For section titles',
                  className: 'text-2xl font-heading font-bold'
                },
                { 
                  element: 'h3', 
                  text: 'Heading 3 - Playfair Display Regular',
                  description: '18pt, Regular - For subsections',
                  className: 'text-xl font-heading'
                },
                { 
                  element: 'p', 
                  text: 'Body Text - Open Sans Regular',
                  description: '16pt, Regular - For general content and descriptions',
                  className: 'text-base font-body'
                },
                { 
                  element: 'small', 
                  text: 'Caption Text - Open Sans Regular',
                  description: '12pt, Regular - For small text and labels',
                  className: 'text-sm font-body'
                },
                { 
                  element: 'em', 
                  text: 'Accent Text - Open Sans Italic',
                  description: '20pt, Italic - For elegant emphasis and subtle decorative elements',
                  className: 'text-xl font-accent'
                }
              ].map((typo) => (
                <div key={typo.element} className="p-4 bg-muted border-l-4 border-primary rounded-r-lg">
                  <div className={typo.className}>{typo.text}</div>
                  <small className="text-muted-foreground">{typo.description}</small>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Buttons Section */}
        <Card className="border-primary shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
              Buttons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h4 className="font-heading">Primary Button</h4>
                <Button 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-heading font-bold"
                  size="lg"
                >
                  Get Started
                </Button>
                <small className="text-muted-foreground">Navy background, white text - Primary actions</small>
              </div>
              <div className="space-y-3">
                <h4 className="font-heading">Secondary Button</h4>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary bg-background text-foreground hover:bg-foreground hover:text-background font-heading font-bold"
                  size="lg"
                >
                  Learn More
                </Button>
                <small className="text-muted-foreground">Gold border, ivory background - Secondary actions</small>
              </div>
              <div className="space-y-3">
                <h4 className="font-heading">Tertiary Button</h4>
                <Button 
                  variant="ghost" 
                  className="w-full text-foreground underline hover:text-destructive font-heading font-bold"
                  size="lg"
                >
                  Cancel
                </Button>
                <small className="text-muted-foreground">Text only - Tertiary actions</small>
              </div>
              <div className="space-y-3">
                <h4 className="font-heading">Disabled Button</h4>
                <Button 
                  disabled
                  className="w-full bg-muted text-muted-foreground cursor-not-allowed font-heading font-bold"
                  size="lg"
                >
                  Disabled
                </Button>
                <small className="text-muted-foreground">Grey background - Inactive state</small>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input Fields Section */}
        <Card className="border-primary shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
              Input Fields
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-md space-y-4">
              <div>
                <label className="block font-heading text-sm text-foreground mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-3 bg-input-background border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-body"
                />
              </div>
              <div>
                <label className="block font-heading text-sm text-foreground mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-3 bg-input-background border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-body"
                />
              </div>
              <div>
                <label className="block font-heading text-sm text-foreground mb-1">Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full px-3 py-3 bg-input-background border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none font-body"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="font-heading text-sm text-foreground">Enable Notifications</label>
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-14 h-8 bg-muted rounded-full cursor-pointer">
                    <div className="w-6 h-6 bg-background rounded-full mt-1 ml-1 transition-transform"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <Card className="border-primary shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
              Cards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary shadow-card hover:transform hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Standard Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground opacity-80 font-body">
                    This is a standard card component with ivory background and gold border. Perfect for content sections and information display.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary bg-gradient-to-br from-background to-muted shadow-card hover:transform hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Featured Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground opacity-80 font-body">
                    This is a featured card with gradient background and enhanced styling. Use for highlighting important content or premium features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Section */}
        <Card className="border-primary shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
              Navigation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h4 className="font-heading">Tab Bar</h4>
              <div className="bg-foreground rounded-lg p-2 flex justify-around items-center max-w-xs mx-auto">
                {tabItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`p-2 rounded-lg transition-all relative ${
                      item.active 
                        ? 'text-background bg-white/10' 
                        : 'text-muted hover:text-background'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.active && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-5 h-0.5 bg-background rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
              <small className="text-muted-foreground block text-center">
                Navy background with white active indicators for better contrast
              </small>
            </div>
          </CardContent>
        </Card>

        {/* Modal Section */}
        <Card className="border-primary shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
              Modal Example
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-xs mx-auto bg-background border border-primary rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-destructive text-destructive-foreground p-4 text-center">
                <h3 className="font-heading text-lg">Confirmation</h3>
              </div>
              <div className="p-4 text-center space-y-4">
                <p className="text-foreground font-body">
                  Are you sure you want to delete this item? This action cannot be undone.
                </p>
                <div className="space-y-2">
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-heading font-bold">
                    Delete
                  </Button>
                  <Button variant="outline" className="w-full border-primary bg-background text-foreground hover:bg-foreground hover:text-background font-heading font-bold">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile App Example */}
        <Card className="border-primary shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
              Mobile App Example
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-6 rounded-lg">
              <div className="w-80 h-[600px] bg-foreground rounded-[30px] p-2 mx-auto shadow-2xl">
                <div className="bg-background h-full rounded-[20px] p-6 flex flex-col justify-between">
                  <div className="text-center space-y-6 mt-16">
                    <h4 className="font-heading text-xl text-foreground">Welcome to Lumière</h4>
                    <p className="text-foreground opacity-80 font-body">
                      Experience elegant French-inspired design
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-heading font-bold">
                        Sign In
                      </Button>
                      <Button variant="outline" className="w-full border-primary bg-background text-foreground hover:bg-foreground hover:text-background font-heading font-bold">
                        Create Account
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-foreground rounded-lg p-2 flex justify-around items-center">
                    {tabItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`p-2 rounded-lg transition-all relative ${
                          item.active 
                            ? 'text-background bg-white/10' 
                            : 'text-muted hover:text-background'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        {item.active && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-5 h-0.5 bg-background rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card className="border-primary shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-2xl border-b-2 border-primary pb-2">
              Usage Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading text-foreground mb-2">Accessibility</h4>
                <p className="font-body">All components meet WCAG 2.1 AA standards with proper contrast ratios and keyboard navigation support.</p>
              </div>
              <div>
                <h4 className="font-heading text-foreground mb-2">Spacing</h4>
                <p className="font-body">Use the 8px grid system: 4px, 8px, 16px, 24px, 32px for consistent spacing throughout the interface.</p>
              </div>
              <div>
                <h4 className="font-heading text-foreground mb-2">Colors</h4>
                <p className="font-body">Use Parisian Navy for primary text and White for text on dark backgrounds. Antique Gold is ONLY for thin borders and decorative elements - never for text. Use Burgundy or Navy for hover states and accents.</p>
              </div>
              <div>
                <h4 className="font-heading text-foreground mb-2">Typography</h4>
                <p className="font-body">Playfair Display for headings creates elegance, Open Sans ensures readability for body text, and Open Sans Italic provides subtle emphasis for accent elements.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}