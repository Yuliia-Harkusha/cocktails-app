export const theme = Object.freeze({
  colors: {
    accent: "#4a9519",
    hover: "#95BF47",
    gray: "#464444",
    lightGray: "#635050",
    mainBackground: "#f9f9f8",
    orange: "#f6950d",
    light: "#f2f2f2",
    dark: "#212121",
  },
  fontSizes: {
    small: "16px",
    medium: "20px",
    medLarge: "22px",
    large: "50px",
  },
  fonts: ["sans-serif", "Roboto"],
  spacing: (value) => `${5 * value}px`,
  shadows: {
    lightShadow: "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
    darkShadow: "4px 10px 5px 0px rgba(0, 0, 0, 0.5)",
  },
  animation: {
    cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
  },
  radii: {
    primary: "5px",
  },
});
