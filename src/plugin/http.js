import reqwest from 'reqwest';

export default {

  install(Vue) {
    Vue.http = reqwest;
    Vue.prototype.http = reqwest;
  },

};
