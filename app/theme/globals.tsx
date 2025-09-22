"use client";
import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
:root {
  --max-width: 1750px;
  --border-radius: 0;
  --font-mono:  ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

    --white: #FFFFFF;
    --grey-50: #F0F1F4;
    --grey-100: #E7E8EC;
    --grey-200: #C6C8D2;
    --grey-300: #A1A4B5;
    --grey-400: #626883;
    --grey-500: #4E5369;
    --grey-600: #3F4354;
    --grey-700: #313442;
    --grey-800: #1B1D25;
    --grey-900: #0F1014;

   --green-50: #E8FCEC;
    --green-100: #D8FBDF;
    --green-200: #a3f5c5ff;
    --green-300: #68eea6ff;
    --green-400: #17ce5aff;
    --green-500: #12a54fff;
    --green-600: #0f843cff;
    --green-700: #23512C;
    --green-800: #162A1A;
    --green-900: #0C170E;

   --blue-50: #e8effcff;
    --blue-100: #d8e7fbff;
    --blue-200: #a3c5f5ff;
    --blue-300: #689beeff;
    --blue-400: #175dceff;
    --blue-500: #1248a5ff;
    --blue-600: #0f3a84ff;
    --blue-700: #232f51ff;
    --blue-800: #161d2aff;
    --blue-900: #0c0f17ff;

    /* COLORS */
    --main-default: var(--grey-900);
    --main-hover: var(--grey-800);
    --main-active: var(--grey-700);
    --main-invert-default: var(--grey-50);
    --main-invert-hover: var(--grey-100);
    --main-invert-active: var(--grey-200);
    
    --secondary-default: var(--grey-600);
    --secondary-invert: var(--grey-300);;
    --tertiary-default: var(--grey-500);

    --border-clean: var(--grey-200);
    --border-clean-invert: var(--grey-600);

    --main-invert-default: var(--grey-50);
    --main-invert-hover: var(--grey-100);
    --main-invert-active: var(--grey-200);

    
    --global-bg: var(--grey-50);
    --subsection-bg: var(--grey-100);
    --section-bg: var(--white);
    --status-bg-subtle: var(--green-50);
    --status-bg-default: var(--green-500);
    --info-bg-subtle: var(--green-50);
    --info-bg-default: var(--green-500);

    /* TYPOGRAPHY */
    font-family: Inter, sans-serif;

    .gap-section {
        gap: 64;
    
    }
    
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
    background-color: var(--section-bg);
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

p, li {
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
    p, a, li {
        font-size: 14px;
        line-height: 20px;
}

}
@media screen and (max-width: 560px) {
    .text-hero {
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
    }
    p, a, li {
        font-size: 14px;
        line-height: 20px;
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
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 64px;
    gap: 64px;
    
}


@media screen and (max-width: 1024px) {
    .main {
         gap: 24px;
         padding: 16px;
    }

}


@media screen and (max-width: 560px) {
    .main {
         gap: 16px;    
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
    background-color: var(--section-bg);
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

.mt-48 {
    margin-top: 80px;
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
        font-size: 32px;
        line-height: 40px;
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
