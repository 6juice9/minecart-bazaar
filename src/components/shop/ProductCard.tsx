import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const ProductCard = ({ name, description, price, image }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="glass p-4 h-full flex flex-col justify-between">
        <div>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-gray-300 mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-primary-light">
            ${price}
          </span>
          <Button variant="outline" className="hover-glass">
            Купить
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};