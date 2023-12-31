"use client";
import React from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import HomeScreen from "@/components/Home";
import AboutScreen from "@/components/About";
import { ToggleMenu } from "@/components/MobileMenu";
interface RootState {
  route: any;
}

export default function Home() {
  const data = useSelector((state: RootState) => state.route);
  const route = data.currentRoute;
  const variants = {
    exit: {
      y: 10,
      opacity: 0,
      transition: {
        duration: 2,
        type: "spring",
        ease: "linear",
        damping: 10,
        stiffness: 20,
      },
    },
    active: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        ease: "linear",
        damping: 10,
        stiffness: 20,
      },
    },
  };
  return (
    <motion.main>
      <ToggleMenu />
      <AnimatePresence mode="wait">
        <motion.div
          key={route === "Home" ? route : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate="active"
          variants={variants}
          exit="exit"
          transition={{ duration: 0.2 }}
        >
          {route === "Home" ? <HomeScreen /> : <AboutScreen />}
        </motion.div>
      </AnimatePresence>
    </motion.main>
  );
}
