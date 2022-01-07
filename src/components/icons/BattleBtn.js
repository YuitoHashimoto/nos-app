import * as React from "react";

function SvgBattleBtn(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={200} height={73} {...props}>
      <defs>
        <filter
          id="battleBtn_svg__a"
          x={0}
          y={0}
          width={200}
          height={73}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur result="blur" />
          <feFlood floodColor="#f02049" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="battleBtn_svg__b"
          x={0}
          y={0}
          width={200}
          height={73}
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
        data-name="\u30B0\u30EB\u30FC\u30D7 852"
        transform="translate(-107 -614)"
      >
        <g data-type="innerShadowGroup">
          <g filter="url(#battleBtn_svg__a)" transform="translate(107 614)">
            <rect
              data-name="\u9577\u65B9\u5F62 298"
              width={200}
              height={70}
              rx={10}
              fill="#ff506f"
            />
          </g>
          <g filter="url(#battleBtn_svg__b)" transform="translate(107 614)">
            <rect
              data-name="\u9577\u65B9\u5F62 298"
              width={200}
              height={70}
              rx={10}
              fill="#fff"
            />
          </g>
        </g>
        <text
          transform="translate(207 659)"
          fill="#fff"
          fontSize={24}
          fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        >
          <tspan x={-77.16} y={0}>
            {"\u30AF\u30A4\u30BA\u5BFE\u6226\u3059\u308B"}
          </tspan>
        </text>
        <ellipse
          data-name="\u6955\u5186\u5F62 96"
          cx={6.5}
          cy={5.5}
          rx={6.5}
          ry={5.5}
          transform="rotate(31 -968.386 834.855)"
          fill="#fff"
          opacity={0.401}
        />
      </g>
    </svg>
  );
}

export default SvgBattleBtn;
