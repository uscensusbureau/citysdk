## For new CLJS projects with Shadow-cljs in IDEA

1) Ensure "Maven Integration" Plugin is enabled in Idea
2) Create a `pom.xml` file with `shadow-cljs pom` in terminal
3) `git init`
4) `npm init`
5) setup remote repl with `Edit Configuration` in REPL button provided by Cursive
6) start remote repl with `shadow-cljs clj-repl`
7) watch build with `(shadow/watch :<build name>)`
8) whenever dependencies change in `shadow.edn` file, `shadow-cljs pom` in terminal to keep dependencies synced up
