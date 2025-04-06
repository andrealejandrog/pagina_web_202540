"use client";
import React from "react";

const WatermarkBackground = ({
  children,
  opacity = 0.1,
  size = { base: "100% auto", md: "50% auto", lg: "25% auto" }, // Objeto con tamaños por breakpoint
  bgColor = "var(--ztc-bg-bg-1)",
  id,
  className = "",
}) => {
  return (
    <div
      id={id}
      className={`watermark-wrapper ${className}`}
      style={{
        position: "relative",
        backgroundColor: bgColor,
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Capa de imagen con opacidad */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/img/bg/Grayscale_logo.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: size.base, // Tamaño base (mobile-first)
          opacity: opacity,
          zIndex: 0,
          // Media queries para responsive (alternativa con CSS-in-JS)
          "@media (min-width: 768px)": {
            backgroundSize: size.md, // Tamaño para tablets
          },
          "@media (min-width: 1024px)": {
            backgroundSize: size.lg, // Tamaño para desktop
          },
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default WatermarkBackground;