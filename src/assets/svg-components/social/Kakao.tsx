import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={48} height={48} fill="#F9E000" rx={24} />
    <Path
      fill="#371C1D"
      d="M24 16c-5.523 0-10 3.399-10 7.593 0 2.73 1.896 5.122 4.743 6.46-.21.75-.757 2.717-.866 3.138-.136.522.198.515.419.375.172-.11 2.74-1.788 3.848-2.512.602.086 1.222.13 1.856.13 5.523 0 10-3.398 10-7.59C34 19.4 29.523 16 24 16Z"
    />
  </Svg>
)
export default SvgComponent
