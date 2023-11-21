import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={48} height={48} fill="#21C704" rx={24} />
    <Path
      fill="#fff"
      d="M26.86 16v8.321L21.162 16H15v16.492h6.14v-8.321l5.7 8.321H33V16h-6.14Z"
    />
  </Svg>
)
export default SvgComponent
