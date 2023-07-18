// useScrollDirection.js
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    }, 100); // Adjust the debounce delay as needed

    // Add scroll event listener
    document.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;
