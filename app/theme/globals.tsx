"use client";
import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
:root {
  --max-width: 1750px;
  --border-radius: 0;
  --font-mono:  ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

    /* COLORS */
    --main-default: #1B1F25;
    --main-hover: #313842;
    --main-active: #0E1115;
    --secondary-default: #313842;
    --tertiary-default: #4F5A68;

    --border-clean: #C5CCD3;
    --border-clean-invert: #353D46;

    --main-invert-default: #FAFAFA;
    --main-invert-hover: #E6EAED;
    --main-invert-active: #C5CCD3;

    --secondary-invert: #A4AAB2;
    
    --global-bg: #F0F1F4;
    --subsection-bg: #F6F7F9;

    /* TYPOGRAPHY */
    font-family: Inter, sans-serif;
    
}

.color-secondary {
    color: var(--secondary-default);
}

.color-tertiary {
    color: var(--tertiary-default);
}

.color-tertiary {
    color: var(--tertiary-default);
}

.text-center {
    text-align: center;
}

.text-large {
    font-size: 18px;
    line-height: 24px;
}

.text-base {
    font-size: 16px;
    line-height: 24px;
}

.text-large-medium {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
}

.text-strong {
    font-weight: 600;
}
    
.text-medium {
    font-weight: 500;
}

.text-small {
    font-size: 14px;
    line-height: 20px;

}

h1 {
    font-size: 80px;
    line-height: 92px;
    font-weight: 600;
    display: inline-block;
}

h2 {
    font-size: 56px;
    line-height: 64px;
    font-weight: 600;
    display: inline-block;
}

h3 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    display: inline-block;
}

h4 {
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
    display: inline-block;
}

h5 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    display: inline-block;
}

h6 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    display: inline-block;
}


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

ul {
    list-style: none;
}


html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: var(--main-default);
  background: var(--global-bg);
}

.max-width {
    max-width: 1622px;
}

.grid {
    display: grid;
    grid-template-colums:repeat(12, 1fr);
}

.container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
}

.legal-docs {
    width: 80%;
    margin: 0 auto;
    padding: 64px;
    background-color: var(--main-invert-default);
}

.card {
    height: 650px;
}

a {
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  transition: all 0.2s;
}

a:visited {
    color: inherit;
}

p {
    font-size: 18px;
    line-height: 24px;
}

.text-hero {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    color: var(--tertiary-default);
}

@media screen and (max-width: 1024px) {
.text-hero {
font-size: 18px;
    line-height: 24px;
}

}


.text-secondary {
    color: var(--secondary-invert);
    font-weight: 400;
}


.link-default {

    color: var(--main-default);

    &:hover {
        color: var(--main-hover);
    }

    &:active {
        color: var(--main-active);
    }

    &:visited {
        color: var(--main-default);
    }

}

.link-inverted, .link-inverted:visited {

    color: var(--main-invert-default);

    &:hover {
        color: var(--main-invert-hover);
    }

    &:active {
        color: var(--main-invert-active);
    }

    &:visited {
        color: var(--main-invert-default);
    }
}


.button-primary, .button-primary:visited {
    display: inline-flex;
    padding: 16px 32px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: var(--main-invert-default);
    background: var(--main-default);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: var(--main-invert-default);
        background: var(--main-hover);
    }

    &:active {
        color: var(--main-invert-default);
        background: var(--main-active);
    }
}


.main {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 64px;
    gap: 64px;
    
}







@media screen and (max-width: 1024px) {
    .main {
         gap: 16px;
         padding: 16px;
    }

}

.w-100 {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
}

.section-shadow {
    box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);
}

.background-gl {
    background-color: var(--main-invert-default);
}

.cell {
    padding: 0 16px;
}

.img-50 {
    max-width: 50%;
    min-width: 50%;
    width: 50%;
    height: 650px;
}

.about-bg {
    background: url("/me.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 650px;
        max-width: 50%;
        min-width: 50%;
        width: 50%;
}

img {
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
}

.display-flex {
    display: flex;
}

flex-grow {
    flex-grow: 1;
}

.flex-column {
    flex-direction: column;
}

.flex-justify-between {
    justify-content: space-between;
}

.flex-justify-center {
    justify-content: center;
}

.flex-justify-stretch {
    justify-content: stretch;
}

.flex-align-center {
    align-items: center;
}

.justify-stretch {
    justinfy-content: sretch;

}

.align-stretch {
    align-items: sretch;

}

.display-grid {
    display-grid;
}

.3-columns {
    grid-template-columns: repeat(3, 1fr);

}



.gap-8 {
    gap: 8px;
}

.gap-16 {
    gap: 16px;
}

.gap-24 {
    gap: 32px;
}

.gap-32 {
    gap: 32px;
}

.gap-64 {
    gap: 64px;
}

.p-8 {
    padding: 8px;
}

.p-16 {
    padding: 16px;
}

.p-32 {
    padding: 32px;
}

.p-64 {
    padding: 64px;
}


.mb-8 {
    margin-bottom: 8px;
}

.mb-16 {
    margin-bottom: 16px;
}

.mb-24 {
    margin-bottom: 24px;
}

.mb-32 {
    margin-bottom: 32px;
}

// MEDIA



@media screen and (max-width: 1024px) {
    h1 {
    font-size: 56px;
    line-height: 64px;
}

h2 {
    font-size: 48px;
    line-height: 56px;

}

h3 {
    font-size: 32px;
    line-height: 40px;
}

h4 {
    font-size: 28px;
    line-height: 36px;
}


}

@media screen and (max-width: 560px) {
    h1 {
        font-size: 40px;
        line-height: 48px;
    }

    h2 {
        font-size: 32px;
        line-height: 40px;
    }

    h3 {
        font-size: 24px;
        line-height: 32px;
    }

    h4 {
        font-size: 20px;
        line-height: 24px;
    }

}



`;
