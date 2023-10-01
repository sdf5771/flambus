import * as React from "react"
import Svg, { SvgProps, Mask, Path, G, Defs, ClipPath } from "react-native-svg"
const AcornChargeLogoDefault = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
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
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h40v40H0z" />
    </Mask>
    <G mask="url(#a)">
      <Mask
        id="c"
        width={25}
        height={25}
        x={8}
        y={8}
        maskUnits="userSpaceOnUse"
      >
        <G clipPath="url(#b)">
          <Path
            stroke="#FFB400"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M28.8 18.236c.013-2.212-.75-4.337-2.325-5.912-3.425-3.413-9.362-3.025-13.262.887-3.9 3.9-4.3 9.838-.887 13.25 1.587 1.588 3.7 2.35 5.912 2.325"
          />
          <Path
            fill="#FFB400"
            d="M18.51 18.514c1.675-1.675 1.845-4.22.38-5.684-1.464-1.464-4.008-1.294-5.683.38-1.674 1.675-1.844 4.22-.38 5.684 1.465 1.464 4.01 1.294 5.684-.38Z"
          />
          <Path
            fill="#FFB400"
            stroke="#FFB400"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M29.126 29.113c-2.763 2.763-7.488 2.575-10.888-.325 2.563-.025 5.25-1.1 7.35-3.2 2.1-2.1 3.188-4.775 3.213-7.35 2.9 3.4 3.075 8.125.325 10.875Z"
          />
          <Path
            stroke="#FFB400"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="m29.113 29.113.888.888M14.975 14.975l-3.537-3.537"
          />
        </G>
      </Mask>
      <G mask="url(#c)">
        <Path fill="#494949" d="M5 5h30v30H5z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" d="M8.75 8.75h23.575v23.575H8.75z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default AcornChargeLogoDefault
