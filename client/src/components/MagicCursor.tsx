import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MagicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cursorX = useSpring(0, { stiffness: 1000, damping: 100 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 rounded-full border-2 border-[#6B35A4] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="fixed w-2 h-2 bg-[#6B35A4] pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
      />
    </>
  );
}