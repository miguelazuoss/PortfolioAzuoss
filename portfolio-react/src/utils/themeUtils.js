export const applyStyles = (selector, styles) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      Object.keys(styles).forEach(style => {
        element.style.setProperty(style, styles[style]);
      });
    });
  };
  
  export const setBodyBackground = (color) => {
    document.body.style.setProperty('background', color);
  };