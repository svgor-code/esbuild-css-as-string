import fs from 'fs';
import path from 'path';

const cssAsStringPlugin = {
  name: "esbuild-css-as-string",
  setup(build) {
    build.onResolve({ filter: /\.css$/ }, (args) => {
      return {
        path: path.resolve(args.resolveDir, args.path),
        namespace: "esbuild-css-as-string",
      };
    });

    build.onLoad(
      { filter: /.*/, namespace: "esbuild-css-as-string" },
      (args) => {
        const contents = fs.readFileSync(args.path, "utf8");
        return {
          contents: `export default ${JSON.stringify(contents)}`,
          loader: "js",
        };
      }
    );
  },
};

export default cssAsStringPlugin;
