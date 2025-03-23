import eslintConfig from "@igorkowalczyk/eslint-config";
import { Linter } from "eslint";

export default [
 // prettier
 ...eslintConfig.base,
 ...eslintConfig.node,
 ...eslintConfig.typescript,
 {
  ignores: ["worker-configuration.d.ts"],
 },
] satisfies Linter.Config[];
