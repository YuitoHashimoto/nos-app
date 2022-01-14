import * as React from "react";

function SvgAnswerBtn(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={152} height={59} {...props}>
      <defs>
        <filter
          id="answerBtn_svg__a"
          x={0}
          y={0}
          width={152}
          height={59}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur result="blur" />
          <feFlood floodColor="#d8284a" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="answerBtn_svg__b"
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
        data-name="\u30B0\u30EB\u30FC\u30D7 921"
        transform="translate(-131 -557)"
      >
        <g data-type="innerShadowGroup">
          <g filter="url(#answerBtn_svg__a)" transform="translate(131 557)">
            <rect
              data-name="\u9577\u65B9\u5F62 80"
              width={152}
              height={56}
              rx={28}
              fill="#ff506f"
            />
          </g>
          <g filter="url(#answerBtn_svg__b)" transform="translate(131 557)">
            <rect
              data-name="\u9577\u65B9\u5F62 80"
              width={152}
              height={56}
              rx={28}
              fill="#fff"
            />
          </g>
        </g>
        <ellipse
          data-name="\u6955\u5186\u5F62 53"
          cx={6.5}
          cy={5.5}
          rx={6.5}
          ry={5.5}
          transform="rotate(31 -881.662 758.568)"
          fill="#fff"
          opacity={0.401}
        />
        <text
          transform="translate(207 595)"
          fill="#fff"
          fontSize={24}
          fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        >
          <tspan x={-33.552} y={0}>
            {"\u7B54\u3048\u308B"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgAnswerBtn;
