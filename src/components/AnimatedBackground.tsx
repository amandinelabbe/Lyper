import React from "react";

export default function AnimatedBackground() {
  // Simple animated gradient background (can be replaced by particles/stars later)
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-black via-gray-900 to-violet-900 opacity-80"
      style={{ pointerEvents: "none" }}
    />
  );
}
