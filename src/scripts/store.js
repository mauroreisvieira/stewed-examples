import Vue from "vue";
import Vuex from "vuex";

import { description } from './../../package.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        appName: description,
    }
});
