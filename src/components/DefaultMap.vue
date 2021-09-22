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
        :popup-anchor="icon.popupAnchor"
        :shadow-size="icon.shadowSize"
      />
      <l-popup> You are here.</l-popup>
    </l-marker>
  </l-map>
</template>
<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      ishomePage: true,
      zoom: 16,
      center: [25.033493, 121.564101],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      options: {
        zoomControl: false,
      },
      icon: {
        type: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const p = position.coords;
        this.center = [p.latitude, p.longitude];
        this.$refs.location.mapObject.openPopup();
      });
    });
  },
};
</script>