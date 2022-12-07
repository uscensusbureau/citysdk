# CitySDK Source Subtree

This is the source for the actual NPM library `citysdk`. This is a ClojureScript
project and has a few quirks that need to be handled in order to:

## Environment

The development environment I use(d) to create this library is:

-   Intellij IDEA Community Edition (with the Cursive plugin)
-   VSCode (with CLJ Kondo and Calva extensions)
-   The `shadow-cljs` npm `devDependency`, which serves to transpile the
    ClojureScript into JavaScript and enables using the JS runtime

The `shadow-cljs` build tool is actually much more than that. It's maintained by
a single person and has to do a lot of heavy lifting. Thank you @thheller!

Here are the steps for Development in VSCode:

1. Start a REPL server in terminal: `shadow-cljs node-repl`
2. `ctrl + shift + p` to pull up the tasks in VSCode
3. Find: `Calva: Connect to a Running REPL Server in the Project`
4. Proceed throught the Calva dialogs:
    - select a project type: `shadow-cljs`
    - add [port to nREPL](.nrepl-port): `localhost:3333`
    - select which build to connect to: `node-repl`
5. If [in the Utils](./src/census/utils/core.cljc#L12), make sure to toggle the
   comment off for the non `$default` `node-fetch` requirement
6. Go into the file you wish to evaluate and right-click to find: `Load/Evaluate Current file and its Requires/Dependencies`

# Caveats

There are some issues to be aware of that need to be understood in order for
these steps to succeed in a cross-platform build (currently Node and the Browser
using ES Modules)

## 1. Coding Time:

ES Modules aren't currently supported in native ClojureScript. The Cljs
ecosystem still uses `require` (instead of `import`), so in order for this
library to play nice in modern ES environments, some compromises were made:

-   `isomorphic-unfetch` uses an older version of `node-fetch` which uses require.
-   In [./src/census/utils/core.cljc](./src/census/utils/core.cljc#L12) you'll see
    in all caps `FIXME: when bundling for ESM, use the $default version`. This
    needs to be done before the next step, but during development (when using the
    REPL), the `$default` flag needs to be removed

## 2. Build Time: `shadow-cljs release lib`

Before building for `npm`, add the `$default` flag back to the require statement
for `isomorphic-unfetch`

Once this is done you can `npm run build`
