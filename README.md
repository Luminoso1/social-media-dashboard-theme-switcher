# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned how to initialize the theme based on the user's preference, toggle between themes, and use `localStorage` to save the changes.

The CSS code defines the colors and styles for the dark theme, adjusting the background, text, and other visual elements.

```css
body.dark {
  --bg-body: var(--very-dark-blue);
  --bg-top: hsl(232, 19%, 15%);
  --bg-card: hsl(228, 28%, 20%);
  --bg-card-active: hsl(228, 28%, 25%);
  --text-heading: var(--white);
  --text: hsl(228, 34%, 66%);
  --bg-toggle: hsl(210, 78%, 56%), hsl(146, 68%, 55%);
}
```

```js
function initializeTheme() {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark' || (theme === null && queryTheme)) {
    bodyClass.add('dark')
    btnToggle.checked = true
  } else {
    bodyClass.remove('dark')
    btnToggle.checked = false
  }
}

function toggleTheme() {
  const isDark = bodyClass.contains('dark')
  bodyClass.toggle('dark', !isDark)
  localStorage.setItem('theme', isDark ? 'light' : 'dark')
}
```

## Author

Frontend Mentor - [@Luminoso1](https://www.frontendmentor.io/profile/Luminoso1)
