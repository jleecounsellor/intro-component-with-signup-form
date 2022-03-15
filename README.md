# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](design/DesktopView.png)

### Links

- [Solution URL](https://github.com/jleecounsellor/intro-component-with-signup-form)
- [Live Site URL](https://jleecounsellor.github.io/intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

This project gave me a chance to practice javascript, and use relative and absolute positioning. This let me practice hiding components and not allow them to affect the flow of the design until they are needed.

To see how you can add code snippets, see below:

```html
<div>
  <input type="text" id="fName" placeholder="First Name" autocomplete="false">
  <img src="images/icon-error.svg" class="errorIcon" alt="error" />
  <label></label>
</div>
```
```css
form div {
  position: relative;
}
img {
  display: block;
  position: absolute;
  top: 17px;
  right: 10px;
}
.errorIcon {
  display: none;
}
```
```js
const showError = (input, message) => {
  const form = input.parentElement;
  const error = form.querySelector("label");
  const image = form.querySelector("img");

  //add "error" class and css that goes along with it
  input.classList.add("error");
  image.classList.remove("errorIcon");
  input.classList.remove("success");

  //show the error message
  error.textContent = message;
}
```

### Useful resources

- [Example resource 1](https://css-tricks.com/almanac/properties/p/position/) - This helped me understand how relative and absolute positioning works together.

## Author

- Website - [Jamie Counsellor](https://counsellorj.herokuapp.com/)
