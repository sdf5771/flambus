import * as React from "react"
import Svg, { SvgProps, Mask, Path, G, Defs, ClipPath } from "react-native-svg"
const AcornLogoActive = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={32}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#D9D9D9" d="M0 0h32v32H0z" />
    </Mask>
    <G mask="url(#a)">
      <Mask
        id="c"
        width={19}
        height={19}
        x={7}
        y={7}
        maskUnits="userSpaceOnUse"
      >
        <G clipPath="url(#b)">
          <Path
            stroke="#FFB400"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M23.04 14.59c.01-1.77-.6-3.47-1.86-4.73-2.74-2.73-7.49-2.42-10.61.71-3.12 3.12-3.44 7.87-.71 10.6 1.27 1.27 2.96 1.88 4.73 1.86"
          />
          <Path
            fill="#FFB400"
            d="M14.809 14.81c1.34-1.34 1.475-3.376.304-4.547-1.172-1.172-3.207-1.036-4.547.304-1.34 1.34-1.476 3.375-.304 4.546 1.171 1.172 3.207 1.036 4.547-.303Z"
          />
          <Path
            fill="#FFB400"
            stroke="#FFB400"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M23.3 23.29c-2.21 2.21-5.99 2.06-8.71-.26 2.05-.02 4.2-.88 5.88-2.56 1.68-1.68 2.55-3.82 2.57-5.88 2.32 2.72 2.46 6.5.26 8.7Z"
          />
          <Path
            stroke="#FFB400"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M23.29 23.29 24 24M11.98 11.978l-2.83-2.83"
          />
        </G>
      </Mask>
      <G mask="url(#c)">
        <Path fill="#1A1A1A" d="M4 4h24v24H4z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" d="M7 7h18.86v18.86H7z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default AcornLogoActive
