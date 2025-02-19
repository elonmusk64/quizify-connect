
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the navbar plus some padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { title: "Home", id: "home" },
    { title: "About Us", id: "about" },
    { title: "Features", id: "features" },
    { title: "Notices", id: "notices" },
    { title: "Contact Us", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-primary font-bold text-xl tracking-tight animate-fadeIn"
          >
            PragyaParikshan
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.id)}
                className="text-primary hover:text-accent transition-colors duration-200 text-sm font-medium"
              >
                {item.title}
              </button>
            ))}
            <a
              href="/admin"
              className="text-primary hover:text-accent transition-colors duration-200 text-sm font-medium"
            >
              Admin
            </a>
            <a
              href="/student"
              className="text-primary hover:text-accent transition-colors duration-200 text-sm font-medium"
            >
              Student
            </a>
            <a
              href="/faculty"
              className="text-primary hover:text-accent transition-colors duration-200 text-sm font-medium"
            >
              Faculty
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-primary hover:text-accent transition-colors duration-200 text-sm font-medium"
                >
                  {item.title}
                </button>
              ))}
              <a
                href="/admin"
                className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-200 text-sm font-medium"
              >
                Admin
              </a>
              <a
                href="/student"
                className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-200 text-sm font-medium"
              >
                Student
              </a>
              <a
                href="/faculty"
                className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-200 text-sm font-medium"
              >
                Faculty
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
