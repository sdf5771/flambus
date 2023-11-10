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
        d="M17.89 8.297a.667.667 0 0 0-.925-.185l-3.63 2.42V9.333a.667.667 0 0 0-.667-.666H9.335a.667.667 0 0 0-.37.112L7.133 10H5.335a.667.667 0 0 0-.667.667v4.666c0 .369.298.667.667.667h5.333a.667.667 0 0 0 .248-.048l3.333-1.333a.671.671 0 0 0 .14-.076l4.666-3.334a.667.667 0 0 0 .168-.912l-1.334-2Zm-11.222 6.37v-3.334h-.667v3.334h.667Zm1.333 0h2.539l3.14-1.256 4.075-2.912-.605-.908-3.446 2.297a.667.667 0 0 1-.37.112h-2.666v-1.333h1.333V10H9.536l-1.535 1.024v3.643Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
export default SvgComponent
