import React, {useEffect, useState} from "../snowpack/pkg/react.js";
import {CardList} from "./components/card-list/index.js";
import {Header} from "./components/header/index.js";
import {fetchjobs} from "./api/fetch.js";
export const App = () => {
  const [fetching, setFetching] = useState(false);
  const [jobs, setJobs] = useState();
  const getJobs = async () => {
    setFetching(true);
    const data = await fetchjobs();
    if (data) {
      setJobs(data);
      setFetching(false);
    }
  };
  useEffect(() => {
    getJobs();
  }, []);
  if (fetching) {
    return /* @__PURE__ */ React.createElement("div", null, "loading...");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "main-container"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(CardList, {
    jobs
  }));
};
