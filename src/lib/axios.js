import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 60 * 60 * 1000
});

const instance = axios.create({
  adapter: cache.adapter,
  baseURL: "https://front-test-api.herokuapp.com"
});

export default instance;
