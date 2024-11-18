import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Start' },
    { path: '/rsvp', label: 'Zusagen' },
    { path: '/dress-code', label: 'Kleidung' },
    { path: '/details', label: 'Details' },
    { path: '/accommodations', label: 'Unterkunft' },
    { path: '/faq', label: 'FAQ' },
    { path: '/family-guide', label: 'Familie' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
      },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="font-serif text-xl flex items-center gap-2 text-white">
              <Heart className="w-4 h-4" />
              <span>L & M</span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Menü öffnen"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-black/85 backdrop-blur-sm z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div 
              className="bg-black/85 backdrop-blur-sm mx-4 mt-4 rounded-lg border border-white/10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-3 px-6 text-lg ${
                          isActive ? 'text-white font-medium bg-white/10' : 'text-gray-300 hover:bg-white/5'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;