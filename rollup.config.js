import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import packageJSON from "./package.json";

const config = [
	{
		input: "./src/library/index.ts",
		output: {
			file: packageJSON.main,
			format: "esm",
			sourcemap: true,
		},
		external: [
			"react",
			"react-is",
			"react-router",
			"react/jsx-runtime",
			"@stitches/react",
			"boxicons",
		],
		plugins: [
			babel({
				exclude: "node_modules/**",
			}),
			external(),
			resolve(),
			typescript({ tsconfig: "./tsconfig.json" }),
		],
	},
	{
		input: "src/library/index.ts",
		output: [{ file: "lib/index.d.ts", format: "esm" }],
		plugins: [dts()],
	},
];

export default config;
