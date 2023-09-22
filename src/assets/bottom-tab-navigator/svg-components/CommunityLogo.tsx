import * as React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const CommunityLogo = (props: SvgProps) => (
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
    <G fill={props.color} mask="url(#a)">
      <Path d="M35 10.999h-8.76l-5.79-2.89a.995.995 0 0 0-.89 0l-5.79 2.89H5c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h30c.55 0 1-.45 1-1v-18c0-.55-.45-1-1-1Zm-15-.88 1.76.88h-3.53l1.76-.88H20Zm14 18.88H6v-16h28v16Z" />
      <Path d="M23 27h8c.55 0 1-.45 1-1V16c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1Zm1-10h6v8h-6v-8ZM10 18h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1ZM10 22h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1ZM10 26h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1Z" />
    </G>
  </Svg>
)
export default CommunityLogo
