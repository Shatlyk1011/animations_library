
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Card from "./Card";

const cards = [
  {
    url: "/images/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/images/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/3.jpg",
    title: "Title 7",
    id: 7,
  },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel