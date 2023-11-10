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
        d="M12.001 6a1.333 1.333 0 0 0-1.144 2.019A5.999 5.999 0 0 0 5.334 14c0 .368.298.667.667.667h12a.667.667 0 0 0 .666-.667 5.999 5.999 0 0 0-5.522-5.981A1.333 1.333 0 0 0 12.001 6Zm-5.286 7.333h10.572a4.666 4.666 0 0 0-4.62-4h-1.333a4.666 4.666 0 0 0-4.62 4Zm12.62 2v1.334H4.668v-1.334h14.667Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
export default SvgComponent
