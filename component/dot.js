import { useState, useEffect } from 'react';

const Dot = () => {
  const [position, setPosition] = useState({ x: 500, y: 200 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTimeout(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      }, 200);
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
        backgroundColor: '#ffb446',
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        filter: 'blur(5px)'

      }}
    />
  );
};

export default Dot;
