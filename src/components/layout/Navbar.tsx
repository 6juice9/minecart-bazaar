import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="text-2xl font-bold text-glow"
            whileHover={{ scale: 1.05 }}
          >
            Time To Consume
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Главная</NavLink>
            <NavLink href="/shop">Магазин</NavLink>
            <NavLink href="/about">О сервере</NavLink>
          </div>
          <Button variant="outline" className="hover-glass">
            Войти
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-white hover:text-primary-light transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);