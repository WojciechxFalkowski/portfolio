<template>
  <svg class="vbp-header-menu-button__svg" :class="isOpen ? 'menu-open' : ''">
    <line x1="0" y1="50%" x2="100%" y2="50%" class="top" />
    <line x1="0" y1="50%" x2="100%" y2="50%" class="middle" />
    <line x1="0" y1="50%" x2="100%" y2="50%" class="bottom" />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  isOpen: Boolean,
});
</script>

<style>
/* START HAMBURGER MENU STYLES */
.vbp-header-menu-button__svg {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: scaleX(-1);
}

.vbp-header-menu-button__svg line {
  stroke: #192a6b;
  stroke-dasharray: 100%;
  stroke-dashoffset: 0%;
  transition: transform 0.3s, stroke-dashoffset 0.4s;
  transform-origin: center;
  stroke-width: 2px;
}

.vbp-header-menu-button__svg .top {
  transform: translateY(-35%);
  -webkit-transform: translateY(-35%);
  -moz-transform: translateY(35%);
  -ms-transform: translateY(35%);
  -o-transform: translateY(35%);
}

.vbp-header-menu-button__svg .middle {
  transform: scaleX(1);
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transition: opacity 0.3s, transform 0.3s;
  -webkit-transition: opacity 0.3s, transform 0.3s;
  -moz-transition: opacity 0.3s, transform 0.3s;
  -ms-transition: opacity 0.3s, transform 0.3s;
  -o-transition: opacity 0.3s, transform 0.3s;
}

.vbp-header-menu-button__svg .bottom {
  transform: translateY(33%);
  -webkit-transform: translateY(33%);
  -moz-transform: translateY(33%);
  -ms-transform: translateY(33%);
  -o-transform: translateY(33%);
  stroke-dasharray: 100%;
  stroke-dashoffset: 9px;
}
.vbp-header-menu-button__svg:hover .bottom {
  stroke-dashoffset: 0%;
}
/*** Mode Croix ***/
.vbp-header-menu-button__svg.menu-open .top {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  stroke-linecap: round;
}

.vbp-header-menu-button__svg.menu-open .middle {
  transform: scaleX(0.1);
  -webkit-transform: scaleX(0.1);
  -moz-transform: scaleX(0.1);
  -ms-transform: scaleX(0.1);
  -o-transform: scaleX(0.1);
  opacity: 0;
}

.vbp-header-menu-button__svg.menu-open line.bottom {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  stroke-linecap: round;
}

.vbp-header-menu-button__svg.menu-open .bottom {
  stroke-dashoffset: 0%;
}

/* END HAMBURGER MENU STYLES */
</style>
