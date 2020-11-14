import React from "react";
import styled from "styled-components";
import { IconType } from "../interfaces";
import { color } from "../shared/styles";

interface Props {
  type: IconType;
  size: number;
  percent?: number | string;
  onClick?: () => void;
}

export const Icon = ({ onClick, percent, type, size }: Props) => {
  let Icon = Icons[type];

  return <Icon onClick={onClick} percent={percent} size={size} />;
};

export const NavIcon = ({ type, size }: Props) => {
  let Icon = Icons[type];

  return (
    <NavIconContainer>
      <Icon size={size} />
    </NavIconContainer>
  );
};
const NavIconContainer = styled.div`
  margin: 15px 12px 10px 16px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const Search = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M33.2218 33.2218L41.7071 41.7071'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const Bookmark = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M10 44C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 22V4H33V22L27 15.7273L21 22Z'
      fill={color.accent}
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M10 4H38'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const Help = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M24 28.6249V24.6249C27.3137 24.6249 30 21.9386 30 18.6249C30 15.3112 27.3137 12.6249 24 12.6249C20.6863 12.6249 18 15.3112 18 18.6249'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24 37.6249C25.3807 37.6249 26.5 36.5056 26.5 35.1249C26.5 33.7442 25.3807 32.6249 24 32.6249C22.6193 32.6249 21.5 33.7442 21.5 35.1249C21.5 36.5056 22.6193 37.6249 24 37.6249Z'
      fill='#FFF'
    />
  </svg>
);
const Setting = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M36.686 15.171C37.9364 16.9643 38.8163 19.0352 39.2147 21.2727H44V26.7273H39.2147C38.8163 28.9648 37.9364 31.0357 36.686 32.829L40.0706 36.2137L36.2137 40.0706L32.829 36.686C31.0357 37.9364 28.9648 38.8163 26.7273 39.2147V44H21.2727V39.2147C19.0352 38.8163 16.9643 37.9364 15.171 36.686L11.7863 40.0706L7.92939 36.2137L11.314 32.829C10.0636 31.0357 9.18372 28.9648 8.78533 26.7273H4V21.2727H8.78533C9.18372 19.0352 10.0636 16.9643 11.314 15.171L7.92939 11.7863L11.7863 7.92939L15.171 11.314C16.9643 10.0636 19.0352 9.18372 21.2727 8.78533V4H26.7273V8.78533C28.9648 9.18372 31.0357 10.0636 32.829 11.314L36.2137 7.92939L40.0706 11.7863L36.686 15.171Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z'
      fill={color.accent}
      stroke='#FFF'
      strokeWidth='4'
      strokeLinejoin='round'
    />
  </svg>
);
const SearchBar = ({ size }: { size: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    width={size}
    height={size}
  >
    <path
      fillRule='evenodd'
      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
      clipRule='evenodd'
    />
  </svg>
);
const Checkmark = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z'
      fill='#FD6132'
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M16 24L22 30L34 18'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const Like = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const ExpandLeft = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <rect
      x='4'
      y='4'
      width='40'
      height='40'
      rx='3'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M16 4V44'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M9 4H34'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M9 44H34'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M32 20L28 24L32 28'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const ExpandRight = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <rect
      x='4'
      y='4'
      width='40'
      height='40'
      rx='3'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M16 4V44'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M9 4H34'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M9 44H34'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M32 20L28 24L32 28'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const Fire = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M24 44C32.2347 44 38.9998 37.4742 38.9998 29.0981C38.9998 27.0418 38.8953 24.8375 37.7555 21.4116C36.6157 17.9858 36.3861 17.5436 35.1809 15.4279C34.666 19.7454 31.911 21.5448 31.2111 22.0826C31.2111 21.5231 29.5445 15.3359 27.0176 11.6339C24.537 8 21.1634 5.61592 19.1853 4C19.1853 7.06977 18.3219 11.6339 17.0854 13.9594C15.8489 16.2849 15.6167 16.3696 14.0722 18.1002C12.5278 19.8308 11.8189 20.3653 10.5274 22.4651C9.23596 24.565 9 27.3618 9 29.4181C9 37.7942 15.7653 44 24 44Z'
      fill='#D0021B'
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
  </svg>
);
const LowPrice = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <circle
      cx='11'
      cy='11'
      r='5'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <circle
      cx='37'
      cy='37'
      r='5'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M42 6L6 42'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const Discount = ({
  size = 24,
  percent = 0,
}: {
  size: number;
  percent: number | string;
}) => (
  <span
    style={{
      backgroundColor: "#FD6132",
      height: size,
      width: size,
      border: "1px solid #333",
      borderRadius: "50%",
      color: "#FFF",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "2px",
    }}
  >
    <span style={{ fontSize: "0.5rem" }}>{percent}</span>
    <span style={{ fontSize: "0.35rem" }}>%</span>
  </span>
);
const LowStarsCount = ({
  size,
  percent = 0,
}: {
  size: number;
  percent?: number | string;
}) => (
  <span
    style={{
      backgroundColor: "#D0021B",
      height: size,
      width: size,
      border: "1px solid #333",
      borderRadius: "50%",
      color: "#FFF",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span style={{ fontSize: "0.5rem", fontFamily: "Roboto-Bold" }}>
      {percent}
    </span>
    <span style={{ fontSize: "0.35rem" }}>%</span>
  </span>
);
const PriceLow = ({ size = 24 }: { size: number }) => (
  <svg height='16px' width='16px' viewBox='0 0 100 100'>
    <g>
      <path
        fill={color.primary}
        stroke='#333'
        strokeWidth='7'
        strokeLinejoin='round'
        d='M87.2,49H73.9V4.7c0-1.2-1-2.2-2.2-2.2H28.2c-1.2,0-2.2,1-2.2,2.2V49H12.8c-1.8,0-2.8,2.1-1.6,3.5l37.2,44.2    c0.9,1,2.4,1,3.3,0l37.2-44.2C90,51.2,89,49,87.2,49z'
      ></path>
      <path
        // stroke='#fff'
        fill='#fff'
        strokeWidth='4'
        strokeLinejoin='round'
        d='M52.9,60.6v3.7c0,0.8-0.7,1.5-1.5,1.5h-2.9c-0.8,0-1.5-0.7-1.5-1.5v-3.7    c-4.6-0.2-8.5-3.6-9.3-8.1c-0.2-0.9,0.5-1.8,1.5-1.8h2.9c0.7,0,1.3,0.4,1.4,1.1c0.5,1.7,2,3,3.9,3h4.8c2.1,0,4-1.6,4.2-3.7    c0.2-2.4-1.7-4.4-4-4.4h-4.7c-5.5,0-10.1-4.5-10.1-9.9c0-5.3,4.2-9.6,9.4-9.8v-3.7c0-0.8,0.7-1.5,1.5-1.5h2.9    c0.8,0,1.5,0.7,1.5,1.5v3.7c4.6,0.2,8.5,3.6,9.3,8.1c0.2,0.9-0.5,1.8-1.5,1.8h-2.9c-0.7,0-1.3-0.4-1.4-1.1c-0.5-1.7-2-3-3.9-3    h-4.8c-2.1,0-4,1.6-4.2,3.7c-0.2,2.4,1.7,4.4,4,4.4h4.7c5.5,0,10.1,4.5,10.1,9.9C62.3,56,58.2,60.3,52.9,60.6z'
      ></path>
    </g>
  </svg>
);
const Star = ({ size, percent = 100 }: { size: number; percent?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <linearGradient id='grad2'>
        <stop offset='0%' stopColor={color.primary} />
        <stop offset={percent + "%"} stopColor={color.primary} />
        <stop offset={percent + "%"} stopColor='#fff' />
        <stop offset='100%' stopColor='#fff' />
      </linearGradient>
    </defs>
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z'
      fill='url(#grad2)'
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
  </svg>
);
const Close = ({ size = 24 }: { size: number }) => (
  <svg viewBox='0 0 20 20' fill='#EC1E26' width={size} height={size}>
    <path
      fillRule='evenodd'
      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
      clipRule='evenodd'
    />
  </svg>
);
const Plus = ({ size = 24 }: { size: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    width={size}
    height={size}
  >
    <path
      fillRule='evenodd'
      d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
      clipRule='evenodd'
    />
  </svg>
);
const ChevronDown = ({ size = 24 }: { size: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    width={size}
    height={size}
  >
    <path
      fillRule='evenodd'
      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
      clipRule='evenodd'
    />
  </svg>
);

const Pdf = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path d='M48 0H0V48H48V0Z' fill='white' fillOpacity='0.01' />
    <path
      d='M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18 18H30V25.9917L18.0083 26L18 18Z'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path d='M18 18V34' stroke='#FFF' strokeWidth='4' strokeLinecap='butt' />
  </svg>
);
const Sort = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M24 42L15 29H33L24 42Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M24 6L15 19H33L24 6Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
  </svg>
);
const Grid = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <rect
      x='4'
      y='4'
      width='40'
      height='40'
      rx='3'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <rect
      x='12'
      y='12'
      width='8'
      height='8'
      fill={color.accent}
      stroke='#FFF'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <rect
      x='28'
      y='12'
      width='8'
      height='8'
      fill={color.accent}
      stroke='#FFF'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <rect
      x='12'
      y='28'
      width='8'
      height='8'
      fill={color.accent}
      stroke='#FFF'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <rect
      x='28'
      y='28'
      width='8'
      height='8'
      fill={color.accent}
      stroke='#FFF'
      strokeWidth='4'
      strokeLinejoin='round'
    />
  </svg>
);
const ArrowCircleLeft = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M32.4917 24.5H14.4917'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M23.4917 15.5L14.4917 24.5L23.4917 33.5'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const ArrowCircleRight = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M14.4917 24.5H32.4917'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M23.4917 15.5L32.4917 24.5L23.4917 33.5'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);

const ArrowLeftC = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M27 33L18 24L27 15'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);

const ArrowRightC = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M21 33L30 24L21 15'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);

const Speed = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M30.2972 18.7786C30.2972 18.7786 27.0679 27.8808 25.5334 29.4699C23.9988 31.0591 21.4665 31.1033 19.8774 29.5687C18.2882 28.0341 18.244 25.5018 19.7786 23.9127C21.3132 22.3236 30.2972 18.7786 30.2972 18.7786Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M38.8492 38.8492C42.6495 35.049 45 29.799 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 29.799 5.35051 35.049 9.15076 38.8492'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M24 4V8'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M38.8454 11.1421L35.7368 13.6593'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M42.5225 27.2328L38.6251 26.333'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M5.47749 27.2328L9.37497 26.333'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M9.15463 11.1421L12.2632 13.6593'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const Time = ({ size }: { size: number }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fillOpacity='0.01' />
    <path
      d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M24.0083 12L24.0071 24.0088L32.4865 32.4882'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);
const Calendar = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width={size} height={size} fill='white' fillOpacity='0.01' />
    <path
      d='M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z'
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M16 4V12'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M32 4V12'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M28 34H34'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M14 34H20'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M28 26H34'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M14 26H20'
      stroke='#FFF'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);

const Column = ({ size = 24 }: { size?: number }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        borderRadius: "25%",
        border: "2px solid #333",
        backgroundColor: "#2F88FF",
        width: 7,
        height: 18,
        marginRight: 1,
      }}
    ></div>
    <div
      style={{
        borderRadius: "25%",
        border: "2px solid #333",
        backgroundColor: "#2F88FF",
        width: 7,
        height: 18,
        marginRight: 1,
      }}
    ></div>
    <div
      style={{
        borderRadius: "25%",
        border: "2px solid #333",
        backgroundColor: "#2F88FF",
        width: 7,
        height: 18,
      }}
    ></div>
  </div>
);

const MainLayout = ({ size = 24 }: { size?: number }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        borderRadius: "15%",
        border: "2px solid #333",
        backgroundColor: "#2F88FF",
        width: 21,
        height: 18,
        marginRight: 1,
      }}
    ></div>
    <div
      style={{
        borderRadius: "25%",
        border: "2px solid #333",
        backgroundColor: "#2F88FF",
        width: 7,
        height: 18,
      }}
    ></div>
  </div>
);
const DoubleLayout = ({ size = 24 }: { size?: number }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        borderRadius: "25%",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        border: "2px solid #333",
        backgroundColor: "#2F88FF",
        borderRight: 0,
        width: 10.5,
        height: 18,
      }}
    ></div>
    <div
      style={{
        borderRadius: "25%",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        border: "2px solid #333",
        backgroundColor: "#2F88FF",
        width: 10.5,
        height: 18,
        marginRight: 1.2,
      }}
    ></div>
    <div
      style={{
        borderRadius: "25%",
        border: "2px solid #333",
        backgroundColor: "#2F88FF",
        width: 7,
        height: 18,
      }}
    ></div>
  </div>
);

const Product = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox='0 0 48 48' fill={color.primary}>
    <rect width={size} height={size} fill={color.primary} fillOpacity='0.01' />
    <path
      d='M4 14L3.10557 12.2111C2.428 12.5499 2 13.2425 2 14H4ZM24 4L24.8944 2.21115C24.3314 1.92962 23.6686 1.92962 23.1056 2.21115L24 4ZM44 14H46C46 13.2425 45.572 12.5499 44.8944 12.2111L44 14ZM44 34L44.8944 35.7889C45.572 35.4501 46 34.7575 46 34H44ZM24 44L23.1056 45.7889C23.6686 46.0704 24.3314 46.0704 24.8944 45.7889L24 44ZM4 34H2C2 34.7575 2.428 35.4501 3.10557 35.7889L4 34ZM4.89443 15.7889L24.8944 5.78885L23.1056 2.21115L3.10557 12.2111L4.89443 15.7889ZM42 14V34H46V14H42ZM43.1056 32.2111L23.1056 42.2111L24.8944 45.7889L44.8944 35.7889L43.1056 32.2111ZM24.8944 42.2111L4.89443 32.2111L3.10557 35.7889L23.1056 45.7889L24.8944 42.2111ZM6 34V14H2V34H6ZM44.8944 12.2111L24.8944 2.21115L23.1056 5.78885L43.1056 15.7889L44.8944 12.2111Z'
      fill='#333'
    />
    <path
      d='M4 14L24 24'
      stroke='#333'
      fill={color.primary}
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24 24V44V24Z'
      fill={color.primary}
    />
    <path
      d='M24 44V24'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M44 14L24 24'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M34.8944 10.7889C35.8824 10.2949 36.2828 9.09353 35.7889 8.10557C35.2949 7.11762 34.0935 6.71717 33.1056 7.21115L34.8944 10.7889ZM13.1056 17.2111C12.1176 17.7051 11.7172 18.9065 12.2111 19.8944C12.7051 20.8824 13.9065 21.2828 14.8944 20.7889L13.1056 17.2111ZM33.1056 7.21115L13.1056 17.2111L14.8944 20.7889L34.8944 10.7889L33.1056 7.21115Z'
      fill='#333'
    />
  </svg>
);

const Price = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width={size} height={size} fill='white' fillOpacity='0.01' />
    <path
      d='M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z'
      fill={color.primary}
      stroke='#333'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z'
      fill='#FFF'
    />
  </svg>
);

const Sales = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g>
      <g>
        <rect
          fillOpacity='0.01'
          fill='#FFFFFF'
          x='0'
          y='0'
          width={size}
          height={size}
          strokeWidth='4'
          stroke='none'
          fillRule='evenodd'
        />
        <rect
          stroke='#333'
          strokeWidth='4'
          fill={color.primary}
          fillRule='nonzero'
          strokeLinejoin='round'
          x='6'
          y='6'
          width='36'
          height='36'
          rx='3'
        />
        <g transform='translate(13.000000, 13.000000)'>
          <polyline
            transform='translate(10.729923, 10.927306) rotate(-135.000000) translate(-10.729923, -10.927306) '
            points='13.8290808 -0.525973264 13.8290808 7.47402674 7.63076535 7.48132266 7.6591204 22.3805856'
            strokeLinecap='butt'
            strokeLinejoin='round'
            strokeWidth='4'
            stroke='#FFF'
            fill='none'
            fillRule='evenodd'
          />
          <polyline
            points='13 5 21 5 21 13'
            strokeLinecap='butt'
            strokeLinejoin='round'
            strokeWidth='4'
            stroke='#FFF'
            fill='none'
            fillRule='evenodd'
          />
        </g>
      </g>
    </g>
  </svg>
);

export const Trophy = ({
  size,
  type,
}: {
  size: number;
  type: "bronze" | "silver" | "gold";
}) => {
  const types = {
    bronze: "#bb8c51",
    silver: "#d1e8f5",
    gold: "#f5a623",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <rect
          width={size}
          height={size}
          fill='white'
          fillOpacity='0.01'
          strokeLinejoin='round'
          strokeWidth='4'
          stroke='none'
          fillRule='evenodd'
        />
        <g transform='translate(4.000000, 4.000000)'>
          <path
            d='M20,26 C26.627417,26 32,20.4693999 32,13.6470588 L32,0 L8,0 L8,13.6470588 C8,20.4693999 13.372583,26 20,26 Z'
            fill={types[type]}
            fillRule='nonzero'
            strokeLinejoin='round'
            strokeWidth='4'
            stroke='#333'
          />
          <path
            d='M8,17 L8,7 L0,7 C0,13.6666667 4,17 8,17 Z'
            strokeLinecap='butt'
            strokeLinejoin='round'
            strokeWidth='4'
            stroke='#333'
            fill='none'
            fillRule='evenodd'
          />
          <path
            d='M32,17 L32,7 L40,7 C40,13.6666667 36,17 32,17 Z'
            strokeLinecap='butt'
            strokeLinejoin='round'
            strokeWidth='4'
            stroke='#333'
            fill='none'
            fillRule='evenodd'
          />
          <path
            d='M20,28 L20,32'
            strokeLinecap='butt'
            strokeLinejoin='round'
            strokeWidth='4'
            stroke='#333'
            fill='none'
            fillRule='evenodd'
          />
          <polygon
            fill={types[type]}
            fillRule='nonzero'
            points='11 38 14.690036 32 25.0425158 32 29 38'
            strokeLinejoin='round'
            strokeWidth='4'
            stroke='#333'
          />
        </g>
      </g>
    </svg>
  );
};

const Delete = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width={size} height={size} fill='white' fillOpacity='0.01' />
    <path
      d='M15 12L16.2 5H31.8L33 12'
      stroke='#333'
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path d='M6 12H42' stroke='#333' strokeWidth='2' strokeLinecap='butt' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M37 12L35 43H13L11 12H37Z'
      fill='#EC1E26'
      stroke='#333'
      strokeWidth='2'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path d='M19 35H29' stroke='#FFF' strokeWidth='2' strokeLinecap='butt' />
  </svg>
);

const Link = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width={size} height={size} fill='white' fillOpacity='0.01' />
    <path
      d='M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
    <path
      d='M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18'
      stroke='#333'
      strokeWidth='4'
      strokeLinecap='butt'
      strokeLinejoin='round'
    />
  </svg>
);

const Clipboard = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width={size} height={size} fill='white' fill-opacity='0.01' />
    <path
      d='M17 7H16H10C8.89543 7 8 7.89543 8 9L8 42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V9C40 7.89543 39.1046 7 38 7H33.0499H31'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <rect
      x='17'
      y='4'
      width='14'
      height='6'
      fill={color.primary}
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
  </svg>
);

const Question = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox='0 0 1024 1024'>
    <path d='M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 0 0-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z' />
  </svg>
);

const Swap = ({ size }: { size: number }) => (
  <svg
    width='24'
    rotate='180'
    height='24'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M10 8L4 14L10 20'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M38 28L44 34L38 40'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M4 14H44'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M4 34H44'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);

const Save = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z'
      fill='#2f88ff'
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6'
      fill='#43CCF8'
    />
    <path
      d='M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z'
      stroke='#FFF'
      stroke-width='4'
      stroke-linejoin='round'
    />
    <path
      d='M9 6H34.2814'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M14 26H34'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M14 34H24.0083'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);
const Reset = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M39.5 24C39.5 25.1046 40.3954 26 41.5 26C42.6046 26 43.5 25.1046 43.5 24H39.5ZM16.6101 7.36573L17.3762 9.21319L16.6101 7.36573ZM13.4993 9.03158L12.3867 7.36962L13.4993 9.03158ZM6.86962 12.8867C6.25515 13.8046 6.50111 15.0468 7.41898 15.6612C8.33686 16.2757 9.57908 16.0298 10.1935 15.1119L6.86962 12.8867ZM7.5 24C7.5 22.8954 6.60457 22 5.5 22C4.39543 22 3.5 22.8954 3.5 24H7.5ZM30.3899 40.6343L29.6238 38.7868L30.3899 40.6343ZM33.5007 38.9684L34.6133 40.6304L33.5007 38.9684ZM40.1304 35.1133C40.7449 34.1954 40.4989 32.9532 39.581 32.3388C38.6631 31.7243 37.4209 31.9702 36.8065 32.8881L40.1304 35.1133ZM43.5 24C43.5 12.9543 34.5457 4 23.5 4V8C32.3366 8 39.5 15.1634 39.5 24H43.5ZM23.5 4C20.792 4 18.2049 4.53931 15.844 5.51826L17.3762 9.21319C19.2599 8.4321 21.327 8 23.5 8V4ZM15.844 5.51826C14.6257 6.02345 13.4686 6.6453 12.3867 7.36962L14.6119 10.6935C15.4778 10.1138 16.403 9.61673 17.3762 9.21319L15.844 5.51826ZM12.3867 7.36962C11.2963 8.0996 10.2819 8.93378 9.35786 9.85786L12.1863 12.6863C12.9267 11.9459 13.7391 11.2778 14.6119 10.6935L12.3867 7.36962ZM9.35786 9.85786C8.43378 10.7819 7.5996 11.7963 6.86962 12.8867L10.1935 15.1119C10.7778 14.2391 11.4459 13.4267 12.1863 12.6863L9.35786 9.85786ZM3.5 24C3.5 35.0457 12.4543 44 23.5 44V40C14.6634 40 7.5 32.8366 7.5 24H3.5ZM23.5 44C26.208 44 28.7951 43.4607 31.156 42.4817L29.6238 38.7868C27.7401 39.5679 25.673 40 23.5 40V44ZM31.156 42.4817C32.3743 41.9766 33.5314 41.3547 34.6133 40.6304L32.3881 37.3065C31.5222 37.8862 30.597 38.3833 29.6238 38.7868L31.156 42.4817ZM34.6133 40.6304C35.7037 39.9004 36.7181 39.0662 37.6421 38.1421L34.8137 35.3137C34.0733 36.0541 33.2609 36.7222 32.3881 37.3065L34.6133 40.6304ZM37.6421 38.1421C38.5662 37.2181 39.4004 36.2037 40.1304 35.1133L36.8065 32.8881C36.2222 33.7609 35.5541 34.5733 34.8137 35.3137L37.6421 38.1421Z'
      fill='#333'
    />
    <path
      d='M41.5 8V24'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M5.5 24L5.5 40'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);
const Undo = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M6 9V17H14'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);

const Icons: Record<keyof any, React.ElementType> = {
  Search: Search,
  Bookmark: Bookmark,
  Help: Help,
  Setting: Setting,
  SearchBar: SearchBar,
  Checkmark: Checkmark,
  Like: Like,
  ExpandRight: ExpandRight,
  ExpandLeft: ExpandLeft,
  Fire: Fire,
  LowPrice: LowPrice,
  Discount: Discount,
  LowStarsCount: LowStarsCount,
  PriceLow: PriceLow,
  Plus: Plus,
  Close: Close,
  ChevronDown: ChevronDown,
  Pdf: Pdf,
  Sort: Sort,
  Grid: Grid,
  Star: Star,
  ArrowCircleLeft: ArrowCircleLeft,
  ArrowCircleRight: ArrowCircleRight,
  ArrowLeftC: ArrowLeftC,
  ArrowRightC: ArrowRightC,
  Speed: Speed,
  Time: Time,
  Calendar: Calendar,
  Column: Column,
  MainLayout: MainLayout,
  DoubleLayout: DoubleLayout,
  Product: Product,
  Price: Price,
  Sales: Sales,
  Delete: Delete,
  Link: Link,
  Clipboard,
  Question,
  Swap,
  Save,
  Undo,
  Reset,
};
