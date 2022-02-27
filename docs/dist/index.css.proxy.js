// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://rsms.me/inter/inter.css');\n\n:root {\n  --background: #ffffff;\n  --primary: #4992fc;\n  --secondary: #ff7a6d;\n  --text-primary: #363636;\n  --text-secondary: #ffffff;\n  --color-light-gray: #f7f7f7;\n  --color-dark-gray: #757576;\n  --color-purple-primary: #a25fe5;\n  --color-purple-secondary: #eadbfd;\n  --color-green-secondary: #d7f3e8;\n  --color-green-primary: #4abd87;\n  --color-blue-secondary: #dbecfc;\n  --color-blue-primary: #4992fc;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  font-family: 'Inter', sans-serif;\n}\n\n@supports (font-variation-settings: normal) {\n  html {\n    font-family: 'Inter var', sans-serif;\n  }\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  background: rgb(108, 168, 255);\nbackground: rgb(108,168,255);\nbackground: linear-gradient(360deg, rgba(108,168,255,1) 0%, rgba(182,207,244,1) 71%);\n}\n\nbody {\n  min-height: 100%;\n}\n\nbutton {\n  border: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  color: var(--text-primary);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}