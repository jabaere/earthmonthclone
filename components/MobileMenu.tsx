import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/mobile.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { handleMenu } from "@/store/menuReducer";
import { handleRouteChange } from "@/store/routeReducer";
import { useSelector, useDispatch } from "react-redux";

interface RootState {
  menu: any;
}

export function ToggleMenu() {
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menu);
  const isOpen = menu.isOpen;

  const container = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        ease: "easeIn",
        stiffness: 30,
        restDelta: 2,
      },
    },
    closed: {
      x: -300,
      opacity: 0,
      transition: {
        duration: 2.5,
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const rightContainer = {
    open: {
      x: 0,
      opacity: 0.6,
      transition: {
        delay: 1,
        duration: 3.5,
        type: "spring",

        restDelta: 2,
      },
    },
    closed: {
      transition: {
        duration: 2.5,
        delay: 2.5,
        type: "spring",
        stiffness: 40,
        damping: 40,
      },
    },
  };

  return (
    <motion.div data-isopen={isOpen} className={styles.sidebar_container}>
      <motion.div
        className={styles.sidebar}
        variants={container}
        initial={{ x: -300, opacity: 0 }}
        animate={isOpen ? "open" : "closed"}
      >
        <div className={styles.top_container}>
          <div>
            <motion.h3>Menu</motion.h3>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => dispatch(handleMenu(!isOpen))}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M11.2929 7.86139L12 8.5685L12.7071 7.86139L19.4339 1.13462C19.6236 0.944932 19.8882 0.971629 20.0257 1.11632L20.0345 1.12558L20.0435 1.13462L22.8653 3.95637C22.8653 3.95641 22.8653 3.95645 22.8654 3.9565C23.045 4.13628 23.0448 4.38674 22.8654 4.56612L16.1386 11.2929L15.4315 12L16.1386 12.7071L22.8653 19.4338C22.8653 19.4338 22.8653 19.4338 22.8654 19.4339C23.045 19.6137 23.0448 19.8641 22.8654 20.0435L20.0436 22.8653C20.0436 22.8653 20.0435 22.8653 20.0435 22.8654C19.8637 23.045 19.6133 23.0448 19.4339 22.8654L12.7071 16.1386L12 15.4315L11.2929 16.1386L4.56624 22.8653C4.5662 22.8653 4.56616 22.8653 4.56612 22.8654C4.38633 23.045 4.13587 23.0448 3.9565 22.8654L1.13474 20.0436C1.1347 20.0436 1.13466 20.0435 1.13462 20.0435C0.955017 19.8637 0.955238 19.6133 1.13462 19.4339L7.86139 12.7071L8.5685 12L7.86139 11.2929L1.13474 4.56624C1.1347 4.5662 1.13466 4.56616 1.13462 4.56612C0.955015 4.38633 0.955239 4.13587 1.13462 3.9565L3.95637 1.13474C3.95641 1.1347 3.95645 1.13466 3.9565 1.13462C4.13628 0.955016 4.38674 0.955239 4.56612 1.13462L11.2929 7.86139Z"
                fill="#F9FCF4"
                stroke="var(--main-color)"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <Link
            href="/"
            className={styles.navbar_text}
            onClick={(e) => (
              dispatch(handleRouteChange(e.currentTarget.innerText)),
              dispatch(handleMenu(!isOpen))
            )}
          >
            Home
          </Link>
          <Link
            href="/"
            className={styles.navbar_text}
            onClick={(e) => (
              dispatch(handleRouteChange(e.currentTarget.innerText)),
              dispatch(handleMenu(!isOpen))
            )}
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
            onClick={() => dispatch(handleMenu(true))}
          >
            <rect width="40" height="4" fill="var(--main-col)"></rect>
            <rect y="8" width="40" height="4" fill="var(--main-col)"></rect>
            <rect y="16" width="40" height="4" fill="var(--main-col)"></rect>
          </svg>
        </div>
        <div className={styles.sidebar_terms}>
          <Link href="/" className={styles.sidebar_text}>
            Privacy
          </Link>
          <Link href="/" className={styles.sidebar_text}>
            Terms
          </Link>
          <Link href="/" className={styles.sidebar_text}>
            Promotion Terms
          </Link>
        </div>
      </motion.div>
      <motion.div
        className={styles.sidebar_right}
        variants={rightContainer}
        initial={{ opacity: 0 }}
        animate={isOpen ? "open" : "closed"}
      ></motion.div>
    </motion.div>
  );
}
