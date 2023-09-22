import * as React from "react"
import Svg, { SvgProps, G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const LocationLogo = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={40}
        height={40}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path fill="#fff" d="M40 0H0v40h40V0Z" />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill={props.color}
          d="M34.67 9.25c-.21-.19-.5-.28-.78-.25l-8.85.98-9.85-1.97c-.1-.02-.2-.03-.31-.01l-9 1c-.51.06-.89.48-.89.99v20c0 .28.12.56.33.75.21.19.5.28.78.25l8.85-.98 9.85 1.97c.06.01.13.02.2.02h.11l9-1c.51-.06.89-.48.89-.99V10c0-.28-.12-.56-.33-.75ZM16 10.22l8 1.6v17.96l-8-1.6V10.22Zm-9 .68 7-.78v17.99l-7 .78V10.9Zm26 18.21-7 .78v-18l7-.78v18Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default LocationLogo
