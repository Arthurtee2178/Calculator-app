# Calculator App

Simple static calculator built with HTML, CSS and JavaScript.

Files
- `index.html` — UI and markup
- `styles.css` — styles
- `script.js` — calculator logic and keyboard support

How to run

1. Open `index.html` in your browser (double-click or right-click -> Open With -> Browser).
2. Use the on-screen buttons or your keyboard (numbers, +, -, *, /, Enter to evaluate, Backspace to delete, Esc to clear).

Notes
- This is a small client-side app. No server required.
- The JS uses a minimal evaluation approach (eval) after a basic whitelist check. Don't paste untrusted code into the input.

Possible improvements
- Add parentheses and operator-precedence UI helpers.
- Add a history log and memory buttons (M+, M-, MR).
- Add unit tests and input validation for edge cases.
