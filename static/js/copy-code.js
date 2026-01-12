(function() {
    "use strict";

    var css = ".highlight { position: relative !important; }" +
        ".copy-code-button {" +
        "  position: absolute !important;" +
        "  top: 8px !important;" +
        "  right: 8px !important;" +
        "  padding: 5px !important;" +
        "  background: rgba(255,255,255,0.9) !important;" +
        "  border: 1px solid rgba(0,0,0,0.1) !important;" +
        "  border-radius: 4px !important;" +
        "  cursor: pointer !important;" +
        "  color: #64748b !important;" +
        "  line-height: 1 !important;" +
        "  z-index: 100 !important;" +
        "}" +
        ".copy-code-button:hover { background: rgba(0,0,0,0.05) !important; color: #374151 !important; }" +
        ".copy-code-button.copied { color: #10b981 !important; }";

    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var clipboardSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    var checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';

    function addButtons() {
        var blocks = document.querySelectorAll(".highlight");

        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            if (block.querySelector(".copy-code-button")) continue;

            var btn = document.createElement("button");
            btn.className = "copy-code-button";
            btn.type = "button";
            btn.setAttribute("aria-label", "Copy code to clipboard");
            btn.innerHTML = clipboardSvg;

            (function(b, button) {
                button.onclick = function() {
                    var code = b.querySelector("code");
                    var pre = b.querySelector("pre");
                    var text = code ? code.innerText : (pre ? pre.innerText : "");
                    navigator.clipboard.writeText(text).then(function() {
                        button.innerHTML = checkSvg;
                        button.classList.add("copied");
                        setTimeout(function() {
                            button.innerHTML = clipboardSvg;
                            button.classList.remove("copied");
                        }, 2000);
                    });
                };
            })(block, btn);

            block.appendChild(btn);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", addButtons);
    } else {
        addButtons();
    }
})();
