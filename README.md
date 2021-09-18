# Theme Editor

An extension for customizing a theme with a live preview. Also includes saving the theme settings.

Download the extension for your vscode from here - https://marketplace.visualstudio.com/items?itemName=imPavan.theme-editor

![theme-editing-preview](https://media.giphy.com/media/IKq7Kxv1H6ATmxqznq/giphy.gif?cid=790b7611a7c1bad72361061e491ffe49db92550a4e44d41a&rid=giphy.gif&ct=g)

## How to run locally

* Run `npm install` to install dependencies.
* Run `npm run watch` to comple Typescript and Svelte.js
* To launch extension press `Fn F5`.


## After installing extension from marketplace, To open via command:
* `CMD + SHIFT + P` and enter > theme-editor and select *Open Theme Editor*.

## A top-level directory layout
    .
    ├── frontend                # UI files (Svelte)
    ├── dist                    # Compiled files 
    ├── media                   # Images/css files
    ├── src                     # Source files (vscode extension entry)
    └── README.md

## Upcoming features
* Adding authentication feature and able to save the theme settings in the cloud.
* Adding more color settings.
* Auto theme switcher(Day - Light, Night - Dark).

License
----
MIT

