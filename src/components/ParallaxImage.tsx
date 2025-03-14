import React, { useEffect, useState } from 'react';

export function ParallaxImage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = 1 + (scrollPosition * 0.0002);

  return (
    <section className="h-[50vh] md:h-screen w-full overflow-hidden relative">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src="https://static.wixstatic.com/media/c73eb8_37474e9f3d9a4feeacf530f6183e8b66~mv2.jpeg"
          alt="Owner James Childs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
    </section>
  );
}