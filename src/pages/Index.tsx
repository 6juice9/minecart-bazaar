import { motion } from "framer-motion";
import { ShopGrid } from "@/components/shop/ShopGrid";
import { Navbar } from "@/components/layout/Navbar";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 77, 79, 0.85), rgba(11, 77, 79, 0.85)), url('/lovable-uploads/4cfe3e7d-572d-418c-8841-2e9a265f7afd.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-glow"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Time To Consume
        </motion.h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Анархия без правил. Только ты решаешь свою судьбу.
        </p>
        <motion.div
          className="glass inline-block px-6 py-3 rounded-lg text-lg"
          whileHover={{ scale: 1.05 }}
        >
          Онлайн: 128 игроков
        </motion.div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Популярные товары
          </h2>
          <ShopGrid />
        </div>
      </section>

      {/* Server Info */}
      <section className="py-20 px-4 glass">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="p-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4">PVP без ограничений</h3>
              <p>Сражайся, побеждай, доминируй</p>
            </motion.div>
            <motion.div
              className="p-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4">Никаких правил</h3>
              <p>Полная свобода действий</p>
            </motion.div>
            <motion.div
              className="p-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4">Уникальная экономика</h3>
              <p>Создавай империю, торгуй, богатей</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;