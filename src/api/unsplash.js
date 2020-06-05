import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID yqD2S3VmaIYNBERtb-TTfY36BnAMvm-7pi4IlKoOT7U",
  },
});
