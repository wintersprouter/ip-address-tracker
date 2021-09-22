<template>
  <l-map
    class="z-0 -mt-18"
    ref="myMap"
    :zoom="zoom"
    :center="center"
    style="height: 60vh"
  >
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-marker ref="location" :lat-lng="center">
      <l-icon
        :icon-url="icon.type"
        :shadow-url="icon.shadowUrl"
        :icon-size="icon.iconSize"
        :icon-anchor="icon.iconAnchor"
        :shadow-size="icon.shadowSize"
      />
    </l-marker>
  </l-map>
</template>
<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  props: {
    center: {
      type: Array,
      default: () => {},
    },
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      ishomePage: true,
      zoom: 16,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      options: {
        zoomControl: false,
      },
      icon: {
        type: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      },
    };
  },
};
</script>