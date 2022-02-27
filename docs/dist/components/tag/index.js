import React from "../../../snowpack/pkg/react.js";
import "./tag.css.proxy.js";
export const Tag = ({employmentType, experience, industry}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "tag-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "tag"
  }, employmentType), /* @__PURE__ */ React.createElement("div", {
    className: "tag"
  }, experience), /* @__PURE__ */ React.createElement("div", {
    className: "tag"
  }, industry));
};
