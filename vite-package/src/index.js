import LearnVueButton from "./components/LearnVueButton.vue";

export default {
  install: (app, options) => {
    app.component("LearnVueButton", LearnVueButton);
  },
};
