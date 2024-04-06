<script setup>
import { onMounted, ref } from 'vue'

import hoverEffect from 'hover-effect';
import image1 from '../assets/toniguy/01.png';
import image2 from '../assets/toniguy/02.png';
import displacementImage from '../assets/toniguy/diss.png';
onMounted(()=>{
  new hoverEffect({
    parent: document.querySelector(".distortion"),
    intensity: 0.2,
    image1,
    image2,
    displacementImage,
    imagesRatio: 380 / 300,
  });
  gsap.from(".navbar div",{
    duration:1.5,
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut,
    stagger:0.08
  })
  gsap.from(".media ul li",{
    duration:1.5,
    delay: 1.5,
    opacity: 0,
    x: "-20",
    ease: Expo.easeInOut,
    stagger:0.08
  })

  // TEXT
  gsap.from(".text h1 .hidetext", {
    duration:1.5,
    delay: 1,
    y: "100%",
    ease: Expo.easeInOut,
  });

  gsap.from(".text h3 .hidetext", {
    duration:1.5,
    delay: 1.2,
    y: "100%",
    ease: Expo.easeInOut,
  });

  gsap.from(".text p .hidetext", {
    duration:1.5,
    delay: 1.3,
    y: "100%",
    ease: Expo.easeInOut,
  });

  gsap.from(".text h2", 1.5, {
    delay: 1.5,
    opacity: 0,
    x: "-10000",
    ease: Expo.easeInOut,
  });

  // SPONSOR
  gsap.from(".sponsor img", {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut,
  });

  gsap.from(".sponsor p", {
    duration: 1.5,
    delay: 1.6,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut,
  });

  // DISTORTION
  gsap.from(".distortion", {
    duration: 1.5,
    delay: 2,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut,
  });

  // OVERLAY
  gsap.to(".first", {
    duration: 1.5,
    delay: 0.5,
    top: "-100%",
    ease: Expo.easeInOut,
  });

  gsap.to(".second", {
    duration: 1.5,
    delay: 0.7,
    top: "-100%",
    ease: Expo.easeInOut,
  });

  gsap.to(".third", {
    duration: 1.5,
    delay: 0.9,
    top: "-100%",
    ease: Expo.easeInOut,
  });
})
</script>

<template>
  <div class="wrapper">
    <!-- OVERLAY
  =============================== -->
    <div class="overlay first"></div>
    <div class="overlay second"></div>
    <div class="overlay third"></div>

    <!-- NAVBAR
  =============================== -->
    <nav class="navbar">
      <div class="menu">
        <ion-icon name="ios-menu"></ion-icon>
      </div>
      <div class="lang">eng</div>
      <div class="search">
        <ion-icon name="ios-search"></ion-icon>
      </div>
    </nav>

    <!-- SOCIAL MEDIA
  =============================== -->
    <div class="media">
      <ul>
        <li>facebook</li>
        <li>instagram</li>
        <li>twitter</li>
      </ul>
    </div>

    <!-- TEXT
  =============================== -->
    <div class="text">
      <h1>
        <span class="hidetext">toni&guy</span>
      </h1>
      <h2>duality</h2>
      <h3>
        <span class="hidetext"
          >collection 2017 <br />
          duality</span
        >
      </h3>
      <p>
        <span class="hidetext">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quis,
          delectus facere neque sunt commodi quae culpa dolores doloribus
          magnam?
        </span>
      </p>
    </div>

    <!-- SPONSOR
  =============================== -->
    <div class="sponsor">
      <img src="../assets/toniguy/sponsor-logo.png" alt="" />
      <p>official sponsor</p>
    </div>

    <!-- DISTORTION
  =============================== -->
    <div class="distortion"></div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins";
  background: #d8dbe2;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
#app{
  font-family: "Poppins";
  background: #d8dbe2;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
<style scoped>

ul {
  list-style: none;
}

.navbar {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
}

.navbar > div {
  padding: 0 30px;
  font-size: 20px;
}

.navbar .menu {
  margin-right: auto;
}

.navbar .lang {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
}

.media ul {
  position: absolute;
  bottom: 250px;
  left: -140px;
  transform: rotate(-90deg);
}

.media ul li {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  display: inline-block;
  padding: 0 30px;
}

.text {
  position: absolute;
  top: 200px;
  left: 100px;
  transform: rotate(-90deg);
}

.text h1 {
  font-size: 120px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -10px;
  margin-bottom: 20px;

  position: relative;
  overflow: hidden;
  height: 150px;
  width: 600px;
}
.text h1 .hidetext {
  position: absolute;
}

.text h2 {
  position: absolute;
  top: 40px;
  left: -80px;
  color: #efde74;
  z-index: -1;
  font-size: 150px;
  font-weight: 600;
  letter-spacing: 8px;
  text-transform: uppercase;
}

.text h3 {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;

  position: relative;
  overflow: hidden;
  height: 80px;
}
.text h3 .hidetext {
  position: absolute;
}

.text p {
  width: 200px;
  font-size: 12px;
  margin-top: 30px;
  font-weight: 500;

  position: relative;
  overflow: hidden;
  height: 110px;
}
.text p .hidetext {
  position: absolute;
}

.sponsor {
  position: absolute;
  right: 100px;
  bottom: 100px;
  text-align: center;
}

.sponsor img {
  width: 200px;
  transform: rotate(-90deg);
}

.sponsor p {
  margin-top: 20px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  transform: rotate(180deg);
}

.distortion {
  width: 580px;
  height: 720px;
  position: absolute;
  right: 300px;
  bottom: 0;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  z-index: 99;
}

.first {
  background: #efde74;
}

.second {
  background: #efde74;
  left: 33.3%;
}

.third {
  background: #efde74;
  left: 66.6%;
}

</style>
