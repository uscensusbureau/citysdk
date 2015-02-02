City SDK
====================

*Note - The Github pages site for the City SDK was initially forked (then created as a duplicate repo) based on [CFPB's outstanding API documentation](https://github.com/cfpb/api).  Thanks to the CFPB [eRegs](https://github.com/cfpb/regulations-core) and [HMDA](https://github.com/cfpb/api) teams and their documentation work for starting us off with a great codebase.

You can use [DOCter](https://github.com/cfpb/DOCter) to build documentation sites similar to this one.

## Using JavaScript and Bower

If you are going to work on the JavaScript for this site, you need to do the following:

* Run `npm install -g bower` to install Bower.
* Run `npm install -g grunt-cli` to install Grunt.
* Run `npm install` in the directory to install other tools.
* Run `bower install` to install dependencies.

After changing the JavaScript, run `grunt` to rebuild the minified JS.

## Project Page URL Structure
In order to have the local resources work for both a github pages organizational and a project type site, pass a baseurl parameter at jekyll startup.

```
bundle exec jekyll server --watch  --baseurl ''
```

[See this page for more information](http://jekyllrb.com/docs/github-pages/#project-page-url-structure)
