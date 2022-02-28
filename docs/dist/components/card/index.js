import React from "../../../snowpack/pkg/react.js";
import {MdLocationOn} from "../../../snowpack/pkg/react-icons/md.js";
import parse from "../../../snowpack/pkg/html-react-parser.js";
import {Tag} from "../tag/index.js";
import "./card.css.proxy.js";
export const Card = ({job}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "card"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-header"
  }, /* @__PURE__ */ React.createElement("img", {
    src: job.company.logo,
    alt: "company logo",
    className: "card-logo"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, job.company.name)), /* @__PURE__ */ React.createElement(Tag, {
    employmentType: job.employment_type,
    experience: job.experience,
    industry: job.company.industry
  }), /* @__PURE__ */ React.createElement("span", {
    className: "location"
  }, /* @__PURE__ */ React.createElement(MdLocationOn, null), job.locations.map((location, index) => /* @__PURE__ */ React.createElement("p", {
    key: index
  }, location.location.text))), /* @__PURE__ */ React.createElement("h3", null, job.title), /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, parse(job.company.descr)), /* @__PURE__ */ React.createElement("div", {
    className: "cta-wrapper"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "cta",
    href: job.urls.ad,
    target: "_blank",
    rel: "noreferrer"
  }, "Read more")));
};
