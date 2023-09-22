import * as React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const SearchLogo = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M40 0H0v40h40V0Z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={props.color}
        d="m31.29 14.34-2.72-1.83c-.82-.55-1.72-.94-2.66-1.19C25.6 10 24.41 9 23 9c-1.3 0-2.4.84-2.82 2h-.37a2.99 2.99 0 0 0-5.76.42c-1.11.31-2.17.78-3.13 1.43l-2.25 1.5c-3.28 1-5.68 4.05-5.68 7.65 0 4.41 3.59 8 8 8 3.5 0 6.47-2.26 7.55-5.39.43.24.92.39 1.45.39.53 0 1.02-.15 1.45-.39C22.53 27.74 25.5 30 28.99 30c4.41 0 8-3.59 8-8 0-3.62-2.41-6.68-5.71-7.66h.01Zm-9.84 5.05c-.43-.24-.92-.39-1.45-.39-.53 0-1.02.15-1.45.39a7.996 7.996 0 0 0-5.94-5.22 8.84 8.84 0 0 1 2.61-.98c.59-.12 1.2-.19 1.81-.19h6.55c.43 0 .83.04 1.23.11h.01c.94.17 1.82.52 2.61 1.04-2.8.56-5.07 2.58-5.99 5.23l.01.01ZM11 28c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Zm9-5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm9 5c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Z"
      />
    </G>
  </Svg>
)
export default SearchLogo