import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const AcornButtonLineActive = (props: SvgProps) => (
  <Svg
    width={2}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M1 1v24" />
  </Svg>
)
export default AcornButtonLineActive
