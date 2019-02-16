# Memory Game

**WebComponent**
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/mini-memory)


<!--
```
<custom-element-demo>
<template>
  <script src="//unpkg.com/mini-memory@latest/public/mini-memory.min.js"></script>
</template>
</custom-element-demo>
```
-->
```html
<mini-memory></mini-memory>
```



This is a classic Memory Game that can be simply included in any html page like this:

    <html>
      <head>
        	  <script src="//unpkg.com/mini-memory@latest/public/mini-memory.min.js"></script>
      </head>
      <body>
        <div class="container">
              <mini-memory matrix="2x2"></mini-memory>
        </div>
      </body>
    </html>

## Quick Intro

- **Demo :** [http://www.emresakarya.com/mini-memory][sample-preview]

- **Play with it on :** [Tryout at codepen.io][codepen]

- **Documentation :** [https://softberry.github.io/memory-game/][docs]

**Please note only Native Support of Custome Elements covered.**

**It has not been tested for IE 11 / Edge  and therefor are not supported**

## Attributes

**`matrix`** columns and rows count in format of 2x2. Accepted values minimum 2x2 and maximum 10x10

      <mini-memory matrix="2x2"></mini-memory>

**`lang`** Language selection. Current available languages are English, German and Turkish

      <mini-memory lang="de"></mini-memory>

**`view`** set options for views. Currently have only one option which is `fullscreen`

      <mini-memory view="fullscreen"></mini-memory>


## Documentation

Contributors are welcome. See the [Documentation][docs]. Fork this repo, pick yourself an [open Issue][issues], and go ahead...


### Open Issues:

See open issues at GitHub [open Issue][issues]


[sample-preview]: http://www.emresakarya.com/mini-memory
[docs]: https://softberry.github.io/memory-game/
[codepen]: https://codepen.io/softberry/pen/dwBrNB
[issues]:https://github.com/softberry/memory-game/issues
