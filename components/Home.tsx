import React, { useState } from "react";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import { Countdown } from "./CounDown";
import CarouselText from "@/components/Carousel";
export default function HomeScreen() {
  const [connect, setConnect] = useState(true);
  return (
    <div className={styles.home_container}>
      <div className={styles.home_left_side}>
        <div className={styles.home_left_side_container}>
          <div className={styles.home_image_container}>
            <Image
              src={"/images/earth-month-logo-2.png"}
              width={900}
              height={400}
              className={styles.home_image_one}
              alt="image"
            />
            <Image
              src={"/images/stream-4-green-logo.png"}
              width={900}
              height={400}
              className={styles.home_image_two}
              alt="image"
            />
          </div>
        </div>

        <div className={styles.home_right_side}>
          <div className={styles.home_right_container}>
            <Image
              src={"/images/EG-by-Ant-Soulo-11.jpeg"}
              width={950}
              height={300}
              className={styles.home_right_img}
              alt="image"
            />
            <CarouselText />
            <Image
              src={"/images/earthgang-green-logo.png"}
              width={950}
              height={50}
              className={styles.home_right_earthgangpng}
              alt="image"
            />
          </div>
        </div>

        {connect ? (
          <div className={styles.main_button_container}>
            <button className={styles.home_main_button}>
              <svg
                aria-hidden="true"
                className={styles.spotify_svg}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                ></path>
              </svg>
              <span className={styles.home_button_desktop_txt}>
                Connect your Spotify account to get started
              </span>
              <span className={styles.home_button_mobile_txt}>
                Connect Spotify
              </span>
            </button>

            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                width: "100%",
                padding: ".5em 0",
              }}
            >
              <p className={styles.home_checkbox_text}>
                Sign up to the official Earth Month mailing list
              </p>
              <label className={styles.custom_checkbox}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
              </label>
            </div>
            <button
              className={styles.home_secondary_btn}
              onClick={() => setConnect(false)}
            >
              No thanks, skip this step
            </button>
          </div>
        ) : (
          <div className={styles.spotify_status_container}>
            <div className={styles.spotify_status}>
              <p>You have shared 0 times.</p>
              <Countdown seconds={30} />
              <p>Click to share</p>
              <button className={styles.icon_box}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className={styles.soc_icon}
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </button>
              <button className={styles.icon_box}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className={styles.soc_icon}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className={styles.footer_container}>
        <p>
          Make a change in the world, one tree at a time. Stream 4 the Planet
          lets you take action – with each share of the playlist curated by
          EARTHGANG, your contribution can help plant trees where they’re needed
          most through One Tree Planted.
        </p>
      </footer>
    </div>
  );
}
