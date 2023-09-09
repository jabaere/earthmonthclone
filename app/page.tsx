"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import HomeScreen from "@/components/Home";
import AboutScreen from "@/components/About";

interface RootState {
  route: any; // You might have a more complex structure here
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
    <main>
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
    </main>
  );
}
