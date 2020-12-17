import Vue from 'vue';
import { setConfig, <%= features %> } from 'cloudinary-build-url';

setConfig({
  cloudName: '<%= cloudName %>'
})

if (Vue && Vue.version && Vue.version.startsWith('2')) {
  /** Vue 2x */
  <% if (image) {%>Vue.prototype.$imageUrl = buildImageUrl;<% } %>
  <% if (video) {%>Vue.prototype.$videoUrl = buildVideoUrl;<% } %>
}

const useCloudinary = (app) => {
  if (!app || !app.config || !app.config.globalProperties) return

  <% if (image) {%>app.config.globalProperties.$imageUrl = buildImageUrl;<% } %>
  <% if (video) {%>app.config.globalProperties.$videoUrl = buildVideoUrl;<% } %>
}

export default useCloudinary