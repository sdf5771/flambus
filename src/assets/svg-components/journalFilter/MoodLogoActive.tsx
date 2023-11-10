import * as React from "react"
import Svg, { SvgProps, Rect, Mask, Path, G } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={24} height={24} fill="#FFF6D6" rx={12} />
    <Mask
      id="a"
      width={16}
      height={16}
      x={4}
      y={4}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#D9D9D9" d="M4 4h16v16H4z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#FFBA33"
        fillRule="evenodd"
        d="M5.332 16.67V7.335h1.333v5.333h2c.368 0 .666.299.666.667v3.333H7.998v-2.666H6.665v2.666H5.332Zm12-9.334v5.333h-2a.667.667 0 0 0-.666.667v3.333h1.333v-2.666h1.333v2.666h1.333V7.336h-1.333Zm-9.334 4.667h3.334v3.333h-.666v1.333H13.333v-1.333h-.668v-3.333h3.333v-1.334h-1.333V9.336h-1.333v1.333h-2.667V9.336H9.332v1.333H7.998v1.334Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
export default SvgComponent
