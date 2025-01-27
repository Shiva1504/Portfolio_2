import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          AI/ML & Full Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Transforming ideas into intelligent solutions through AI/ML and modern web development
        </p>
        <Button className="text-lg px-8 py-6 font-bold bg-gradient-to-r from-primary to-secondary" size="lg">
          Download Resume <ArrowRight className="ml-2" />
        </Button>
      </motion.div>
    </section>
  );
};