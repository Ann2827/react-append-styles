import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import bundleAnalyzer from 'rollup-plugin-bundle-analyzer';

const args = process.argv.slice(2);
const getArgvParameter = (argv, key) => {
  const value = argv.find((item) => item.includes(key))?.split('=')[1] || '';
  return value.trim().replace(/"/g, '').replace(/'/g, '');
};

const plugins = [];
const analyze = getArgvParameter(args, '--analyze');
if (analyze) plugins.push(bundleAnalyzer({}));

export default [
  {
    input: 'src/index.ts',
    output: {
      exports: 'named',
      file: 'dist/index.modern.js',
      format: 'es',
      sourcemap: false,
    },
    external: ['react', 'library-react-hooks'],
    treeshake: 'recommended',
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        include: ['src/**/*.ts'],
        exclude: ['src/**/**/*.test.ts'],
      }),
      terser({
        output: {
          comments: false,
        },
      }),
      ...plugins,
    ],
  },
];
