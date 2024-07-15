import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        plugins: [dts()],
    },
];
