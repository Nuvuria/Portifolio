import React from 'react';
import { motion } from 'framer-motion';

export const PixelWaveBackground: React.FC = () => {
  const rows = 14;
  const cols = 24;
  const pixels = [];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const key = `${row}-${col}`;
      const delay = (row + col) * 0.08;
      pixels.push(
        <motion.div
          key={key}
          className="pixel"
          style={{
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-60">
        <div className="pixel-grid">
          {pixels}
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(59,130,246,0.45),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(147,51,234,0.35),transparent_60%)] opacity-25" />
    </div>
  );
};

