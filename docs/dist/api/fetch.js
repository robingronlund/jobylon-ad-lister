import axios from "../../snowpack/pkg/axios.js";
const url = "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json";
export const fetchjobs = async () => {
  try {
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    if (error) {
      throw new Error("Error fetching jobs");
    }
  }
};
