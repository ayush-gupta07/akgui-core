import { Card } from './Card'
import { Button } from '../Button'
import type { ComponentConfig } from '../../../playground/src/types/playground'

// Sample content
const sampleContent = "This is a sample card content that demonstrates how the card component works with different configurations and layouts."

const longContent = "This is a longer content example that shows how the card component handles more extensive text content. It includes multiple sentences to demonstrate proper text flow and spacing within the card layout. The card component is designed to be flexible and adapt to various content lengths while maintaining consistent spacing and visual hierarchy."

const userIcon = <span style={{ fontSize: '1.2em' }}>👤</span>
const heartIcon = <span style={{ fontSize: '1em', color: '#e74c3c' }}>❤️</span>
const shareIcon = <span style={{ fontSize: '1em', color: '#3498db' }}>📤</span>
const settingsIcon = <span style={{ fontSize: '1em' }}>⚙️</span>

const SampleActions = () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Button variant="ghost" size="small">
      {heartIcon} Like
    </Button>
    <Button variant="ghost" size="small">
      {shareIcon} Share
    </Button>
    <Button variant="primary" size="small">
      Connect
    </Button>
  </div>
)

const ProfileActions = () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Button variant="ghost" size="small">View Profile</Button>
    <Button variant="primary" size="small">Follow</Button>
  </div>
)

const SettingsActions = () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Button variant="ghost" size="small">
      {settingsIcon} Settings
    </Button>
    <Button variant="secondary" size="small">Edit</Button>
  </div>
)

