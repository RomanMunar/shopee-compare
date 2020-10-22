import React from "react";
// import styled from "styled-components";

interface Props {
  type: "Search" | "Bookmark" | "Help" | "Setting" | "SearchBar";
  size: number;
  left?: number;
  top?: number;
}

export const Icon = ({ type, size, left, top }: Props) => {
  let Icon = Icons[type];

  return <Icon size={size} left={left} top={top} />;
};

export const NavIcon = ({ type, size, left, top }: Props) => {
  let Icon = Icons[type];

  return (
    <div style={{ margin: "18px 12px 0 16px" }}>
      <Icon size={size} left={left} top={top} />
    </div>
  );
};

const SearchIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z'
      fill='#2F88FF'
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
    <path
      d='M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M33.2218 33.2218L41.7071 41.7071'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);
const BookmarkIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M10 44C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10Z'
      fill='#2F88FF'
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M21 22V4H33V22L27 15.7273L21 22Z'
      fill='#43CCF8'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M10 4H38'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);
const HelpIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z'
      fill='#2F88FF'
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
    <path
      d='M24 28.6249V24.6249C27.3137 24.6249 30 21.9386 30 18.6249C30 15.3112 27.3137 12.6249 24 12.6249C20.6863 12.6249 18 15.3112 18 18.6249'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M24 37.6249C25.3807 37.6249 26.5 36.5056 26.5 35.1249C26.5 33.7442 25.3807 32.6249 24 32.6249C22.6193 32.6249 21.5 33.7442 21.5 35.1249C21.5 36.5056 22.6193 37.6249 24 37.6249Z'
      fill='#FFF'
    />
  </svg>
);
const SettingIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M36.686 15.171C37.9364 16.9643 38.8163 19.0352 39.2147 21.2727H44V26.7273H39.2147C38.8163 28.9648 37.9364 31.0357 36.686 32.829L40.0706 36.2137L36.2137 40.0706L32.829 36.686C31.0357 37.9364 28.9648 38.8163 26.7273 39.2147V44H21.2727V39.2147C19.0352 38.8163 16.9643 37.9364 15.171 36.686L11.7863 40.0706L7.92939 36.2137L11.314 32.829C10.0636 31.0357 9.18372 28.9648 8.78533 26.7273H4V21.2727H8.78533C9.18372 19.0352 10.0636 16.9643 11.314 15.171L7.92939 11.7863L11.7863 7.92939L15.171 11.314C16.9643 10.0636 19.0352 9.18372 21.2727 8.78533V4H26.7273V8.78533C28.9648 9.18372 31.0357 10.0636 32.829 11.314L36.2137 7.92939L40.0706 11.7863L36.686 15.171Z'
      fill='#2F88FF'
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
    <path
      d='M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z'
      fill='#43CCF8'
      stroke='#FFF'
      stroke-width='4'
      stroke-linejoin='round'
    />
  </svg>
);
const SearchBarIcon = ({ size }: { size: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path
      fill-rule='evenodd'
      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
      clip-rule='evenodd'
    />
  </svg>
);

const Icons: Record<keyof any, React.ElementType> = {
  Search: SearchIcon,
  Bookmark: BookmarkIcon,
  Help: HelpIcon,
  Setting: SettingIcon,
  SearchBar: SearchBarIcon,
};
