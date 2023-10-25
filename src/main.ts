import Vue from 'vue'
import App from './App.vue'
import '../public/archimap.scss';
import 'font-gis/css/font-gis.css';
import 'ol/ol.css';
import 'ol-ext/dist/ol-ext.css';
import '../public/iconicss.min.css';
import 'vuju';
import Element from 'element-ui';

Vue.use(Element)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
