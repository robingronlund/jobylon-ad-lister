import React from "../../../snowpack/pkg/react.js";
import {Card} from "../card/index.js";
import "./card-list.css.proxy.js";
export const CardList = ({jobs}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "card-list"
  }, jobs?.map((job, index) => /* @__PURE__ */ React.createElement(Card, {
    key: index,
    job
  })));
};
