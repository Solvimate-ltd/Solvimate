import { url } from "inspector";
import Link from "next/link";

export const menu = {
  open: {
    width: '250px',
    height: '300px',
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: '55px',
    height: '40px',
    top: '0px',
    right: '-4px',
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const links = [
  {
    href: '/',
    linkTo: 'Solutions',
  },
  {
    href: '/',
    linkTo: 'Learn',
  },
  {
    href: '/',
    linkTo: 'About',
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfn31IKQFQ4yD-z7Yjyt_g00A9KNUhL-WwbHkH0apYKr4jXzQ/viewform',
    linkTo: 'Customers',

  },{
    href: '/',
    linkTo: 'Jobs',
  },
];
