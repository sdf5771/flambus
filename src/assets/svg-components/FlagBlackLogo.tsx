import * as React from "react"
import Svg, { SvgProps, Mask, Path, G, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={16}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#D9D9D9" d="M0 0h16v16H0V0Z" />
    </Mask>
    <G clipPath="url(#b)" mask="url(#a)">
      <Path
        fill="#1A1A1A"
        fillRule="evenodd"
        d="M4.455 7.235 3.45 3.208c1.08-.455 1.908-.59 2.487-.535.442.043.76.136 1.136.257l.116.038c.358.116.78.253 1.353.363h.001c1.07.203 2.082.296 2.954.232L12.5 7.58c-.663.023-1.467-.052-2.375-.224a9.162 9.162 0 0 1-1.193-.323l-.118-.038a6.307 6.307 0 0 0-1.416-.315c-.826-.079-1.817.105-2.943.556Zm1.609-5.889c-1.002-.096-2.25.196-3.685.882a.667.667 0 0 0-.359.765l2.667 10.666a.667.667 0 0 0 1.293-.323L4.782 8.542c1.08-.455 1.908-.591 2.487-.535.442.043.76.135 1.136.256l.117.038c.357.116.779.253 1.352.363h.002c1.335.254 2.58.336 3.577.155A.667.667 0 0 0 13.98 8l-1.333-5.333a.667.667 0 0 0-.766-.494c-.764.139-1.825.087-3.09-.153-.488-.093-.837-.207-1.192-.322l-.119-.038a6.307 6.307 0 0 0-1.415-.315h-.001Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" d="M2 1.332h12v12.833H2z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
