import { useRoute } from "vue-router";
import guestsConfigs from "../guestsConfigs";

export default () => {
  const route = useRoute();

  const guestKey = route.params.key;
  return guestsConfigs[guestKey];
};
