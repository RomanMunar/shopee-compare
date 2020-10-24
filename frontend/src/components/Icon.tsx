import React from "react";
import { color } from "../styles";

interface Props {
  type:
    | "Search"
    | "Bookmark"
    | "Help"
    | "Setting"
    | "SearchBar"
    | "Checkmark"
    | "Like"
    | "ExpandLeft"
    | "ExpandRight"
    | "Fire"
    | "LowPrice"
    | "Discount"
    | "LowStarsCount"
    | "PriceLow";
  size: number;
  percent?: number | string;
}

export const Icon = ({ percent, type, size }: Props) => {
  let Icon = Icons[type];

  return <Icon percent={percent} size={size} />;
};

export const NavIcon = ({ type, size }: Props) => {
  let Icon = Icons[type];

  return (
    <div style={{ margin: "18px 12px 0 16px" }}>
      <Icon size={size} />
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
    width={size}
    height={size}
  >
    <path
      fill-rule='evenodd'
      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
      clip-rule='evenodd'
    />
  </svg>
);
const CheckmarkIcon = ({ size }: { size: number }) => (
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
      fill='#FD6132'
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
    <path
      d='M16 24L22 30L34 18'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);
const LikeIcon = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z'
      fill='#2F88FF'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);
const ExpandLeftIcon = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <rect
      x='4'
      y='4'
      width='40'
      height='40'
      rx='3'
      fill='#2F88FF'
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
    <path
      d='M16 4V44'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M9 4H34'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M9 44H34'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M32 20L28 24L32 28'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);
const ExpandRightIcon = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <rect
      x='4'
      y='4'
      width='40'
      height='40'
      rx='3'
      fill='#2F88FF'
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
    <path
      d='M16 4V44'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M9 4H34'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M9 44H34'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M32 20L28 24L32 28'
      stroke='#FFF'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);
const FireIcon = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M24 44C32.2347 44 38.9998 37.4742 38.9998 29.0981C38.9998 27.0418 38.8953 24.8375 37.7555 21.4116C36.6157 17.9858 36.3861 17.5436 35.1809 15.4279C34.666 19.7454 31.911 21.5448 31.2111 22.0826C31.2111 21.5231 29.5445 15.3359 27.0176 11.6339C24.537 8 21.1634 5.61592 19.1853 4C19.1853 7.06977 18.3219 11.6339 17.0854 13.9594C15.8489 16.2849 15.6167 16.3696 14.0722 18.1002C12.5278 19.8308 11.8189 20.3653 10.5274 22.4651C9.23596 24.565 9 27.3618 9 29.4181C9 37.7942 15.7653 44 24 44Z'
      fill='#D0021B'
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
  </svg>
);
const LowPriceIcon = ({ size = 24 }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <circle
      cx='11'
      cy='11'
      r='5'
      fill='#2F88FF'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <circle
      cx='37'
      cy='37'
      r='5'
      fill='#2F88FF'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
    <path
      d='M42 6L6 42'
      stroke='#333'
      stroke-width='4'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />
  </svg>
);
const DiscountIcon = ({
  size = 24,
  percent = 0,
}: {
  size: number;
  percent: number | string;
}) => (
  <div
    style={{
      backgroundColor: "#FD6132",
      height: size,
      width: size,
      border: "1px solid #333",
      borderRadius: "50%",
      color: "#FFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "2px",
    }}
  >
    <span style={{ fontSize: "0.5rem" }}>{percent}</span>
    <span style={{ fontSize: "0.35rem" }}>%</span>
  </div>
);
const LowStarsCountIcon = ({
  size,
  percent = 0,
}: {
  size: number;
  percent?: number | string;
}) => (
  <div
    style={{
      backgroundColor: "#D0021B",
      height: size,
      width: size,
      border: "1px solid #333",
      borderRadius: "50%",
      color: "#FFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span style={{ fontSize: "0.5rem" }}>{percent}</span>
    <span style={{ fontSize: "0.35rem" }}>%</span>
  </div>
);
const PriceLowIcon = ({ size = 24 }: { size: number }) => (
  <svg height='16px' width='16px' viewBox='0 0 100 100'>
    <g>
      <path
        fill='#2F88FF'
        stroke='#333'
        stroke-width='7'
        stroke-linejoin='round'
        d='M87.2,49H73.9V4.7c0-1.2-1-2.2-2.2-2.2H28.2c-1.2,0-2.2,1-2.2,2.2V49H12.8c-1.8,0-2.8,2.1-1.6,3.5l37.2,44.2    c0.9,1,2.4,1,3.3,0l37.2-44.2C90,51.2,89,49,87.2,49z'
      ></path>
      <path
        // stroke='#fff'
        fill='#fff'
        stroke-width='4'
        stroke-linejoin='round'
        d='M52.9,60.6v3.7c0,0.8-0.7,1.5-1.5,1.5h-2.9c-0.8,0-1.5-0.7-1.5-1.5v-3.7    c-4.6-0.2-8.5-3.6-9.3-8.1c-0.2-0.9,0.5-1.8,1.5-1.8h2.9c0.7,0,1.3,0.4,1.4,1.1c0.5,1.7,2,3,3.9,3h4.8c2.1,0,4-1.6,4.2-3.7    c0.2-2.4-1.7-4.4-4-4.4h-4.7c-5.5,0-10.1-4.5-10.1-9.9c0-5.3,4.2-9.6,9.4-9.8v-3.7c0-0.8,0.7-1.5,1.5-1.5h2.9    c0.8,0,1.5,0.7,1.5,1.5v3.7c4.6,0.2,8.5,3.6,9.3,8.1c0.2,0.9-0.5,1.8-1.5,1.8h-2.9c-0.7,0-1.3-0.4-1.4-1.1c-0.5-1.7-2-3-3.9-3    h-4.8c-2.1,0-4,1.6-4.2,3.7c-0.2,2.4,1.7,4.4,4,4.4h4.7c5.5,0,10.1,4.5,10.1,9.9C62.3,56,58.2,60.3,52.9,60.6z'
      ></path>
    </g>
  </svg>
);
export const StarIcon = ({
  size,
  percent = 0,
  red = false,
}: {
  size: number;
  percent?: number;
  red?: boolean;
}) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <linearGradient id='grad2'>
        <stop offset='0%' stop-color='#2F88FF' />
        <stop offset={percent + "%"} stop-color='#2F88FF' />
        <stop offset={percent + "%"} stop-color='white' />
        <stop offset='100%' stop-color='white' />
      </linearGradient>
    </defs>
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z'
      fill={red ? color.danger : "url(#grad2)"}
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
  </svg>
);

const Icons: Record<keyof any, React.ElementType> = {
  Search: SearchIcon,
  Bookmark: BookmarkIcon,
  Help: HelpIcon,
  Setting: SettingIcon,
  SearchBar: SearchBarIcon,
  Checkmark: CheckmarkIcon,
  Like: LikeIcon,
  ExpandRight: ExpandRightIcon,
  ExpandLeft: ExpandLeftIcon,
  Fire: FireIcon,
  LowPrice: LowPriceIcon,
  Discount: DiscountIcon,
  LowStarsCount: LowStarsCountIcon,
  PriceLow: PriceLowIcon,
};
