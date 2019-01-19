# Memory Game
**WebComponent**
This is a classic Memory Game that can be simply included in any html page like this:

    <html>
      <head>
        	  <script src="//unpkg.com/mini-memory@latest/public/mini-memory.js"></script>
      </head>
      <body>
        <div class="container">
              <mini-memory matrix="2x2"></mini-memory>
        </div>
      </body>
    </html>

## Sample Preview

An online [preview is availabel on][sample-preview]

**Please note Internet Explorer 11 is not supported**

## Attributes

`matrix` columns and rows count in format of 2x2. Accepted values minimum 2x2 and maximum 10x10

      <mini-memory matrix="2x2"></mini-memory>

`lang` Language selection. Current available languages are English, German and Turkish

      <mini-memory lang="de"></mini-memory>

`fullscreen` makes game full screen if exists.

      <mini-memory fullscreen></mini-memory>

      <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="softberry" data-slug-hash="dwBrNB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Mini Memory Web Component">
  <span>See the Pen <a href="https://codepen.io/softberry/pen/dwBrNB/">
  Mini Memory Web Component</a> by Emre Sakarya (<a href="https://codepen.io/softberry">@softberry</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Contribution

Contributors are welcome. [Documentation][docs]
#### TODOs & Notes:

- Customizable image server.
- multiple players
- settings
- complete logs starting with 'Translate:'
- add fullscreen attribute for a fullscreen mobile game with fixed layout(always landscape)

[sample-preview]: http://www.emresakarya.com/mini-memory
[docs]:https://softberry.github.io/memory-game/
