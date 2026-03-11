(function(Scratch) {
  'use strict';

  // Kontrollera om vi är i PenguinMod (valfritt men bra praxis)
  if (!Scratch.extensions.unsandboxed) {
    console.error("Denna extension kräver 'Unsandboxed' läge för att kunna ändra webbadress.");
  }

  class MyUrlExtension {
    getInfo() {
      return {
        id: 'urlchanger',
        name: 'URL Ändrare',
        blocks: [
          {
            opcode: 'changeUrl',
            blockType: 'command',
            text: 'ändra webbadress till [URL]',
            arguments: {
              URL: {
                type: 'string',
                defaultValue: 'https://www.google.com'
              }
            }
          }
        ]
      };
    }

    changeUrl(args) {
      const targetUrl = args.URL;
      // Säkerhetskoll för giltig URL
      if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
        window.location.href = targetUrl;
      } else {
        alert("Ogiltig webbadress! Glöm inte http:// eller https://");
      }
    }
  }

  // Detta är den viktiga raden som registrerar blocket i editorn
  Scratch.extensions.register(new MyUrlExtension());

})(Scratch);
