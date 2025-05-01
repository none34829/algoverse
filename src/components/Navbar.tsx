
import { useState, useEffect } from "react";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Menu, X, BrainCog } from "lucide-react";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-lg bg-black/40 border-b border-algoverse-500/20"
          : "bg-transparent"
      )}
    >
      <div className="container-inner flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <a href="/" className="flex items-center group">
            <BrainCog size={24} className="mr-2 text-algoverse-400 group-hover:text-algoverse-300 transition-colors" />
            <span className="text-xl font-bold bg-gradient-to-r from-algoverse-100 to-white bg-clip-text text-transparent font-serif">
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
                  className="text-white/80 hover:text-white font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-algoverse-400 after:transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#apply"
            className="relative tech-border px-6 py-2 overflow-hidden group bg-black/50 hover:bg-black/70 transition-all text-white rounded-md"
          >
            <span className="relative z-10">Apply Now</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/70 border-t border-algoverse-500/20">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 px-4 text-white/80 hover:text-white hover:bg-algoverse-900/50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#apply"
                className="block text-center bg-gradient-to-r from-algoverse-500 to-algoverse-700 text-white py-2 px-4 rounded-md"
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
