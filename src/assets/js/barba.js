import barba from 'https://unpkg.com/@barba/core';
import barbaCSS from 'https://unpkg.com/@barba/css';   

barba.use(barbaCSS);

barba.init({
  transitions: [
    {
      name: 'fade',
      leave({ current }) {
        return new Promise((resolve) => {
          gsap.to(current.container, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: resolve
          });
        });
      },
      
      enter({ next }) {
        gsap.from(next.container, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut'
        });
      },
      
      once({ next }) {
        gsap.from(next.container, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    }
  ]
});   