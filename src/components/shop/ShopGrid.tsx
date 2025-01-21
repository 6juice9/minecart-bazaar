import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "VIP Статус",
    description: "Особые привилегии для особых игроков",
    price: 9.99,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Набор ресурсов",
    description: "Стартовый набор для быстрого развития",
    price: 4.99,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Премиум кейс",
    description: "Эксклюзивные предметы и бонусы",
    price: 14.99,
    image: "/placeholder.svg"
  },
  // Add more products as needed
];

export const ShopGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};