"use client";
import React, { ReactNode } from "react";
import "@/styles/globals.css";
import { NavigationBar } from "@/components/NavigationBar";
import { Provider } from "react-redux";
import store from "@/store/store";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <main className="app">
            <NavigationBar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
