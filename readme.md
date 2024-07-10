# <img width="30" src="https://raw.githubusercontent.com/tzwel/JSigma/main/repo-files/sigma.jpg" /> JSigma

A barebones javascript code formatter and linter

## What and why?

JSigma is my private response to the progressing enshittification of the only JavaScript linter - Eslint. 

It's a barebones, overly simplistic linter and formatter that complies with my personal style guide(refer to rules.md), so it's heavily opinionated. Also, it doesn't rely on an AST just yet, and uses many naive parsing techniques that *just work*. This means that JSigma WILL report false positives, but I'm trying to limit it acting on them. 

As a obvious fun-fact: JSigma is linted by itself.

## How to use?

You better not. I'm serious. Use anything else.

But if you really want to, install it globally by running:
```
npm i jsigma -g
```

Then in your project directory just run `jsigma`

To ignore lines, place a comment `//JSigma ignore below` above the offending line.

Now run `npm uninstall jsigma -g`. This is heavily WIP and not ready to use by *you*.