export const cardConfig: ComponentConfig = {
  name: 'Card',
  description: 'A flexible content container component with configurable layouts, visual variants, and interactive states.',
  category: 'Layout',
  examples: [
    {
      title: 'Basic Card',
      description: 'Simple card with title and content',
      component: (
        <Card title="Basic Card" subtitle="Simple example">
          {sampleContent}
        </Card>
      ),
      code: `<Card title="Basic Card" subtitle="Simple example">
  This is a sample card content that demonstrates how the card 
  component works with different configurations and layouts.
</Card>`
    },
    {
      title: 'Visual Variants',
      description: 'Different visual styles: flat, outlined, elevated, and subtle',
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Card variant="flat" title="Flat Card" size="compact">
            Minimal styling with no borders or shadows.
          </Card>
          <Card variant="outlined" title="Outlined Card" size="compact">
            Clean border with no shadow elevation.
          </Card>
          <Card variant="elevated" title="Elevated Card" size="compact">
            Subtle shadow for depth and prominence.
          </Card>
          <Card variant="subtle" title="Subtle Card" size="compact">
            Light background with minimal shadow.
          </Card>
        </div>
      ),
      code: `<Card variant="flat" title="Flat Card">
  Minimal styling with no borders or shadows.
</Card>

<Card variant="outlined" title="Outlined Card">
  Clean border with no shadow elevation.
</Card>

<Card variant="elevated" title="Elevated Card">
  Subtle shadow for depth and prominence.
</Card>

<Card variant="subtle" title="Subtle Card">
  Light background with minimal shadow.
</Card>`
    },
    {
      title: 'Size Variations',
      description: 'Different padding sizes: compact, comfortable, and spacious',
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <Card size="compact" title="Compact" variant="outlined">
            Minimal padding for tight layouts.
          </Card>
          <Card size="comfortable" title="Comfortable" variant="outlined">
            Balanced padding for most use cases.
          </Card>
          <Card size="spacious" title="Spacious" variant="outlined">
            Generous padding for emphasis.
          </Card>
        </div>
      ),
      code: `<Card size="compact" title="Compact">
  Minimal padding for tight layouts.
</Card>

<Card size="comfortable" title="Comfortable">
  Balanced padding for most use cases.
</Card>

<Card size="spacious" title="Spacious">
  Generous padding for emphasis.
</Card>`
    },
    {
      title: 'Interactive Card',
      description: 'Clickable cards with hover effects and selection states',
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Card 
            clickable 
            title="Clickable Card"
            subtitle="Click to interact"
            variant="outlined"
            onClick={() => alert('Card clicked!')}
          >
            This card responds to clicks and keyboard interactions.
          </Card>
          <Card 
            clickable 
            selected
            title="Selected Card"
            subtitle="Currently selected"
            variant="outlined"
          >
            This card shows the selected state styling.
          </Card>
          <Card 
            clickable 
            disabled
            title="Disabled Card"
            subtitle="Cannot interact"
            variant="outlined"
          >
            This card is disabled and cannot be clicked.
          </Card>
        </div>
      ),
      code: `<Card 
  clickable 
  title="Clickable Card"
  onClick={() => handleCardClick()}
>
  This card responds to clicks and keyboard interactions.
</Card>

<Card clickable selected title="Selected Card">
  This card shows the selected state styling.
</Card>

<Card clickable disabled title="Disabled Card">
  This card is disabled and cannot be clicked.
</Card>`
    },
    {
      title: 'Cards with Images',
      description: 'Cards featuring images and media content',
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <Card
            image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=225&fit=crop"
            imageAlt="Office workspace"
            title="Project Update"
            subtitle="Development Team"
            variant="elevated"
            footer={<SampleActions />}
          >
            Our latest project milestone has been completed ahead of schedule with excellent results.
          </Card>
          <Card
            image={
              <div style={{
                width: '100%',
                height: '225px',
                background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem'
              }}>
                {userIcon}
              </div>
            }
            title="User Profile"
            subtitle="Software Engineer"
            variant="outlined"
            footer={<ProfileActions />}
          >
            Passionate developer with expertise in React and TypeScript.
          </Card>
        </div>
      ),
      code: `<Card
  image="/path/to/image.jpg"
  imageAlt="Description"
  title="Project Update"
  subtitle="Development Team"
  variant="elevated"
  footer={<ActionButtons />}
>
  Our latest project milestone has been completed.
</Card>

<Card
  image={<CustomImageComponent />}
  title="User Profile"
  subtitle="Software Engineer"
  footer={<ProfileActions />}
>
  Passionate developer with expertise in React.
</Card>`
    },
    {
      title: 'Horizontal Layout',
      description: 'Cards with horizontal orientation for different layouts',
      component: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Card
            orientation="horizontal"
            image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop"
            imageAlt="Technology"
            title="Horizontal Card"
            subtitle="Side-by-side layout"
            variant="outlined"
            size="comfortable"
            footer={<SettingsActions />}
          >
            This card demonstrates the horizontal layout option where the image appears on the left side and content flows alongside it.
          </Card>
          <Card
            orientation="horizontal"
            image={
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                minHeight: '120px'
              }}>
                📊
              </div>
            }
            title="Analytics Dashboard"
            subtitle="Data insights"
            variant="elevated"
            clickable
            onClick={() => alert('Analytics clicked!')}
          >
            View comprehensive analytics and insights for your projects with detailed metrics and performance data.
          </Card>
        </div>
      ),
      code: `<Card
  orientation="horizontal"
  image="/path/to/image.jpg"
  title="Horizontal Card"
  subtitle="Side-by-side layout"
  variant="outlined"
  footer={<ActionButtons />}
>
  This card demonstrates the horizontal layout option.
</Card>

<Card
  orientation="horizontal"
  image={<CustomChart />}
  title="Analytics Dashboard"
  clickable
  onClick={handleAnalyticsClick}
>
  View comprehensive analytics and insights.
</Card>`
    },
    {
      title: 'Loading and States',
      description: 'Cards with loading states and different configurations',
      component: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Card
            loading
            title="Loading Card"
            subtitle="Please wait..."
            variant="outlined"
          >
            {longContent}
          </Card>
          <Card
            title="Rich Content Card"
            subtitle="Complex layout example"
            variant="elevated"
            size="spacious"
            footer={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.875rem', color: '#666666' }}>
                  Updated 2 hours ago
                </span>
                <SampleActions />
              </div>
            }
          >
            <div>
              <p style={{ marginBottom: '12px' }}>
                This card demonstrates rich content with multiple paragraphs and complex footer layouts.
              </p>
              <ul style={{ margin: '0', paddingLeft: '20px' }}>
                <li>Feature-rich content support</li>
                <li>Flexible footer layouts</li>
                <li>Professional styling</li>
              </ul>
            </div>
          </Card>
        </div>
      ),
      code: `<Card
  loading
  title="Loading Card"
  subtitle="Please wait..."
>
  Content will appear when loading completes.
</Card>

<Card
  title="Rich Content Card"
  variant="elevated"
  size="spacious"
  footer={<ComplexFooter />}
>
  <div>
    <p>Rich content with multiple elements.</p>
    <ul>
      <li>Feature-rich content support</li>
      <li>Flexible footer layouts</li>
    </ul>
  </div>
</Card>`
    }
  ],
  documentation: {
    description: 'A flexible and accessible card component that serves as a content container. Perfect for displaying structured information, user profiles, product listings, and interactive content with consistent styling and behavior.',
    props: [
      {
        name: 'title',
        type: 'string | React.ReactNode',
        required: false,
        default: 'undefined',
        description: 'Header title content - can be text or custom React element'
      },
      {
        name: 'subtitle',
        type: 'string | React.ReactNode',
        required: false,
        default: 'undefined',
        description: 'Header subtitle content displayed below the title'
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        default: '-',
        description: 'Main card content - any valid React children'
      },
      {
        name: 'footer',
        type: 'React.ReactNode',
        required: false,
        default: 'undefined',
        description: 'Footer content area, typically used for actions or metadata'
      },
      {
        name: 'image',
        type: 'string | React.ReactNode',
        required: false,
        default: 'undefined',
        description: 'Image URL string or custom React element for media content'
      },
      {
        name: 'imageAlt',
        type: 'string',
        required: false,
        default: 'title or "Card image"',
        description: 'Alt text for image accessibility (when image is a URL string)'
      },
      {
        name: 'variant',
        type: '"flat" | "outlined" | "elevated" | "subtle"',
        required: false,
        default: '"outlined"',
        description: 'Visual style variant - affects borders, shadows, and background'
      },
      {
        name: 'size',
        type: '"compact" | "comfortable" | "spacious"',
        required: false,
        default: '"comfortable"',
        description: 'Padding size variant for different content densities'
      },
      {
        name: 'orientation',
        type: '"vertical" | "horizontal"',
        required: false,
        default: '"vertical"',
        description: 'Layout orientation - vertical stacks content, horizontal places image beside content'
      },
      {
        name: 'clickable',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Makes the entire card interactive with hover effects and keyboard support'
      },
      {
        name: 'selected',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Shows selected state styling (requires clickable to be meaningful)'
      },
      {
        name: 'loading',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Shows loading spinner overlay and disables interactions'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Disables interactions and applies disabled styling'
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        default: 'undefined',
        description: 'Click handler function (requires clickable=true)'
      },
      {
        name: 'onKeyDown',
        type: '(event: React.KeyboardEvent) => void',
        required: false,
        default: 'undefined',
        description: 'Custom keyboard event handler'
      },
      {
        name: 'role',
        type: 'string',
        required: false,
        default: '"button" (if clickable)',
        description: 'Custom ARIA role for accessibility'
      },
      {
        name: 'aria-label',
        type: 'string',
        required: false,
        default: 'undefined',
        description: 'Accessibility label for screen readers'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        default: '""',
        description: 'Additional CSS classes for custom styling'
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
      basicExample: `import { Card } from 'akgui-core'

function App() {
  return (
    <Card title="Welcome" subtitle="Get started">
      This is a basic card with title and content.
    </Card>
  )
}`,
      advancedExamples: [
        {
          title: 'Interactive Content Card',
          description: 'Card with image, actions, and click handling',
          code: `import { Card, Button } from 'akgui-core'

function ProductCard({ product, onAddToCart, onViewDetails }) {
  const actions = (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button variant="ghost" onClick={onViewDetails}>
        View Details
      </Button>
      <Button variant="primary" onClick={onAddToCart}>
        Add to Cart
      </Button>
    </div>
  )

  return (
    <Card
      image={product.imageUrl}
      imageAlt={product.name}
      title={product.name}
      subtitle={\`$\${product.price}\`}
      variant="elevated"
      clickable
      onClick={onViewDetails}
      footer={actions}
    >
      <p>{product.description}</p>
      <div style={{ fontSize: '0.875rem', color: '#666' }}>
        In stock: {product.inventory} items
      </div>
    </Card>
  )
}`
        },
        {
          title: 'Profile Card with Custom Styling',
          description: 'User profile card with custom layout and styling',
          code: `import { Card, Button } from 'akgui-core'

function UserProfile({ user, onConnect, isConnected }) {
  return (
    <Card
      variant="subtle"
      size="spacious"
      className="user-profile-card"
      style={{ maxWidth: '320px' }}
      footer={
        <Button 
          variant={isConnected ? "secondary" : "primary"}
          onClick={onConnect}
          fullWidth
        >
          {isConnected ? "Connected" : "Connect"}
        </Button>
      }
    >
      <div style={{ textAlign: 'center' }}>
        <img 
          src={user.avatar} 
          alt={user.name}
          style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%',
            marginBottom: '12px'
          }} 
        />
        <h3 style={{ margin: '0 0 4px 0' }}>{user.name}</h3>
        <p style={{ margin: '0 0 12px 0', color: '#666' }}>
          {user.title}
        </p>
        <p style={{ margin: 0, fontSize: '0.875rem' }}>
          {user.bio}
        </p>
      </div>
    </Card>
  )
}`
        }
      ]
    }
  }
}

export default cardConfig
