# Rules
This file documents code rules/style enforced by JSigma

## Autofixes

Autofixes make changes to your files automatically, irreversibly.

### Indentation
Transforms space indentations to tab characters

**Why?**: Space indentation is impossible to customize (e.g. change its width). We have a dedicated key on our keyboards just for this. Editing space-indented files with any simple text editor that's not an IDE makes us painfully insert spaces one-by one to indent code. Again, there's a key made just for this.

### Semicolons
Deletes most semicolons at the end of lines. Except semicolons subsequent to quote character.

**Why?**: Semicolons create visual noise and removing them *usually* causes no problems.

## Warners

Warners report in what ways your code has to be changed.

### Forbidden

#### Var
Warns you about usage of `var`. Only `let` and `const` are accepted.

**Why?**: Obsolete keyword that introduces many scope problems.

#### ==/!=
Warns you about usage of `==` or `!=`. Only `===` and `!==` are accepted.

**Why?**: Many problems with unexpected type coercion.

