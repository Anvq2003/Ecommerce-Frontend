// Header
import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  width?: number;
  height?: number;
  isFilled?: boolean;
  className?: string;
  [x: string]: any;
};

export const SearchIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Light/Search">
      <g id="Search">
        <circle
          id="Ellipse_739"
          cx="11.7669"
          cy="11.7669"
          r="8.98856"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_181"
          d="M18.0186 18.4854L21.5426 22.0002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export const CartIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Iconly/Light/Buy">
      <g id="Buy">
        <path
          id="Stroke 1"
          d="M2.75012 3.24988L4.83012 3.60988L5.79312 15.0829C5.87012 16.0199 6.65312 16.7389 7.59312 16.7359H18.5021C19.3991 16.7379 20.1601 16.0779 20.2871 15.1899L21.2361 8.63188C21.3421 7.89888 20.8331 7.21888 20.1011 7.11288C20.0371 7.10388 5.16412 7.09888 5.16412 7.09888"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M14.1251 10.7948H16.8981"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.15447 20.202C7.45547 20.202 7.69847 20.446 7.69847 20.746C7.69847 21.047 7.45547 21.291 7.15447 21.291C6.85347 21.291 6.61047 21.047 6.61047 20.746C6.61047 20.446 6.85347 20.202 7.15447 20.202Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4347 20.202C18.7357 20.202 18.9797 20.446 18.9797 20.746C18.9797 21.047 18.7357 21.291 18.4347 21.291C18.1337 21.291 17.8907 21.047 17.8907 20.746C17.8907 20.446 18.1337 20.202 18.4347 20.202Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.15447 20.202C7.45547 20.202 7.69847 20.446 7.69847 20.746C7.69847 21.047 7.45547 21.291 7.15447 21.291C6.85347 21.291 6.61047 21.047 6.61047 20.746C6.61047 20.446 6.85347 20.202 7.15447 20.202Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4347 20.202C18.7357 20.202 18.9797 20.446 18.9797 20.746C18.9797 21.047 18.7357 21.291 18.4347 21.291C18.1337 21.291 17.8907 21.047 17.8907 20.746C17.8907 20.446 18.1337 20.202 18.4347 20.202Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export const HeartIcon = ({ size = 24, width, height, isFilled = false, ...props }: IconSvgProps) =>
  isFilled ? (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={38} className="mt-3" viewBox="0 0 40 38" fill="none">
      <g filter="url(#filter0_d_49120_5021)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8719 14.5983C9.79887 11.2483 11.0529 7.41932 14.5699 6.28632C16.4199 5.68932 18.4619 6.04132 19.9999 7.19832C21.4549 6.07332 23.5719 5.69332 25.4199 6.28632C28.9369 7.41932 30.1989 11.2483 29.1269 14.5983C27.4569 19.9083 19.9999 23.9983 19.9999 23.9983C19.9999 23.9983 12.5979 19.9703 10.8719 14.5983Z"
          fill="#F94545"
        />
      </g>
      <path
        d="M24 9.69922C25.07 10.0452 25.826 11.0002 25.917 12.1212"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_49120_5021"
          x="0.5"
          y={0}
          width="38.9971"
          height="37.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.270588 0 0 0 0 0.270588 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_49120_5021" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_49120_5021" result="shape" />
        </filter>
      </defs>
    </svg>
  ) : (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Love=Off">
        <g id="Heart">
          <path
            id="Stroke 1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Stroke 3"
            d="M16 6.69995C17.07 7.04595 17.826 8.00095 17.917 9.12195"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );

export const ArrayBottomIcon = ({ size = 12, width, height, ...props }: IconSvgProps) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 4.25L6 7.75L2.5 4.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// MenuMega
export const CircleIcon = ({ size = 30, width, height, ...props }: IconSvgProps) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="15" cy="15" r="15" fill="#FFB700" />
    <circle cx="15" cy="15" r="15" fill="white" fill-opacity="0.5" />
  </svg>
);

