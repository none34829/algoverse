
import { useState, useEffect } from "react";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems: NavItem[] = [
  { label: "Program", href: "#program" },
  { label: "Research", href: "#research" },
  { label: "News", href: "#news" },
  { label: "FAQs", href: "#faqs" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-inner flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-algoverse-800 font-serif">
              Algoverse
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-algoverse-600 font-medium transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#apply"
            className="btn-primary whitespace-nowrap"
          >
            Apply Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 px-4 text-gray-800 hover:bg-algoverse-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#apply"
                className="btn-primary block text-center"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
