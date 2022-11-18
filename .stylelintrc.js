module.exports = {
    extends: [
      // "stylelint-plugin-stylus/standard",
      "stylelint-config-standard-scss",
    ],
    plugins: ["stylelint-order", "stylelint-no-unsupported-browser-features"],
    rules: {
      "color-hex-case": "upper",
      "declaration-block-trailing-semicolon": "always",
      "max-line-length": [
        120,
        {
          ignorePattern: [
            "/^@import\\s+/",
            "/https?://[0-9,a-z]*.*/",
            "/font.*/",
          ],
        },
      ],
      "scss/at-rule-no-unknown": null,
      "plugin/no-unsupported-browser-features": [true, {
        "severity": "warning"
      }],
      "order/order": [
        "dollar-variables",
        "custom-properties",
        "at-rules",
        "declarations",
        {
          type: "at-rule",
          name: "supports",
        },
        {
          type: "at-rule",
          name: "media",
        },
        "rules",
      ],
      "order/properties-order": [
        [
          "position",
          "top",
          "right",
          "bottom",
          "left",
          "z-index",
          "box-sizing",
          "box-decoration-break",
          "display",
          //
          "flex",
          "flex-align",
          "flex-basis",
          "flex-direction",
          "flex-wrap",
          "flex-flow",
          "flex-grow",
          "flex-order",
          "flex-pack",
          "flex-shrink",
          //
          "grid",
          "grid-area",
          "grid-template",
          "grid-template-areas",
          "grid-template-rows",
          "grid-template-columns",
          "grid-row",
          "grid-row-start",
          "grid-row-end",
          "grid-column",
          "grid-column-start",
          "grid-column-end",
          "grid-auto-rows",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-gap",
          "grid-row-gap",
          "grid-column-gap",
          "gap",
          "row-gap",
          "column-gap",
          "align-content",
          "align-items",
          "align-self",
          "justify-content",
          "justify-items",
          "justify-self",
          "order",
          "float",
          //
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "margin",
          "margin-top",
          "margin-right",
          "margin-bogttom",
          "margin-left",
          "overflow",
          "overflow-x",
          "overflow-y",
          "overflow-scrolling",
          "object-fit",
          "clip",
          "clear",
          //
          "font",
          "font-family",
          "font-size",
          "font-style",
          "font-weight",
          "font-variant",
          "font-size-adjust",
          "font-stretch",
          "font-effect",
          "font-emphasize",
          "font-emphasize-position",
          "font-emphasize-style",
          "font-smooth",
          "hyphens",
          "line-height",
          "color",
          "text-align",
          "text-align-last",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-style",
          "text-emphasis-position",
          "text-decoration",
          "text-indent",
          "text-justify",
          "text-outline",
          "text-overflow",
          "text-overflow-ellipsis",
          "text-overflow-mode",
          "text-shadow",
          "text-transform",
          "text-wrap",
          "letter-spacing",
          "word-break",
          "word-spacing",
          "word-wrap",
          "overflow-wrap",
          "tab-size",
          "white-space",
          "vertical-align",
          "list-style",
          "list-style-position",
          "list-style-type",
          "list-style-image",
          //
          "pointer-events",
          "touch-action",
          "cursor",
          "visibility",
          "zoom",
          "max-zoom",
          "min-zoom",
          "user-zoom",
          "table-layout",
          "empty-cells",
          "caption-side",
          "border-spacing",
          "border-collapse",
          //
          "content",
          "quotes",
          "counter-reset",
          "counter-increment",
          "resize",
          "user-select",
          "nav-index",
          "nav-up",
          "nav-right",
          "nav-down",
          "nav-left",
          //
          "background",
          "background-color",
          "background-image",
          "filter",
          "background-repeat",
          "background-attachment",
          "background-position",
          "background-position-x",
          "background-position-y",
          "background-clip",
          "background-origin",
          "background-size",
          //
          "border",
          "border-width",
          "border-style",
          "border-color",
          "border-top",
          "border-top-width",
          "border-top-style",
          "border-top-color",
          "border-right",
          "border-right-width",
          "border-right-style",
          "border-right-color",
          "border-bottom",
          "border-bottom-width",
          "border-bottom-style",
          "border-bottom-color",
          "border-left",
          "border-left-width",
          "border-left-style",
          "border-left-color",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-bottom-left-radius",
          "border-image",
          "border-image-source",
          "border-image-slice",
          "border-image-width",
          "border-image-outset",
          "border-image-repeat",
          "border-top-image",
          "border-right-image",
          "border-bottom-image",
          "border-left-image",
          "border-corner-image",
          "border-top-left-image",
          "border-top-right-image",
          "border-bottom-right-image",
          "border-bottom-left-image",
          "outline",
          "outline-width",
          "outline-style",
          "outline-color",
          "outline-offset",
          "box-shadow",
          "opacity",
          //
          "transition",
          "transition-delay",
          "transition-timing-function",
          "transition-duration",
          "transition-property",
          "transform",
          "transform-origin",
          "animation",
          "animation-name",
          "animation-duration",
          "animation-play-state",
          "animation-timing-function",
          "animation-delay",
          "animation-iteration-count",
          "animation-direction",
          "animation-fill-mode",
          //
          "src",
          "interpolation-mode",
          //
          "unicode-bidi",
          "direction",
          "columns",
          "column-span",
          "column-width",
          "column-count",
          "column-fill",
          "column-rule",
          "column-rule-width",
          "column-rule-style",
          "column-rule-color",
          "break-before",
          "break-inside",
          "break-after",
          "page-break-before",
          "page-break-inside",
          "page-break-after",
          "orphans",
          "widows",
          "orientation",
          "fill",
          "stroke",
        ],
        {
          unspecified: "bottom",
          severity: "warning",
        },
      ],
    },
    "defaultSeverity": "warning",
  };
  