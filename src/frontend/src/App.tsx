import { useState } from 'react';
import { Menu, X, Zap, Shield, TrendingUp, Users, Mail, Phone, MapPin, Heart } from 'lucide-react';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const products = [
    {
      id: 1,
      name: 'Proximity Sensor',
      description: 'High-precision industrial proximity sensor with adjustable detection range and robust metal housing for harsh environments.',
      image: '/assets/generated/proximity-sensor.dim_1400x900.png',
    },
    {
      id: 2,
      name: 'Temperature Sensor Module',
      description: 'Compact temperature monitoring module with digital output, ideal for HVAC systems and industrial process control.',
      image: '/assets/generated/temperature-sensor-module.dim_1400x900.png',
    },
    {
      id: 3,
      name: 'Smart Energy Meter',
      description: 'Advanced energy meter with integrated sensors for real-time monitoring, data logging, and remote connectivity.',
      image: '/assets/generated/smart-energy-meter.dim_1400x900.png',
    },
    {
      id: 4,
      name: 'Sensor Circuit Breaker',
      description: 'Intelligent circuit breaker with built-in current and temperature sensors for enhanced electrical safety and monitoring.',
      image: '/assets/generated/sensor-circuit-breaker.dim_1400x900.png',
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All products undergo rigorous testing and meet international safety standards.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Latest sensor technology for precise monitoring and control in industrial applications.',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Direct sourcing and efficient operations ensure the best value for your investment.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated technical team ready to assist with product selection and implementation.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/generated/Gemini_Generated_Image_x7wtyjx7wtyjx7wt.png" 
              alt="Electric Light logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold">Electric Light</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('advantages')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container flex flex-col py-4 gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium text-left transition-colors hover:text-primary"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-sm font-medium text-left transition-colors hover:text-primary"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-left transition-colors hover:text-primary"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('advantages')}
                className="text-sm font-medium text-left transition-colors hover:text-primary"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-left transition-colors hover:text-primary"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
          <div className="container relative py-24 md:py-32 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  Leading Sensor Technology Provider
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                  Advanced Sensored Electric Products
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-balance">
                  Empowering industries with cutting-edge sensor technology for precise monitoring, control, and automation solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('products')}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                  >
                    View Products
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
              <div className="relative lg:h-[500px] rounded-lg overflow-hidden shadow-industrial">
                <img
                  src="/assets/generated/hero-sensored-electric-banner.dim_1920x900.png"
                  alt="Sensored Electric Products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of sensor-enabled electrical products designed for industrial excellence.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Electric Light</h2>
                <p className="text-lg text-muted-foreground">
                  With over two decades of experience in the electrical products industry, we specialize in providing high-quality sensor-enabled electrical components to businesses worldwide.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is to deliver innovative, reliable, and cost-effective solutions that enhance operational efficiency and safety in industrial environments. We partner with leading manufacturers to ensure our clients receive only the best products backed by comprehensive technical support.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Products Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-industrial">
                <img
                  src="/assets/generated/smart-energy-meter.dim_1400x900.png"
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="advantages" className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the advantages that make us the preferred partner for sensored electric products.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card hover:shadow-industrial transition-shadow"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <advantage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions or need a quote? Reach out to our team and we'll get back to you promptly.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">sales@sensortech-electric.com</p>
                    <p className="text-muted-foreground">support@sensortech-electric.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Industrial Park Drive<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/assets/generated/Gemini_Generated_Image_x7wtyjx7wtyjx7wt.png" 
                  alt="Electric Light logo" 
                  className="h-5 w-5 object-contain"
                />
                <span className="font-bold">Electric Light</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for advanced sensored electric products and industrial automation solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-sm text-muted-foreground hover:text-primary text-left transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-sm text-muted-foreground hover:text-primary text-left transition-colors"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-muted-foreground hover:text-primary text-left transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-muted-foreground hover:text-primary text-left transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <nav className="flex flex-col gap-2">
                <span className="text-sm text-muted-foreground">Proximity Sensors</span>
                <span className="text-sm text-muted-foreground">Temperature Sensors</span>
                <span className="text-sm text-muted-foreground">Energy Meters</span>
                <span className="text-sm text-muted-foreground">Circuit Breakers</span>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span>sales@sensortech-electric.com</span>
                <span>+1 (555) 123-4567</span>
                <span>Mon-Fri: 8AM - 6PM</span>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Electric Light. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
