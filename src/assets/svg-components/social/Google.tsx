import * as React from "react"
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={47} height={47} x={0.5} y={0.5} fill="#fff" rx={23.5} />
    <Rect width={47} height={47} x={0.5} y={0.5} stroke="#F1F1F1" rx={23.5} />
    <G fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        fill="#4285F4"
        d="M33 24.394c0-.652-.06-1.277-.167-1.878h-8.65v3.552h4.943a4.226 4.226 0 0 1-1.832 2.772v2.304h2.968c1.737-1.599 2.739-3.953 2.739-6.75H33Z"
      />
      <Path
        fill="#34A853"
        d="M24.184 33.368c2.48 0 4.558-.822 6.078-2.225l-2.969-2.304c-.823.551-1.874.877-3.11.877-2.392 0-4.417-1.616-5.14-3.786h-3.066v2.379a9.18 9.18 0 0 0 8.207 5.06Z"
      />
      <Path
        fill="#FBBC05"
        d="M19.045 25.928a5.529 5.529 0 0 1-.288-1.745c0-.606.104-1.194.288-1.745v-2.38h-3.068A9.178 9.178 0 0 0 15 24.184c0 1.482.355 2.884.977 4.124l3.068-2.379Z"
      />
      <Path
        fill="#EA4335"
        d="M24.184 18.653c1.348 0 2.559.463 3.51 1.373l2.635-2.635C28.738 15.911 26.659 15 24.184 15a9.18 9.18 0 0 0-8.207 5.06l3.067 2.379c.723-2.17 2.747-3.786 5.14-3.786Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M15 15h18v18.368H15z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
