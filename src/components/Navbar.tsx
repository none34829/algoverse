import { useState, useEffect } from "react";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Menu, X, BrainCog } from "lucide-react";
import { Link } from "react-router-dom";

const navItems: NavItem[] = [
   { label: "Program", href: "/#program" },
   { label: "Research", href: "/#research" },
   { label: "News", href: "/#news" },
   { label: "FAQs", href: "/#faqs" },
   { label: "About", href: "/about" },
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
          ? "backdrop-blur-lg bg-black/40 border-b border-[#00d2ff]/20"
          : "bg-transparent"
      )}
    >
      <div className="container-inner flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
         <Link to="/" className="flex items-center group">
            <img src="/download (11).jpg" alt="Algoverse Logo" className="mr-2 h-7 w-7 object-contain" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent font-space">
              Algoverse
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                
                <Link
                   to={item.href}
                  className="text-white/80 hover:text-[#00d2ff] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#00d2ff] after:transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/#apply"
            className="cyber-button px-6 py-2 rounded-md"
          >
            <span className="relative z-10">Apply Now</span>
          </Link>
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
        <div className="md:hidden backdrop-blur-xl bg-black/70 border-t border-[#00d2ff]/20">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-2 px-4 text-white/80 hover:text-[#00d2ff] hover:bg-[#00d2ff]/5 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                to="/#apply"
                className="block text-center bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] text-white py-2 px-4 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
