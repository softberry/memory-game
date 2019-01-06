# Memory Game

This is a classic Memory Game that can be simply included in any html page like this:

    <html>
      <head>
        	  <script src="//unpkg.com/mini-memory@latest/public/bundle/mini-memory.js"></script>
      </head>
      <body>
        <div class="container">
              <mini-memory matrix="2x2"></mini-memory>
        </div>
      </body>
    </html>

## Sample Preview

An online [preview is availabel on][sample-preview]
** Please note Internet Explorer 11 is not supported **

## Attributes

`matrix` columns and rows count in format of 2x2. Accepted values minimum 2x2 and maximum 16x16

      <mini-memory matrix="2x2"></mini-memory>

`lang` Language selection. Current available languages are English, German and Turkish

      <mini-memory lang="de"></mini-memory>```

#### TODOs & Notes:

- Customizable image server.
- multiple players
- settings
- complete logs starting with 'Translate:'
- add fullscreen attribute for a fullscreen mobile game with fixed layout(always landscape)

[sample-preview]: http://www.emresakarya.com/mini-memory
