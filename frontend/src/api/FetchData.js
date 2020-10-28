import axios from "axios";
import { URL } from "../components/util/Util";

async function getAllTweets() {
  const res = await axios.get(URL);
  return res.data;
}

async function deleteTweet(id) {
  const res = await axios.delete(`${URL}${id}`);
  if (res.status === 200) {
    return true;
  }
  return false;
}

async function insertTweet(tweet) {
  const res = await axios.post(URL, tweet);
  if (res.status === 201) {
    return true;
  }
  return false;
}
export { getAllTweets, deleteTweet, insertTweet };
