import React from 'react'

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.25 12.2743h15M10.2998 18.2987l-6.05-6.024 6.05-6.02501"
        stroke="#00adee"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
)

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.75 11.7257h-15M13.7002 5.70131l6.05 6.02399-6.05 6.025"
        stroke="#00adee"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
)

export const PrevButtonCircle = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.25 12.2743h15M10.2998 18.2987l-6.05-6.024 6.05-6.02501"
        stroke="#0451dd"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
)

export const NextButtonCircle = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next embla__buttonCircle"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.75 11.7257h-15M13.7002 5.70131l6.05 6.02399-6.05 6.025"
        stroke="#0451dd"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
)
