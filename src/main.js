import "~/assets/style/index.scss";
import DefaultLayout from "~/layouts/Default.vue";
import VeeValidate from "vee-validate";

export default function(Vue, { router, head, isClient }) {
  Vue.use(VeeValidate, {
    validity: true
  });
  Vue.component("Layout", DefaultLayout);
}
