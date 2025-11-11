'use client'
import React, { useState, useEffect } from 'react';
const FONT_OPTIONS = [
  { name: 'Garamond EB', value: "'EB Garamond', 'EB Garamond Fallback'" },
  { name: 'Libertinus Serif', value: "'Libertinus Serif'"},
  {name: 'Times New Roman', value: "'Times New Roman', serif"},
  {name: 'Inter', value: "'Inter', 'Inter Fallback'"}
];

export default function FontSwitcher() {
  const [font, setFont] = useState(() => {
    return localStorage.getItem('preferredFont') || FONT_OPTIONS[0].value;
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--content-font', font);  
    localStorage.setItem('preferredFont', font);
  }, [font]);

  return (
    <div>
      <label htmlFor="fontSwitcher">Choose font </label>
      <select
        id="fontSwitcher"
        value={font}
        onChange={(e) => setFont(e.target.value)}
      >
        {FONT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
