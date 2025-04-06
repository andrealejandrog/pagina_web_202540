"use client";
import React, { useState, useEffect } from "react";

const WatermarkBackground = ({
  children,
  opacity = 0.1,
  size = { base: "50% auto", md: "75% auto", lg: "100% auto" },
  bgColor = "var(--ztc-bg-bg-1)",
  id,
  className = "",
}) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const getBackgroundSize = () => {
    if (windowSize.width >= 1024) return size.lg;
    if (windowSize.width >= 768) return size.md;
    return size.base;
  };

  return (
    <div
      id={id}
      className={`watermark-wrapper ${className}`}
      style={{
        position: "relative",
        backgroundColor: bgColor,
        overflow: "hidden",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/img/bg/Grayscale_logo.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: getBackgroundSize(),
          opacity: opacity,
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default WatermarkBackground;