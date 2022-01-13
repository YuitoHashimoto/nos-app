import * as React from "react";

function SvgSoloTitle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={224}
      height={48}
      {...props}
    >
      <defs>
        <clipPath id="soloTitle_svg__b">
          <path
            data-name="\u9577\u65B9\u5F62 334"
            fill="none"
            d="M0 0h224v48H0z"
          />
        </clipPath>
        <clipPath id="soloTitle_svg__c">
          <path
            data-name="\u9577\u65B9\u5F62 332"
            fill="url(#soloTitle_svg__a)"
            d="M0 0h224v48H0z"
          />
        </clipPath>
        <clipPath id="soloTitle_svg__d">
          <path
            data-name="\u30D1\u30B9 254"
            d="M16 0h192a16 16 0 0116 16v16a16 16 0 01-16 16H16A16 16 0 010 32V16A16 16 0 0116 0"
            fill="url(#soloTitle_svg__a)"
          />
        </clipPath>
        <linearGradient
          id="soloTitle_svg__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#f54466" />
          <stop offset={1} stopColor="#fdd0d9" />
        </linearGradient>
      </defs>
      <g data-name="\u30B0\u30EB\u30FC\u30D7 884">
        <g data-name="\u30B0\u30EB\u30FC\u30D7 311">
          <g
            data-name="\u30B0\u30EB\u30FC\u30D7 310"
            clipPath="url(#soloTitle_svg__b)"
          >
            <g data-name="\u30B0\u30EB\u30FC\u30D7 309">
              <g
                data-name="\u30B0\u30EB\u30FC\u30D7 308"
                clipPath="url(#soloTitle_svg__b)"
              >
                <path
                  data-name="\u30D1\u30B9 253"
                  d="M16 0h192a16 16 0 0116 16v16a16 16 0 01-16 16H16A16 16 0 010 32V16A16 16 0 0116 0"
                  fill="#f54466"
                />
                <g data-name="\u30B0\u30EB\u30FC\u30D7 302">
                  <g data-name="\u30B0\u30EB\u30FC\u30D7 301" opacity={0.2}>
                    <g
                      data-name="\u30B0\u30EB\u30FC\u30D7 300"
                      clipPath="url(#soloTitle_svg__b)"
                    >
                      <image
                        data-name="\u9577\u65B9\u5F62 329"
                        width={224}
                        height={48}
                        xlinkHref="data:image/png;base64,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"
                      />
                    </g>
                  </g>
                </g>
                <g data-name="\u30B0\u30EB\u30FC\u30D7 307">
                  <g data-name="\u30B0\u30EB\u30FC\u30D7 306" opacity={0.6}>
                    <g data-name="\u30B0\u30EB\u30FC\u30D7 305">
                      <g
                        data-name="\u30B0\u30EB\u30FC\u30D7 304"
                        clipPath="url(#soloTitle_svg__c)"
                      >
                        <g
                          data-name="\u30B0\u30EB\u30FC\u30D7 303"
                          clipPath="url(#soloTitle_svg__d)"
                        >
                          <path
                            data-name="\u9577\u65B9\u5F62 331"
                            fill="url(#soloTitle_svg__a)"
                            d="M0 0h224v48H0z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <text
          transform="translate(115 35)"
          fill="#fff"
          fontSize={24}
          fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
          letterSpacing=".08em"
        >
          <tspan x={-70.032} y={0}>
            {"\u3072\u3068\u308A\u3067\u6226\u3046"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgSoloTitle;
