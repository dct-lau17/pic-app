import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YO5UxtH_MY7yQl2qM-GCuSMS9uYC236GgGkXMfoo014"
  },
});
