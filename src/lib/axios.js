import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 60 * 60 * 1000
});

// Next we make an 'instance' of it
const instance = axios.create({
  adapter: cache.adapter,
  // .. where we make our configurations
  baseURL: "https://front-test-api.herokuapp.com"
});

export default instance;
