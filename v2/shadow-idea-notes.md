## For new CLJS projects with Shadow-cljs in IDEA

1) Ensure "Maven Integration" Plugin is enabled in Intellij Idea "Plugins"
2) Create a `pom.xml` file with `shadow-cljs pom` in terminal
3) For new projects, right click on the `pom.xml` file and select from the "Maven" option at the bottom of the list to import the dependencies.
4) `git init`
5) `npm init`
6) setup remote repl with `Edit Configuration` in REPL button provided by Cursive
7) inside the configuration, choose the nrepl port provided by the `:nrepl` option in the shadow-cljs.edn file and select the project created by the Maven setup (step 3).
7) start remote repl with `shadow-cljs clj-repl`
8) watch build with `(shadow/watch :<build name>)` in REPL (<build name> comes from `shadow-cljs.edn` under `:builds`)
9) in REPL `(shadow.cljs.devtools.api/node-repl)` (or other if for figwheel or lein, etc.)
10) whenever dependencies change in `shadow-cljs.edn` file, `shadow-cljs pom` in terminal to keep dependencies synced up

## For CLJS projects with shadow-cljs in VSCode

1) Install "Calva" Plugin
2) use ctrl/cmd+shift+p (command selector menu): choose Calva: Start a Project REPL and Connect (aka jack-in)
3) 