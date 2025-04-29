export const slideIn = (element: HTMLElement) => {
  console.log('Sliding in:', element);
  element.style.transition = 'transform 1s ease-in-out';
  element.style.transform = 'translateX(100%)'; // état initial hors écran

  requestAnimationFrame(() => {
    // Forcer reflow + transition
    element.style.transform = 'translateX(0)';
  });
};

export const slideOut = (element: HTMLElement) => {
  console.log('Sliding out:', element);
  element.style.transition = 'transform 0.5s ease-in-out';
  element.style.transform = 'translateX(100%)';
};
