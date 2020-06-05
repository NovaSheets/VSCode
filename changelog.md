# Changelog

## 0.2.1
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
- Fixed general invalid characters now having syntax highlighting applied.

## 1.2.0
- Added argument syntax highlighting.
- Added error checking for illegal characters.
- Added syntax highlighting for CSS at-rules and `!important`.
- Changed color of variable declarator `@var`.
- Changed internal code to be more semantically correct.
- Changed string parsing to include the quotes in the syntax highlighting.
- Removed numeric syntax highlighting.
- Fixed string parsing allowing alternating quotation marks.

## 1.1.1
- Fixed syntax highlighting of comments appearing as variable contents.
- Fixed syntax highlighting of CSS functions.
- Fixed single quotes not applying quote syntax highlighting.
- Fixed hex colors not having syntax highlighting applied.

## 1.1.0
- Replaced themes with direct semantic colorization from the default theme.

## 1.0.0
- Added NovaSheets Light & Dark Themes which support syntax highlighting.