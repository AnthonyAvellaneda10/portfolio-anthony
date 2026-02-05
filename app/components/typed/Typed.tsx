"use client";

import { useEffect, useRef } from 'react';
import './Typed.css';
import { useTranslations } from "next-intl";

export default function Typed() {
  const t = useTranslations("Typed");
  const typedTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typedText = typedTextRef.current;
    if (!typedText) return;

    // We need to handle the array from translations correctly
    // next-intl doesn't return arrays directly with t("key"), 
    // it returns a string if it's a leaf node. 
    // For arrays, we can use JSON.parse if we stored it as a string, 
    // or use t.raw for raw objects.
    const textArray = t.raw("roles");
    let textIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function typeAndErase() {
      if (!typedText) return;
      const currentText = textArray[textIndex];
      if (isTyping) {
        if (charIndex <= currentText.length) {
          typedText.textContent = currentText.substring(0, charIndex);
          charIndex++;
          setTimeout(typeAndErase, 75);
        } else {
          isTyping = false;
          setTimeout(typeAndErase, 1500);
        }
      } else {
        if (charIndex >= 0) {
          typedText.textContent = currentText.substring(0, charIndex);
          charIndex--;
          setTimeout(typeAndErase, 75);
        } else {
          isTyping = true;
          textIndex = (textIndex + 1) % textArray.length;
          setTimeout(typeAndErase, 75);
        }
      }
    }
    typeAndErase();
  }, [t]);

  return (
    <h1 className="home__title" style={{ lineHeight: '1.5', marginBottom: '10px' }}>
      {t("greeting")} <span ref={typedTextRef} className="typed" style={{ display: 'inline-block', marginBottom: '5px' }}></span>
      <span className="cursor"></span>
    </h1>
  );
}
