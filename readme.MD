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

A live preview of the game available ar **[preview is availabel on][sample-preview]**

Or tryout at [codepen.io][codepen]

**Please note Internet Explorer 11 is not supported**

## Attributes

`matrix` columns and rows count in format of 2x2. Accepted values minimum 2x2 and maximum 10x10

      <mini-memory matrix="2x2"></mini-memory>

`lang` Language selection. Current available languages are English, German and Turkish

      <mini-memory lang="de"></mini-memory>

`view` set options for views. Currently have only one option which is ``fullscreen``

      <mini-memory view="fullscreen"></mini-memory>





<iframe height="265" style="width: 100%;" scrolling="no" title="Mini Memory Web Component" src="//codepen.io/softberry/embed/dwBrNB/?height=265&theme-id=dark&default-tab=css,resultundefined" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/softberry/pen/dwBrNB/'>Mini Memory Web Component</a> by Emre Sakarya
  (<a href='https://codepen.io/softberry'>@softberry</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
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
[codepen]:https://codepen.io/softberry/pen/dwBrNB
