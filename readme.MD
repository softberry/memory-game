# Memory Game

**WebComponent**

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/mini-memory)

<!--
```
<custom-element-demo>
<template>
  <p style="text-align:justify; font-family:Helvetica,sans-serif; fontsize:.75em;">
     Please note images used in demo pages are supplied from https://picsum.photos/ which is a free
    image placeholder service and therefore it takes long to load images.
    <br>
    <strong>A fully functional Memory Game</strong> with fast custom image server can be tested at <a href="https://www.emresakarya.com/mini-memory/">https://www.emresakarya.com/mini-memory/</a>

  </p>
    <div style="width:100%;height:100%">
      <mini-memory matrix="2x2"></mini-memory>
    </div>
    <script src="//unpkg.com/mini-memory@latest/public/mini-memory.min.js"></script>
</template>
</custom-element-demo>
```
-->

```html
This is a classic Memory Game that can be simply included in any html page like
this:

<html>
  <head>
    <script src="//unpkg.com/mini-memory@latest/public/mini-memory.min.js"></script>
  </head>
  <body>
    <div class="container"><mini-memory matrix="2x2"></mini-memory></div>
  </body>
</html>
```

## Quick Intro

- **Demo :** [http://www.emresakarya.com/mini-memory][sample-preview]

- **Playground :** [at codepen.io][codepen]

- **Documentation :** [https://softberry.github.io/memory-game/][docs]

- **Use your own images :** Images in this game are obtained from [picsum.photos][picsum] which is a free place holder service. If you would like to use your own images, you will need a decicated image server for this purpose. There is an another  project [Custom image server][image-server] developed with nodejs/express, can be used for this purpose.

  If you do not define your image server in [manifest.json](static/manifest.json) or your image server does not responses, game falls back to [https://picsum.photos][picsum], which is a free image place holder service and may take long time to get images.

**Please note only Native Support of Custome Elements covered.**

**It has not been tested for IE 11 / Edge and therefore are not supported**

## Attributes

**`matrix`** columns and rows count in format of 2x2. Accepted values minimum 2x2 and maximum 10x10

      <mini-memory matrix="2x2"></mini-memory>

**`lang`** Language selection. Current available languages are English, German and Turkish

      <mini-memory matrix="2x2" lang="de"></mini-memory>

**`view`** set options for views. Currently have only one option which is `fullscreen`

      <mini-memory matrix="2x2" view="fullscreen"></mini-memory>

**`settings`** hides settings panel if this value set to ``no``. Default is visible.

      <mini-memory matrix="2x2" settings="no"></mini-memory>

**`challenge`** Turns challenge mode  ``on`` or ``off``. Default is ``on``.

      <mini-memory matrix="2x2" challenge="off"></mini-memory>

Game starts with initially given matrix dimensions and it's increased one by one at each completed level.
If this value set to ``off`` game repeats always same level.

      <mini-memory matrix="2x2" challenge="off"></mini-memory>

## Documentation

Contributors are welcome. See the [Documentation][docs]. Fork this repo, pick yourself an [open Issue][issues], and go ahead...

### Open Issues:

See open issues at GitHub [open Issue][issues]

[sample-preview]: http://www.emresakarya.com/mini-memory
[docs]: https://softberry.github.io/memory-game/
[codepen]: https://codepen.io/softberry/pen/dwBrNB
[issues]: https://github.com/softberry/memory-game/issues
[image-server]: https://github.com/softberry/image-server
[picsum]: https://picsum.photos
