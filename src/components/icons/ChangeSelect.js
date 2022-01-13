import * as React from "react";

function SvgChangeSelect(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={79} height={31} {...props}>
      <defs>
        <filter
          id="changeSelect_svg__a"
          x={0}
          y={0}
          width={79}
          height={31}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={2} />
          <feGaussianBlur result="blur" />
          <feFlood floodColor="#5dabd9" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="changeSelect_svg__b"
          x={0}
          y={0}
          width={79}
          height={31}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={2} />
          <feGaussianBlur result="blur-2" />
          <feFlood floodColor="#fff" floodOpacity={0.161} result="color" />
          <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
          <feComposite operator="in" in="color" />
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </defs>
      <g
        data-name="\u30B0\u30EB\u30FC\u30D7 855"
        transform="translate(-168 -586)"
      >
        <g data-type="innerShadowGroup">
          <g filter="url(#changeSelect_svg__a)" transform="translate(168 586)">
            <rect
              data-name="\u9577\u65B9\u5F62 3"
              width={79}
              height={29}
              rx={14.5}
              fill="#69c6ff"
            />
          </g>
          <g filter="url(#changeSelect_svg__b)" transform="translate(168 586)">
            <rect
              data-name="\u9577\u65B9\u5F62 3"
              width={79}
              height={29}
              rx={14.5}
              fill="#fff"
            />
          </g>
        </g>
        <text
          transform="translate(207 607)"
          fill="#fff"
          fontSize={14}
          fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        >
          <tspan x={-14.084} y={0}>
            {"\u9078\u3076"}
          </tspan>
        </text>
        <ellipse
          data-name="\u6955\u5186\u5F62 52"
          cx={3.376}
          cy={2.857}
          rx={3.376}
          ry={2.857}
          transform="rotate(31 -945.892 721.462)"
          fill="#fff"
          opacity={0.401}
        />
      </g>
    </svg>
  );
}

export default SvgChangeSelect;
