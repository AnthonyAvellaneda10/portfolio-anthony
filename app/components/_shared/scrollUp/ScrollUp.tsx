'use client';

import { useState, useEffect } from 'react';
import "./ScrollUp.css";
import { ArrowUp } from 'lucide-react';

export default function ScrollUp() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY >= 350);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`scrollup ${showScrollButton ? 'show-scroll' : ''}`}
      aria-label="Scroll up"
    >
      <ArrowUp className='w-5 h-5'/>
    </a>
  );
}