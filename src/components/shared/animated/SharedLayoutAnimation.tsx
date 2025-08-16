import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const animations = {
  up: {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
    transition: { duration: 0.3 },
  },
  down: {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 },
    transition: { duration: 0.3 },
  },
  left: {
    initial: { x: 10, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -10, opacity: 0 },
    transition: { duration: 0.3 },
  },
  right: {
    initial: { x: -10, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 10, opacity: 0 },
    transition: { duration: 0.3 },
  },
  blink: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  },
};

export default function SharedLayoutAnimation({
  children,
  type = "blink",
  className,
}: {
  children: React.ReactNode;
  type?: keyof typeof animations;
  className?: any;
}) {
  const validChildren = Array.isArray(children)
    ? children.filter(Boolean)
    : [children];

  const selectedAnimation = animations[type];

  return (
    <AnimatePresence mode="wait" initial={false}>
      {validChildren.map((child, index) => (
        <motion.div
          key={child?.key || index}
          initial={selectedAnimation.initial}
          animate={selectedAnimation.animate}
          exit={selectedAnimation.exit}
          transition={selectedAnimation.transition}
          className={className}
          style={{ height: "100%", width: "100%" }}
        >
          {child}
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
