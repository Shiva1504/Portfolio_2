import { useState, useEffect } from "react";
import { Menu, Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const contactDetails = [
    { icon: <User className="h-4 w-4" />, label: "DASARI SAMBASIVA NAIDU", value: "AI/ML & Web Developer" },
    { icon: <Mail className="h-4 w-4" />, label: "Email", value: "dasarisambasivanaidu7@gmail.com", href: "mailto:dasarisambasivanaidu7@gmail.com" },
    { icon: <Github className="h-4 w-4" />, label: "GitHub", value: "@Shiva1504", href: "https://github.com/Shiva1504" },
    { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", value: "Dasari Sambasiva Naidu", href: "https://linkedin.com/in/dasarisambasivanaidu" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Popover>
              <PopoverTrigger asChild>
                <Button className="font-bold bg-gradient-to-r from-primary to-secondary">Contact Me</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-center space-x-4">
                      {detail.icon}
                      <div className="flex-1">
                        <p className="text-sm font-medium">{detail.label}</p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="w-full font-bold bg-gradient-to-r from-primary to-secondary">Contact Me</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      {contactDetails.map((detail) => (
                        <div key={detail.label} className="flex items-center space-x-4">
                          {detail.icon}
                          <div className="flex-1">
                            <p className="text-sm font-medium">{detail.label}</p>
                            {detail.href ? (
                              <a
                                href={detail.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-primary"
                              >
                                {detail.value}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">{detail.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};