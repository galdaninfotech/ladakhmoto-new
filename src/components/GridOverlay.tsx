"use client";

import { useEffect, useState } from "react";

export default function GridOverlay() {
  const [visible, setVisible] = useState(false);

  // Keyboard shortcut: press "G"
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "g") {
        setVisible((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      {/* <button
        onClick={() => setVisible((v) => !v)}
        className="fixed bottom-4 right-4 z-1000 bg-black text-white px-4 py-2 rounded opacity-80 hover:opacity-100"
      >
        Grid
      </button> */}

      {/* Overlay */}
      <div
        className={`pointer-events-none fixed inset-0 z-[999] ${
          visible ? "" : "hidden"
        }`}
      >
        {/* Column Grid */}
        <div
          className="
            absolute inset-0 container mx-auto px-4
            grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12
            opacity-10 gap-2 md:gap-3 lg:gap-4
          "
        >
          {/* 4 Columns — Always visible */}
          <div className="bg-cyan-500 h-full"></div>
          <div className="bg-cyan-500 h-full"></div>
          <div className="bg-cyan-500 h-full"></div>
          <div className="bg-cyan-500 h-full"></div>

          {/* 4 Columns — Show from SM */}
          <div className="bg-cyan-500 h-full hidden sm:block"></div>
          <div className="bg-cyan-500 h-full hidden sm:block"></div>
          <div className="bg-cyan-500 h-full hidden sm:block"></div>
          <div className="bg-cyan-500 h-full hidden sm:block"></div>

          {/* 4 Columns — Show from LG */}
          <div className="bg-cyan-500 h-full hidden lg:block"></div>
          <div className="bg-cyan-500 h-full hidden lg:block"></div>
          <div className="bg-cyan-500 h-full hidden lg:block"></div>
          <div className="bg-cyan-500 h-full hidden lg:block"></div>
        </div>

        {/* Baseline Grid */}
        <div className="absolute inset-0 baseline-grid"></div>
      </div>
    </>
  );
}
