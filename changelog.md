# Changelog

## 1.4.3
- Added escape sequence syntax highlighting.
- Changed scope name from `source.novasheets` to `source.css.novasheets`.
- Changed element syntax highlighting to only highlight valid elements
- Fixed formatter not initialising.

## 1.4.2
- Removed previous element selector syntax highlighting.
- Fixed newlines breaking selector syntax highlighting (#3).
- Fixed simple breakpoint highlighting not being applied when missing a preceeding selector part.
- Fixed regular expression syntax higlighting not being applied when more than one flag is specified.
- Fixed delimiters in anonymous arguments not having syntax highlighting applied.
- Fixed indented pipes and closing parentheses having their indentation removed on format.

## 1.4.1
- Fixed newlines breaking attribute syntax highlighting (#1).
- Fixed selectors not having syntax highlighting applied when not at the start of a line.
- Fixed empty parameters having superfluous spaces added when formatted (#2).
- Fixed pseudo-classes after parenthetical selectors having invalid spaces added (#2).

## 1.4.0
- Added breakpoint snippet.
- Added previous element selector syntax highlighting.
- Added regular expression syntax highlighting
- Added full numeric unit syntax highlighting.
- Changed variable syntax highlighting.
- Changed `!important` syntax highlighting.
- Changed selector separator syntax highlighting.
- Removed static comment inner syntax highlighting.
- Revamped internal syntax highlighting tokenisation.
- Fixed formatter not cleanup up colons and trailing spaces.

## 1.3.1
- Added angle brackets as auto-enclosing characters.
- Changed syntax highlighting of parser constants from `@const` to `@option`.
- Removed `.novasheet` as an applicable file extension.
- Fixed variable syntax highlighting being broken by nested brackets.
- Fixed loop identifier syntax highlighting not being applied.
- Fixed simple breakpoint syntax highlighting not being applied when the width is set to a variable.

## 1.3.0
- Added code formatter.
- Added syntax highlighting for simple breakpoints.
- Added `.nvss` as an applicable file extension.
- Readded automatic indentation.
- Updated syntax highlighting of CSS declaration substitutions.
- Removed `.nss`, `.nss.txt`, and `.novasheets` as applicable file extensions.
- Changed URL syntax highlighting to apply colouring as well as an underline.
- Fixed numeric syntax highlighting not applying to negative exponents.
- Fixed object getter syntax highlighting not being applied when its selector contains spaces.
- Fixed CSS property syntax highlighting not being applied when the property name contains trailing whitespace.
- Fixed declaration substitution syntax highlighting not being applied when containing leading whitespace.
- Fixed built-in function syntax highlighting not being applied when the variable name contains leading whitespace.
- Fixed at-rule syntax highlighting getting overwritten.
- Refactored code to be compiled from a YAML tmLanguage file.

## 1.2.5
- Added syntax highlighting for CSS declaration substitutions.
- Added syntax highlighting for object getter notaton.
- Added `.novasheet` and `.novasheets` as applicable file extensions.

## 1.2.4
- Added syntax highlighting for static comments (`/*/ text /*/`) and parsed comments (`/*[ ]*/`).
- Added syntax highlighting for loop indentifiers `$i`, `$v`, and `$v[n]`.
- Added syntax highlighting for default argument content.
- Added syntax highlighting for CSS units.
- Added syntax highlighting for all numeric types.
- Added syntax highlighting for URLs.

## 1.2.3
- Changed syntax highlighting rules to always apply to `@var`, `@endvar`, and `@const` anywhere in a line
- Changed syntax highlighting of `@const` declarations to allow boolean values and to apply syntax highlighting to the value of the constant.
- Removed syntax highlighting for the removed front matter separator `---`.
- Removed syntax highlighting for invalid characters as it has too many false positives.
- Removed syntax highlighting for parameters names in built-in variables.
- Fixed syntax highlighting of block comments extending the boundary of the comment.
- Fixed empty arguments and empty parameters not being treated as valid.

## 1.2.2
- Added syntax highlighting for `@const` and `@endvar` declarations.
- Added syntax highlighting for logical and bitwise operations.
- Changed variable declaration syntax highlighting to allow equals sign notation to be valid.
- Fixed lines being automatically indented.
- Fixed empty comments not having syntax highlighting applied.
- Fixed colons being treated as invalid in variable contents.

## 1.2.1
- Re-added numeric syntax highlighting.
- Added specific syntax highlighting for denoting built-in variables.
- Added `"` and `'` as auto-closing and auto-surrounding pairs.
- Changed argument syntax highlighting to color each segment separately.
- Removed `:`/`;` as auto-closing pairs.
- Fixed nested variables not having proper syntax highlighting applied.
- Fixed URLs having to be prefixed with a space to avoid the protocol being parsed as a property name.
- Fixed comments having to be prefixed with a space to avoid URLs being parsed as comments.
- Fixed the front matter separator `---` not having syntax highlighting applied.
- Fixed CSS at-rule declarators containing hyphens not having proper syntax highlighting applied.
- Fixed single-character strings not being treated as valid.
- Fixed invalid hex colors being treated as valid.
- Fixed general invalid characters not having syntax highlighting applied.

## 1.2.0
- Added argument syntax highlighting.
- Added error checking for illegal characters.
- Added syntax highlighting for CSS at-rules and `!important`.
- Changed color of variable declarator `@var`.
- Changed string parsing to include the quotes in the syntax highlighting.
- Removed numeric syntax highlighting.
- Fixed string parsing allowing alternating quotation marks.
- Refactored internal code to be more semantically correct.

## 1.1.1
- Fixed syntax highlighting of comments appearing as variable contents.
- Fixed syntax highlighting of CSS functions.
- Fixed single quotes not applying quote syntax highlighting.
- Fixed hex colors not having syntax highlighting applied.

## 1.1.0
- Replaced themes with direct semantic colorization from the default theme.

## 1.0.0
- Added NovaSheets Light & Dark Themes which support syntax highlighting.
