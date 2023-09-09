"use client";
import React, { useState } from "react";
import styles from "@/styles/navbar.module.css";
import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { handleRouteChange } from "@/store/routeReducer";
import { useSelector, useDispatch } from "react-redux";
export const NavigationBar = () => {
  const dispatch = useDispatch();
  //rutes state
  const [tabRoute, setTabroute] = useState("Home");

  //

  const right_navbar = ["Privacy", "Terms", "Promotion", "Terms"];

  //
  const variants = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        type: "spring",
        ease: "easeOut",
        damping: 10,
        stiffness: 20,
      },
    },
    inactive: {
      opacity: 0,
      y: "70%", // start point
    },
  };
  return (
    <motion.div
      variants={variants}
      animate="active"
      initial="inactive"
      className={styles.navbar_container}
    >
      <div className={styles.navbar_left}>
        <Link
          href="/"
          className={styles.navbar_text}
          onClick={(e) =>
            dispatch(handleRouteChange(e.currentTarget.innerText))
          }
        >
          Home
        </Link>
        <Link
          href="/"
          className={styles.navbar_text}
          onClick={(e) =>
            dispatch(handleRouteChange(e.currentTarget.innerText))
          }
        >
          About
        </Link>
        <svg
          width="40"
          height="20"
          viewBox="0 0 40 20"
          fill="#168a43"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.burger_menu}
        >
          <rect width="40" height="4" fill="var(--main-col)"></rect>
          <rect y="8" width="40" height="4" fill="var(--main-col)"></rect>
          <rect y="16" width="40" height="4" fill="var(--main-col)"></rect>
        </svg>
      </div>
      <div className={styles.navbar_logo__container}>
        <Image
          src={"/images/green-team-green-logo.png"}
          width={200}
          height={40}
          className={styles.navbar_logo}
          alt="image"
        />
      </div>
      <div className={styles.navbar_right}>
        <Image
          src={"/images/one-tree-green-logo.png"}
          width={200}
          height={40}
          className={styles.navbar_logo_right}
          alt="image"
        />
        <div className={styles.right_nav_container}>
          {right_navbar.map((item, index) => (
            <Link href="/" className={styles.navbar_right__text} key={index}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
