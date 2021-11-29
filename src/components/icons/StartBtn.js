import * as React from "react";

function SvgStartBtn(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={240}
      height={59}
      className="startBtn_svg__startBtn"
      {...props}
    >
      <defs>
        <filter
          id="startBtn_svg__a"
          x={0}
          y={0}
          width={240}
          height={59}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur result="blur" />
          <feFlood floodColor="#f02049" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="startBtn_svg__b"
          x={0}
          y={0}
          width={240}
          height={59}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur result="blur-2" />
          <feFlood floodColor="#fff" floodOpacity={0.161} result="color" />
          <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
          <feComposite operator="in" in="color" />
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </defs>
      <g
        data-name="\u30B0\u30EB\u30FC\u30D7 280"
        transform="translate(-523 -69)"
      >
        <g data-type="innerShadowGroup">
          <g filter="url(#startBtn_svg__a)" transform="translate(523 69)">
            <rect
              data-name="\u9577\u65B9\u5F62 293"
              width={240}
              height={56}
              rx={28}
              fill="#ff506f"
            />
          </g>
          <g filter="url(#startBtn_svg__b)" transform="translate(523 69)">
            <rect
              data-name="\u9577\u65B9\u5F62 293"
              width={240}
              height={56}
              rx={28}
              fill="#fff"
            />
          </g>
        </g>
        <ellipse
          data-name="\u6955\u5186\u5F62 62"
          cx={6.5}
          cy={5.5}
          rx={6.5}
          ry={5.5}
          transform="rotate(31 238.915 1379.588)"
          fill="#fff"
          opacity={0.401}
        />
        <text
          transform="translate(643 107)"
          fill="#fff"
          fontSize={24}
          fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        >
          <tspan x={-54.708} y={0}>
            {"\u306F\u3058\u3081\u3088\u3046"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgStartBtn;
