import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import packageJSON from "./package.json" assert { type: "json" };
import preserveDirectives from "rollup-plugin-preserve-directives";

const config = [
	{
		input: "./src/index.ts",
		output: {
			dir: packageJSON.main,
			format: "esm",
			sourcemap: true,
			banner: `'use client';`,
			preserveModules: true,
			preserveModulesRoot: "src",
		},
		external: [
			"react",
			"react-is",
			"react-router",
			"react/jsx-runtime",
			"@stitches/react",
			"tslib",
		],
		plugins: [
			babel({
				exclude: "node_modules/**",
			}),
			external(),
			resolve(),
			typescript({ tsconfig: "./tsconfig.json" }),
			preserveDirectives.default(),
		],
	},
];

export default config;
