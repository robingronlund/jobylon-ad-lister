// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".tag-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  gap: 12px;\n  margin-top: 12px;\n}\n\n.tag {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  padding: 0 8px;\n  font-size: 12px;\n  font-weight: bold;\n  border-radius: 20px;\n   background-color: var(--color-purple-secondary);\n  color: var(--color-purple-primary);\n\n}\n\n.tag:nth-child(2) {\n  background-color: var(--color-blue-secondary);\n  color: var(--color-blue-primary);\n}\n\n.tag:last-child {\n  background-color: var(--color-green-secondary);\n  color: var(--color-green-primary);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}