export const GridIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Title
export const FilterIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.33 16.593H4.0293"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.1406 6.90164H19.4413"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.72629 6.84625C8.72629 5.5506 7.66813 4.5 6.36314 4.5C5.05816 4.5 4 5.5506 4 6.84625C4 8.14191 5.05816 9.19251 6.36314 9.19251C7.66813 9.19251 8.72629 8.14191 8.72629 6.84625Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9997 16.5533C19.9997 15.2576 18.9424 14.207 17.6374 14.207C16.3316 14.207 15.2734 15.2576 15.2734 16.5533C15.2734 17.8489 16.3316 18.8995 17.6374 18.8995C18.9424 18.8995 19.9997 17.8489 19.9997 16.5533Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Product
export const StarIcon = ({ size = 24, width, height, isFilled = false, ...props }: IconSvgProps) =>
  isFilled ? (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
        fill="#FFB700"
      />
    </svg>
  ) : (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Iconly/Light/Star">
        <g id="Star">
          <path
            id="Stroke 1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );

export const LogoLight = ({ width = 190, height = 32, ...props }: IconSvgProps) => (
  <svg width={width} height={height} viewBox="0 0 190 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.79999 0H27.2L32 8V30.4C32 31.2837 31.2837 32 30.4 32H1.6C0.716344 32 0 31.2837 0 30.4V8L4.79999 0ZM2.79886 8H29.2011L25.8411 2.4H6.15888L2.79886 8ZM8 12.4C8.66272 12.4 9.2 12.9373 9.2 13.6C9.2 17.3555 12.2445 20.4 16 20.4C19.7555 20.4 22.8 17.3555 22.8 13.6C22.8 12.9373 23.3373 12.4 24 12.4C24.6627 12.4 25.2 12.9373 25.2 13.6C25.2 18.681 21.081 22.8 16 22.8C10.919 22.8 6.8 18.681 6.8 13.6C6.8 12.9373 7.33728 12.4 8 12.4Z"
      fill="#77DAE6"
    />
    <path
      d="M47.122 24.508C48.178 26.752 50.158 27.874 53.062 27.874C54.932 27.874 56.45 27.368 57.616 26.334C58.804 25.3 59.398 23.87 59.398 22.044V10.252H56.032V11.682H55.988C55.086 10.604 53.898 10.076 52.424 10.076C50.796 10.076 49.454 10.67 48.42 11.88C47.386 13.068 46.88 14.454 46.88 16.016C46.88 17.688 47.408 19.096 48.464 20.218C49.52 21.34 50.884 21.912 52.556 21.912C54.008 21.912 55.13 21.384 55.944 20.35H55.988V22.132C55.988 23.958 54.822 24.882 53.04 24.882C51.61 24.882 50.576 24.222 49.916 22.902L47.122 24.508ZM56.076 16.016C56.076 17.754 54.822 18.92 53.216 18.92C51.566 18.92 50.356 17.754 50.356 16.016C50.356 14.322 51.61 13.134 53.216 13.134C54.866 13.134 56.076 14.322 56.076 16.016ZM70.0161 10.208C69.8401 10.142 69.6201 10.12 69.3341 10.12C67.7721 10.12 66.5181 10.978 66.0121 12.056H65.9901V10.252H62.5801V22H66.0121V17.028C66.0121 14.916 66.9801 13.53 69.2021 13.53C69.4881 13.53 69.7521 13.552 70.0161 13.596V10.208ZM70.942 16.148C70.942 17.908 71.558 19.36 72.79 20.526C74.022 21.692 75.54 22.264 77.344 22.264C79.126 22.264 80.644 21.67 81.898 20.504C83.152 19.316 83.768 17.842 83.768 16.082C83.768 14.344 83.152 12.914 81.92 11.748C80.688 10.582 79.17 9.988 77.388 9.988C75.606 9.988 74.066 10.582 72.812 11.77C71.558 12.936 70.942 14.41 70.942 16.148ZM74.462 16.104C74.462 15.246 74.748 14.52 75.298 13.97C75.848 13.398 76.53 13.112 77.344 13.112C78.158 13.112 78.862 13.398 79.412 13.97C79.962 14.52 80.248 15.246 80.248 16.104C80.248 17.864 79.016 19.118 77.366 19.118C76.552 19.118 75.848 18.832 75.298 18.282C74.748 17.71 74.462 16.984 74.462 16.104ZM91.8229 22.264C94.4409 22.264 96.5749 21.01 97.4769 18.612L94.4409 17.358C93.9349 18.524 93.0769 19.096 91.8449 19.096C90.1729 19.096 89.0289 17.864 89.0289 16.104C89.0289 14.278 90.2609 13.134 91.8449 13.134C93.0109 13.134 93.8689 13.706 94.3749 14.872L97.3889 13.618C96.6189 11.308 94.4629 9.988 91.8449 9.988C90.0849 9.988 88.5889 10.582 87.3569 11.77C86.1249 12.958 85.5089 14.41 85.5089 16.148C85.5089 17.908 86.1029 19.36 87.2909 20.526C88.4789 21.692 89.9969 22.264 91.8229 22.264ZM111.056 17.072C111.078 16.808 111.1 16.39 111.1 15.84C111.1 14.102 110.55 12.672 109.472 11.594C108.394 10.516 106.986 9.966 105.248 9.966C103.554 9.966 102.08 10.56 100.848 11.77C99.6381 12.98 99.0221 14.41 99.0221 16.104C99.0221 17.908 99.6381 19.382 100.87 20.548C102.124 21.692 103.642 22.264 105.468 22.264C107.866 22.264 109.538 21.384 110.528 19.602L108.042 17.974C107.514 18.832 106.458 19.382 105.424 19.382C103.95 19.382 102.718 18.502 102.52 17.072H111.056ZM102.608 14.806C102.674 14.344 102.938 13.882 103.4 13.442C103.862 12.98 104.456 12.76 105.16 12.76C106.722 12.76 107.58 13.772 107.668 14.806H102.608ZM120.977 10.208C120.801 10.142 120.581 10.12 120.295 10.12C118.733 10.12 117.479 10.978 116.973 12.056H116.951V10.252H113.541V22H116.973V17.028C116.973 14.916 117.941 13.53 120.163 13.53C120.449 13.53 120.713 13.552 120.977 13.596V10.208ZM126.539 20.746L123.657 27.786H127.331L134.459 10.252H130.917L128.299 16.962L125.373 10.252H121.589L126.539 20.746ZM149.294 13.2C150.57 13.2 151.208 13.948 151.208 15.444V22H154.64V14.674C154.64 11.836 153.254 9.988 150.504 9.988C148.854 9.988 147.754 10.56 146.61 11.858C145.95 10.604 144.806 9.988 143.178 9.988C141.77 9.988 140.384 10.648 139.746 11.792H139.702V10.252H136.336V22H139.768V15.488C139.768 14.102 140.472 13.2 141.858 13.2C143.134 13.2 143.772 13.97 143.772 15.488V22H147.182V15.444C147.182 14.058 147.952 13.2 149.294 13.2ZM160.991 22.22C162.553 22.22 163.719 21.648 164.511 20.526L164.555 20.548V22H167.723V14.718C167.723 11.638 165.721 9.988 162.619 9.988C160.045 9.988 158.241 10.912 157.229 12.782L159.847 14.344C160.441 13.288 161.299 12.76 162.465 12.76C163.697 12.76 164.357 13.398 164.357 14.212C164.357 14.784 164.049 15.07 163.433 15.07H162.267C160.947 15.07 159.847 15.268 158.769 15.774C157.713 16.28 157.031 17.292 157.031 18.678V18.722C157.031 19.778 157.405 20.636 158.175 21.274C158.945 21.912 159.891 22.22 160.991 22.22ZM161.981 19.712C161.101 19.712 160.485 19.316 160.485 18.524C160.485 17.644 161.277 17.182 162.267 17.182H164.335V17.446C164.335 18.744 163.455 19.712 161.981 19.712ZM178.211 10.208C178.035 10.142 177.815 10.12 177.529 10.12C175.967 10.12 174.713 10.978 174.207 12.056H174.185V10.252H170.775V22H174.207V17.028C174.207 14.916 175.175 13.53 177.397 13.53C177.683 13.53 177.947 13.552 178.211 13.596V10.208ZM187.381 19.096C187.139 19.162 186.875 19.184 186.589 19.184C185.247 19.184 184.543 18.656 184.543 17.314V13.222H187.447V10.252H184.543V6.578H181.155V10.252H178.999V13.222H181.111V17.732C181.111 20.482 182.717 22.154 185.775 22.154C186.347 22.154 186.875 22.088 187.381 21.934V19.096Z"
      fill="currentColor"
    />
  </svg>
);

export const LogoDark = ({ width = 190, height = 32, ...props }: IconSvgProps) => (
  <svg width={width} height={height} viewBox="0 0 190 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.79999 0H27.2L32 8V30.4C32 31.2837 31.2837 32 30.4 32H1.6C0.716344 32 0 31.2837 0 30.4V8L4.79999 0ZM2.79886 8H29.2011L25.8411 2.4H6.15888L2.79886 8ZM8 12.4C8.66272 12.4 9.2 12.9373 9.2 13.6C9.2 17.3555 12.2445 20.4 16 20.4C19.7555 20.4 22.8 17.3555 22.8 13.6C22.8 12.9373 23.3373 12.4 24 12.4C24.6627 12.4 25.2 12.9373 25.2 13.6C25.2 18.681 21.081 22.8 16 22.8C10.919 22.8 6.8 18.681 6.8 13.6C6.8 12.9373 7.33728 12.4 8 12.4Z"
      fill="#77DAE6"
    />
    <path
      d="M47.122 24.508C48.178 26.752 50.158 27.874 53.062 27.874C54.932 27.874 56.45 27.368 57.616 26.334C58.804 25.3 59.398 23.87 59.398 22.044V10.252H56.032V11.682H55.988C55.086 10.604 53.898 10.076 52.424 10.076C50.796 10.076 49.454 10.67 48.42 11.88C47.386 13.068 46.88 14.454 46.88 16.016C46.88 17.688 47.408 19.096 48.464 20.218C49.52 21.34 50.884 21.912 52.556 21.912C54.008 21.912 55.13 21.384 55.944 20.35H55.988V22.132C55.988 23.958 54.822 24.882 53.04 24.882C51.61 24.882 50.576 24.222 49.916 22.902L47.122 24.508ZM56.076 16.016C56.076 17.754 54.822 18.92 53.216 18.92C51.566 18.92 50.356 17.754 50.356 16.016C50.356 14.322 51.61 13.134 53.216 13.134C54.866 13.134 56.076 14.322 56.076 16.016ZM70.0161 10.208C69.8401 10.142 69.6201 10.12 69.3341 10.12C67.7721 10.12 66.5181 10.978 66.0121 12.056H65.9901V10.252H62.5801V22H66.0121V17.028C66.0121 14.916 66.9801 13.53 69.2021 13.53C69.4881 13.53 69.7521 13.552 70.0161 13.596V10.208ZM70.942 16.148C70.942 17.908 71.558 19.36 72.79 20.526C74.022 21.692 75.54 22.264 77.344 22.264C79.126 22.264 80.644 21.67 81.898 20.504C83.152 19.316 83.768 17.842 83.768 16.082C83.768 14.344 83.152 12.914 81.92 11.748C80.688 10.582 79.17 9.988 77.388 9.988C75.606 9.988 74.066 10.582 72.812 11.77C71.558 12.936 70.942 14.41 70.942 16.148ZM74.462 16.104C74.462 15.246 74.748 14.52 75.298 13.97C75.848 13.398 76.53 13.112 77.344 13.112C78.158 13.112 78.862 13.398 79.412 13.97C79.962 14.52 80.248 15.246 80.248 16.104C80.248 17.864 79.016 19.118 77.366 19.118C76.552 19.118 75.848 18.832 75.298 18.282C74.748 17.71 74.462 16.984 74.462 16.104ZM91.8229 22.264C94.4409 22.264 96.5749 21.01 97.4769 18.612L94.4409 17.358C93.9349 18.524 93.0769 19.096 91.8449 19.096C90.1729 19.096 89.0289 17.864 89.0289 16.104C89.0289 14.278 90.2609 13.134 91.8449 13.134C93.0109 13.134 93.8689 13.706 94.3749 14.872L97.3889 13.618C96.6189 11.308 94.4629 9.988 91.8449 9.988C90.0849 9.988 88.5889 10.582 87.3569 11.77C86.1249 12.958 85.5089 14.41 85.5089 16.148C85.5089 17.908 86.1029 19.36 87.2909 20.526C88.4789 21.692 89.9969 22.264 91.8229 22.264ZM111.056 17.072C111.078 16.808 111.1 16.39 111.1 15.84C111.1 14.102 110.55 12.672 109.472 11.594C108.394 10.516 106.986 9.966 105.248 9.966C103.554 9.966 102.08 10.56 100.848 11.77C99.6381 12.98 99.0221 14.41 99.0221 16.104C99.0221 17.908 99.6381 19.382 100.87 20.548C102.124 21.692 103.642 22.264 105.468 22.264C107.866 22.264 109.538 21.384 110.528 19.602L108.042 17.974C107.514 18.832 106.458 19.382 105.424 19.382C103.95 19.382 102.718 18.502 102.52 17.072H111.056ZM102.608 14.806C102.674 14.344 102.938 13.882 103.4 13.442C103.862 12.98 104.456 12.76 105.16 12.76C106.722 12.76 107.58 13.772 107.668 14.806H102.608ZM120.977 10.208C120.801 10.142 120.581 10.12 120.295 10.12C118.733 10.12 117.479 10.978 116.973 12.056H116.951V10.252H113.541V22H116.973V17.028C116.973 14.916 117.941 13.53 120.163 13.53C120.449 13.53 120.713 13.552 120.977 13.596V10.208ZM126.539 20.746L123.657 27.786H127.331L134.459 10.252H130.917L128.299 16.962L125.373 10.252H121.589L126.539 20.746ZM149.294 13.2C150.57 13.2 151.208 13.948 151.208 15.444V22H154.64V14.674C154.64 11.836 153.254 9.988 150.504 9.988C148.854 9.988 147.754 10.56 146.61 11.858C145.95 10.604 144.806 9.988 143.178 9.988C141.77 9.988 140.384 10.648 139.746 11.792H139.702V10.252H136.336V22H139.768V15.488C139.768 14.102 140.472 13.2 141.858 13.2C143.134 13.2 143.772 13.97 143.772 15.488V22H147.182V15.444C147.182 14.058 147.952 13.2 149.294 13.2ZM160.991 22.22C162.553 22.22 163.719 21.648 164.511 20.526L164.555 20.548V22H167.723V14.718C167.723 11.638 165.721 9.988 162.619 9.988C160.045 9.988 158.241 10.912 157.229 12.782L159.847 14.344C160.441 13.288 161.299 12.76 162.465 12.76C163.697 12.76 164.357 13.398 164.357 14.212C164.357 14.784 164.049 15.07 163.433 15.07H162.267C160.947 15.07 159.847 15.268 158.769 15.774C157.713 16.28 157.031 17.292 157.031 18.678V18.722C157.031 19.778 157.405 20.636 158.175 21.274C158.945 21.912 159.891 22.22 160.991 22.22ZM161.981 19.712C161.101 19.712 160.485 19.316 160.485 18.524C160.485 17.644 161.277 17.182 162.267 17.182H164.335V17.446C164.335 18.744 163.455 19.712 161.981 19.712ZM178.211 10.208C178.035 10.142 177.815 10.12 177.529 10.12C175.967 10.12 174.713 10.978 174.207 12.056H174.185V10.252H170.775V22H174.207V17.028C174.207 14.916 175.175 13.53 177.397 13.53C177.683 13.53 177.947 13.552 178.211 13.596V10.208ZM187.381 19.096C187.139 19.162 186.875 19.184 186.589 19.184C185.247 19.184 184.543 18.656 184.543 17.314V13.222H187.447V10.252H184.543V6.578H181.155V10.252H178.999V13.222H181.111V17.732C181.111 20.482 182.717 22.154 185.775 22.154C186.347 22.154 186.875 22.088 187.381 21.934V19.096Z"
      fill="white"
    />
  </svg>
);

export const Menu = ({ width = 14, height = 17, ...props }: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 17" fill="none" {...props}>
    <path d="M13 1.5H1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 9H1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 16H1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowMegaMenu = ({ width = 23, height = 17, ...props }: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 23 17" fill="none">
    <path
      d="M9.45277 1.1122C10.253 0.0530214 11.8441 0.0530201 12.6443 1.1122L21.6591 13.0444C22.6545 14.362 21.7147 16.25 20.0633 16.25H2.03375C0.382421 16.25 -0.557459 14.362 0.437972 13.0444L9.45277 1.1122Z"
      fill="currentColor"
    />
  </svg>
);

export const CompareIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || size} height={height || size} viewBox="0 0 19 20" fill="none">
    <path
      d="M12.7161 14.2236H5.49609"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.7161 10.0371H5.49609"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.25207 5.86035H5.49707"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.909 0.75C12.909 0.75 5.23198 0.754 5.21998 0.754C2.45998 0.771 0.750977 2.587 0.750977 5.357V14.553C0.750977 17.337 2.47298 19.16 5.25698 19.16C5.25698 19.16 12.933 19.157 12.946 19.157C15.706 19.14 17.416 17.323 17.416 14.553V5.357C17.416 2.573 15.693 0.75 12.909 0.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BagIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5134 20.5003H6.16555C3.09919 20.5003 0.746786 19.3928 1.41498 14.9351L2.19301 8.89394C2.60491 6.66968 4.02367 5.81842 5.26852 5.81842H15.447C16.7102 5.81842 18.0466 6.73375 18.5225 8.89394L19.3006 14.9351C19.8681 18.8894 17.5797 20.5003 14.5134 20.5003Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6502 5.59873C14.6502 3.21265 12.716 1.27836 10.3299 1.27836V1.27836C9.18088 1.27349 8.07727 1.72652 7.26308 2.53727C6.44889 3.34803 5.9912 4.44971 5.99121 5.59873H5.99121"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.296 10.1021H13.2502"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.46492 10.1022H7.41916"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusIcon = ({ size = 20, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path
      d="M10.9996 7.32715V14.6535"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6663 10.9904H7.33301"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MinusIcon = ({ size = 20, width, height, ...props }: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    fill="none"
    width={width || size}
    height={height || size}
    {...props}
  >
    <path
      d="M14.6663 10.9904H7.33301"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DeleteIcon = ({ width = 19, height = 20, ...props }: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props} viewBox="0 0 19 20" fill="none">
    <path
      d="M16.3248 7.46875C16.3248 7.46875 15.7818 14.2037 15.4668 17.0407C15.3168 18.3957 14.4798 19.1898 13.1088 19.2148C10.4998 19.2618 7.88779 19.2648 5.27979 19.2098C3.96079 19.1828 3.13779 18.3788 2.99079 17.0478C2.67379 14.1858 2.13379 7.46875 2.13379 7.46875"
      stroke="#9E9DA8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M17.708 4.24023H0.75" stroke="#9E9DA8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M14.4406 4.23998C13.6556 4.23998 12.9796 3.68498 12.8256 2.91598L12.5826 1.69998C12.4326 1.13898 11.9246 0.750977 11.3456 0.750977H7.11258C6.53358 0.750977 6.02558 1.13898 5.87558 1.69998L5.63258 2.91598C5.47858 3.68498 4.80258 4.23998 4.01758 4.23998"
      stroke="#9E9DA8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusCheckBoxIcon = ({ size = 24, width = 24, height = 24, ...props }: IconSvgProps) => (
  <svg
    width={size || width || 24}
    height={size || height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 12H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 18V6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const EditIcon = ({ size = 24, width = 24, height = 24, ...props }: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width || 24}
    height={size || height || 24}
    {...props}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M11.7471 18.4428H18.9997"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.78 1.79479C11.5557 0.867787 12.95 0.731856 13.8962 1.49173C13.9485 1.53296 15.6295 2.83879 15.6295 2.83879C16.669 3.46719 16.992 4.80311 16.3494 5.82259C16.3153 5.87718 6.81195 17.7645 6.81195 17.7645C6.49578 18.1589 6.01583 18.3918 5.50291 18.3973L1.86353 18.443L1.04353 14.9723C0.928662 14.4843 1.04353 13.9718 1.3597 13.5773L10.78 1.79479Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.02051 4.00098L14.4728 8.1881"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MailIcon = ({ width = 22, height = 20, ...props }: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props} viewBox="0 0 22 20" fill="none">
    <path
      d="M16.9024 6.85156L12.4591 10.4646C11.6196 11.1306 10.4384 11.1306 9.59895 10.4646L5.11816 6.85156"
      stroke="#9E9DA8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
      stroke="#9E9DA8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LockIcon = ({ width = 20, height = 20, ...props }: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
    <path
      d="M13.4228 7.44804V5.30104C13.4228 2.78804 11.3848 0.750045 8.87176 0.750045C6.35876 0.739045 4.31276 2.76704 4.30176 5.28104V5.30104V7.44804"
      stroke="#9E9DA8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.683 19.2498H5.042C2.948 19.2498 1.25 17.5528 1.25 15.4578V11.1688C1.25 9.07383 2.948 7.37683 5.042 7.37683H12.683C14.777 7.37683 16.475 9.07383 16.475 11.1688V15.4578C16.475 17.5528 14.777 19.2498 12.683 19.2498Z"
      stroke="#9E9DA8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.8623 12.2031V14.4241" stroke="#9E9DA8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GoogleIcon = ({ width = 24, height = 24, ...props }: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height} {...props}>
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);
