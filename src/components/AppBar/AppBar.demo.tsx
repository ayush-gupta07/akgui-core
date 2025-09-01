import React from 'react'
import { AppBar, type MenuItem, type ActionButton } from './AppBar'
import type { ComponentConfig } from '../../../playground/src/types/playground'

// Sample data
const sampleMenuItems: MenuItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

const sampleActions: ActionButton[] = [
  { id: 'login', label: 'Login', variant: 'ghost' },
  { id: 'signup', label: 'Sign Up', variant: 'primary' }
]

const logoIcon = (
  <div style={{ 
    width: '32px', 
    height: '32px', 
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)', 
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px'
  }}>
    A
  </div>
)

const userIcon = <span>👤</span>
const settingsIcon = <span>⚙️</span>

export const appBarConfig: ComponentConfig = {
  name: 'AppBar',
  description: 'A flexible navigation bar component with responsive design, customizable branding, menu items, and action buttons.',
  category: 'Navigation',
  examples: [
    {
      title: 'Basic AppBar',
      description: 'Simple app bar with title and navigation menu',
      component: (
        <AppBar
          title="AKGUI"
          menuItems={sampleMenuItems}
          activeItem="home"
        />
      ),
      code: `<AppBar
  title="AKGUI"
  menuItems={[
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]}
  activeItem="home"
/>`
    },
    {
      title: 'With Logo and Actions',
      description: 'App bar with custom logo and action buttons',
      component: (
        <AppBar
          logo={logoIcon}
          title="AKGUI"
          menuItems={sampleMenuItems}
          actions={sampleActions}
          activeItem="products"
        />
      ),
      code: `<AppBar
  logo={<CustomLogo />}
  title="AKGUI"
  menuItems={menuItems}
  actions={[
    { id: 'login', label: 'Login', variant: 'ghost' },
    { id: 'signup', label: 'Sign Up', variant: 'primary' }
  ]}
  activeItem="products"
/>`
    },
    {
      title: 'Elevated Variant',
      description: 'App bar with elevated styling (shadow effect)',
      component: (
        <AppBar
          logo={logoIcon}
          title="AKGUI"
          menuItems={sampleMenuItems}
          actions={sampleActions}
          variant="elevated"
          activeItem="about"
        />
      ),
      code: `<AppBar
  logo={logo}
  title="AKGUI"
  menuItems={menuItems}
  actions={actions}
  variant="elevated"
  activeItem="about"
/>`
    },
    {
      title: 'Sticky Positioning',
      description: 'App bar that sticks to the top when scrolling',
      component: (
        <div style={{ height: '200px', overflow: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          <AppBar
            logo={logoIcon}
            title="Sticky Header"
            menuItems={[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'analytics', label: 'Analytics' },
              { id: 'settings', label: 'Settings' }
            ]}
            actions={[
              { id: 'profile', label: 'Profile', variant: 'ghost', icon: userIcon }
            ]}
            position="sticky"
            variant="elevated"
            activeItem="dashboard"
          />
          <div style={{ padding: '2rem', height: '400px' }}>
            <h3>Scroll to see sticky behavior</h3>
            <p>This content is scrollable. The app bar will stick to the top of the container when you scroll.</p>
            <div style={{ height: '200px', background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)', marginTop: '1rem', borderRadius: '8px', padding: '1rem' }}>
              <p>More content here to demonstrate scrolling...</p>
            </div>
          </div>
        </div>
      ),
      code: `<AppBar
  logo={logo}
  title="Sticky Header"
  menuItems={menuItems}
  actions={actions}
  position="sticky"
  variant="elevated"
/>`
    },
    {
      title: 'With Icons in Actions',
      description: 'Action buttons with icons for better UX',
      component: (
        <AppBar
          logo={logoIcon}
          title="AKGUI"
          menuItems={[
            { id: 'home', label: 'Home' },
            { id: 'dashboard', label: 'Dashboard' }
          ]}
          actions={[
            { id: 'settings', label: 'Settings', variant: 'ghost', icon: settingsIcon },
            { id: 'profile', label: 'Profile', variant: 'primary', icon: userIcon }
          ]}
          activeItem="dashboard"
        />
      ),
      code: `<AppBar
  logo={logo}
  title="AKGUI"
  menuItems={menuItems}
  actions={[
    { 
      id: 'settings', 
      label: 'Settings', 
      variant: 'ghost', 
      icon: <SettingsIcon /> 
    },
    { 
      id: 'profile', 
      label: 'Profile', 
      variant: 'primary', 
      icon: <UserIcon /> 
    }
  ]}
/>`
    },
    {
      title: 'Minimal Brand Only',
      description: 'Simple app bar with only branding and actions',
      component: (
        <AppBar
          logo={logoIcon}
          title="Brand"
          actions={[
            { id: 'login', label: 'Login', variant: 'ghost' },
            { id: 'signup', label: 'Get Started', variant: 'primary' }
          ]}
        />
      ),
      code: `<AppBar
  logo={logo}
  title="Brand"
  actions={[
    { id: 'login', label: 'Login', variant: 'ghost' },
    { id: 'signup', label: 'Get Started', variant: 'primary' }
  ]}
/>`
    }
  ],
  documentation: {
    description: 'A comprehensive navigation bar component designed for modern web applications. Features responsive design, flexible positioning, customizable branding, and intuitive mobile experience.',
    props: [
      {
        name: 'logo',
        type: 'string | React.ReactNode',
        required: false,
        default: 'undefined',
        description: 'Logo image URL or custom React element to display in the brand section'
      },
      {
        name: 'title',
        type: 'string',
        required: false,
        default: 'undefined',
        description: 'Brand or application title displayed next to the logo'
      },
      {
        name: 'onBrandClick',
        type: '() => void',
        required: false,
        default: 'undefined',
        description: 'Callback function triggered when the brand section (logo/title) is clicked'
      },
      {
        name: 'menuItems',
        type: 'MenuItem[]',
        required: false,
        default: '[]',
        description: 'Array of navigation menu items with labels, actions, and states'
      },
      {
        name: 'activeItem',
        type: 'string',
        required: false,
        default: 'undefined',
        description: 'ID of the currently active menu item (highlighted)'
      },
      {
        name: 'onMenuItemClick',
        type: '(item: MenuItem) => void',
        required: false,
        default: 'undefined',
        description: 'Callback function triggered when a menu item is clicked'
      },
      {
        name: 'actions',
        type: 'ActionButton[]',
        required: false,
        default: '[]',
        description: 'Array of action buttons (login, signup, profile, etc.) displayed on the right'
      },
      {
        name: 'position',
        type: '"static" | "sticky" | "fixed"',
        required: false,
        default: '"static"',
        description: 'CSS positioning behavior of the app bar'
      },
      {
        name: 'variant',
        type: '"default" | "elevated"',
        required: false,
        default: '"default"',
        description: 'Visual style variant - default with border or elevated with shadow'
      },
      {
        name: 'mobileBreakpoint',
        type: 'number',
        required: false,
        default: '768',
        description: 'Screen width (in pixels) below which mobile layout is activated'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS class names for custom styling'
      },
      {
        name: 'style',
        type: 'React.CSSProperties',
        required: false,
        default: 'undefined',
        description: 'Inline styles object for custom styling'
      }
    ],
    usage: {
      installation: 'npm install akgui-core',
      basicExample: `import { AppBar } from 'akgui-core'

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

const actions = [
  { id: 'login', label: 'Login', variant: 'ghost' },
  { id: 'signup', label: 'Sign Up', variant: 'primary' }
]

function App() {
  return (
    <AppBar
      title="My App"
      menuItems={menuItems}
      actions={actions}
      activeItem="home"
    />
  )
}`,
      advancedExamples: [
        {
          title: 'With Custom Logo and Event Handlers',
          description: 'Complete setup with logo, navigation, and event handling',
          code: `import { AppBar, MenuItem, ActionButton } from 'akgui-core'

const CustomLogo = () => (
  <img src="/logo.svg" alt="Logo" width="32" height="32" />
)

function Navigation() {
  const [activeItem, setActiveItem] = useState('home')
  
  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'products', label: 'Products', href: '/products' },
    { id: 'about', label: 'About', href: '/about' }
  ]
  
  const actions: ActionButton[] = [
    { 
      id: 'login', 
      label: 'Login', 
      variant: 'ghost',
      onClick: () => openLoginModal()
    },
    { 
      id: 'signup', 
      label: 'Sign Up', 
      variant: 'primary',
      onClick: () => openSignupModal()
    }
  ]
  
  return (
    <AppBar
      logo={<CustomLogo />}
      title="My Application"
      menuItems={menuItems}
      actions={actions}
      activeItem={activeItem}
      onMenuItemClick={(item) => setActiveItem(item.id)}
      onBrandClick={() => navigate('/')}
      position="sticky"
      variant="elevated"
    />
  )
}`
        },
        {
          title: 'Responsive Configuration',
          description: 'Custom mobile breakpoint and responsive behavior',
          code: `<AppBar
  title="Mobile-First App"
  menuItems={menuItems}
  actions={actions}
  mobileBreakpoint={900} // Tablet-first approach
  position="fixed"
  className="custom-header"
  style={{ 
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' 
  }}
/>`
        }
      ]
    }
  }
}

export default appBarConfig
