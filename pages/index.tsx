import React from 'react';
import { LumiereTypography } from '../components/lumiere';

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <LumiereTypography variant="h1" className="mb-4">
            Lumière Design System
          </LumiereTypography>
          <LumiereTypography variant="body" className="text-parisian-navy/70">
            A French-inspired design system for modern web applications
          </LumiereTypography>
        </div>

        <div className="bg-ivory-white p-8 rounded-xl border border-antique-gold shadow-card">
          <LumiereTypography variant="h2" className="mb-6">
            Welcome to Lumière
          </LumiereTypography>
          <LumiereTypography variant="body" className="mb-4">
            This is the Lumière Design System, a collection of elegant, French-inspired React components 
            built specifically for creating beautiful, consistent user interfaces.
          </LumiereTypography>
          <LumiereTypography variant="body" className="mb-6">
            To explore all components and their documentation, run <code className="bg-dove-grey px-2 py-1 rounded">npm run storybook</code> 
            and visit <a href="http://localhost:6006" className="text-antique-gold hover:underline">http://localhost:6006</a>.
          </LumiereTypography>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <LumiereTypography variant="h3" className="mb-2">🎨</LumiereTypography>
              <LumiereTypography variant="h4" className="mb-2">French Design</LumiereTypography>
              <LumiereTypography variant="caption">
                Sophisticated color palette and typography
              </LumiereTypography>
            </div>
            <div className="text-center">
              <LumiereTypography variant="h3" className="mb-2">⚡</LumiereTypography>
              <LumiereTypography variant="h4" className="mb-2">React Components</LumiereTypography>
              <LumiereTypography variant="caption">
                TypeScript components with full documentation
              </LumiereTypography>
            </div>
            <div className="text-center">
              <LumiereTypography variant="h3" className="mb-2">📚</LumiereTypography>
              <LumiereTypography variant="h4" className="mb-2">Storybook</LumiereTypography>
              <LumiereTypography variant="caption">
                Interactive documentation and testing
              </LumiereTypography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
