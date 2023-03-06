import { useState, useEffect } from 'react';

const Dot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTimeout(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#00ffe0',
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        filter: 'blur(5px)'

      }}
    />
  );
};

export default Dot;
