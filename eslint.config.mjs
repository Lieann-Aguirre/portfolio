import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
const config = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts", "tmp/**"] },
  ...nextVitals, ...nextTypescript,
  { rules: { "react-hooks/set-state-in-effect": "off" } },
];
export default config;
