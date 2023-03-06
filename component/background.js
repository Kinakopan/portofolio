import React, { useState, useEffect } from 'react';

const Dot = ({ x, y }) => {
  return (
    <div
      className="dot"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
};

const DotBackground = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate 100 random dots
    const newDots = Array.from({ length: 100 }).map(() => ({
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
      dx: Math.random() * 2 - 1, // Random x velocity between -1 and 1
      dy: Math.random() * 2 - 1, // Random y velocity between -1 and 1
    }));

    setDots(newDots);
  }, []);

  useEffect(() => {
    // Animate the dots using the 'move-wave' animation
    const intervalId = setInterval(() => {
      const updatedDots = dots.map((dot) => {
        // Update the dot's position based on its velocity
        const x = dot.x + dot.dx * 10;
        const y = dot.y + dot.dy * 10;

        // Wrap the dot around to the other side if it goes outside of the window
        const newX = x < 0 ? window.innerWidth : x > window.innerWidth ? 0 : x;
        const newY = y < 0 ? window.innerHeight : y > window.innerHeight ? 0 : y;

        return {
          ...dot,
          x: newX,
          y: newY,
        };
      });

      setDots(updatedDots);
    }, 100);

    return () => clearInterval(intervalId);
  }, [dots]);

  return (
    <>
      {dots.map((dot, index) => (
        <Dot key={index} x={dot.x} y={dot.y} />
      ))}
    </>
  );
};

export default DotBackground;
