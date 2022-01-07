import * as React from "react";

function SvgCancelBtn(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={152} height={59} {...props}>
      <defs>
        <filter
          id="cancelBtn_svg__a"
          x={0}
          y={0}
          width={152}
          height={59}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur result="blur" />
          <feFlood floodColor="#5dabd9" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="cancelBtn_svg__b"
          x={0}
          y={0}
          width={152}
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
        data-name="\u30B0\u30EB\u30FC\u30D7 523"
        transform="translate(-4193 343)"
      >
        <g data-type="innerShadowGroup">
          <g filter="url(#cancelBtn_svg__a)" transform="translate(4193 -343)">
            <rect
              data-name="\u9577\u65B9\u5F62 449"
              width={152}
              height={56}
              rx={28}
              fill="#88d1fd"
            />
          </g>
          <g filter="url(#cancelBtn_svg__b)" transform="translate(4193 -343)">
            <rect
              data-name="\u9577\u65B9\u5F62 449"
              width={152}
              height={56}
              rx={28}
              fill="#fff"
            />
          </g>
        </g>
        <ellipse
          data-name="\u6955\u5186\u5F62 95"
          cx={6.5}
          cy={5.5}
          rx={6.5}
          ry={5.5}
          transform="rotate(31 2773.788 7631.617)"
          fill="#fff"
          opacity={0.401}
        />
        <text
          transform="translate(4270 -305)"
          fill="#fff"
          fontSize={24}
          fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        >
          <tspan x={-44.448} y={0}>
            {"\u3084\u308A\u76F4\u3059"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgCancelBtn;
