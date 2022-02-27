// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.card {\n  flex: 0 0 25%;\n  display: flex;\n  flex-direction: column;\n  min-width: 250px;\n  background-color: var(--background);\n  box-shadow: 0 2px 20px 4px rgba(204, 204, 204, 0.5);\n  border-radius: 8px;\n  padding: 16px;\n  animation: fadeIn 1s ease-in;\n}\n\n.card-header {\n  display: inline-flex;\n  align-items: center;\n}\n\n.card-header img {\n  width: 50px;\n  border-radius: 50%;\n}\n\n.card-header label {\n  margin-left: 12px;\n}\n\n.location {\n  display: inline-flex;\n  align-items: center;\n  color: var(--color-dark-gray);\n  font-size: 12px;\n  margin-top: 0px;\n}\n\n.location p {\n  margin-left: 8px;\n}\n\n.card-body {\n  font-size: 12;\n  color: var(--color-dark-gray);\n}\n\n.cta-wrapper {\n  display: flex;\n  align-items: flex-end;\n  height: 100%;\n  gap: 22px;\n  margin-top: 12px;\n}\n\n.cta {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: bold;\n  width: 100%;\n  height: 40px;\n  border-radius: 8px;\n  background-color: var(--secondary);\n  color: var(--text-secondary);\n}\n\n.cta:hover {\n  filter: brightness(110%)\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}