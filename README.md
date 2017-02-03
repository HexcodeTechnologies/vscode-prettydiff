# vscode-prettydiff
Port of atom-beautify from Atom to vscode.

Multi language beautifier for VSCode that uses  [prettydiff](https://github.com/prettydiff/prettydiff) . 

## How To Use
Install the extension :
- Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

    `ext install vscode-prettydiff`

- choose `Prettify using prettydiff`

## Features
- Supports all the languages that atom-beautify supports .
- Uses the same engine [prettydiff](https://github.com/prettydiff/prettydiff) .

## Requirements

VSCode > 1.5

## Extension Settings

Curretly no setting required

## Roadmap (need help)
* Allow configurations 
* Beautify based on selection
* Beautify all opened files.
* Beautify on save automatically
* Beautify on focus shift 

## Known Issue:
* Loses all the undo history after beautification . Probably Vscode bug.