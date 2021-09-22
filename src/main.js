import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import { LIcon, LMap, LMarker, LPopup, LTileLayer } from 'vue2-leaflet'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

Vue.use(VueClipboard)
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-popup', LPopup)
Vue.component('l-icon', LIcon)
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
