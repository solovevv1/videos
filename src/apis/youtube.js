import axios from "axios";

const KEY = "AIzaSyDiMJPGf9-Knf_yegdMD8u35sQZfLDtass";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
