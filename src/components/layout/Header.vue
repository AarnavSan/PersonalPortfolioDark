<template>
  <div class="dizme_tm_header">
    <div class="container">
      <div class="inner">
        <div class="logo">
          <a href="#"
            >
            <img :src="`img/logo/Aarnav_site_banner.png`" alt=""/>
            <!-- <img :src="`img/logo/${dark ? 'dark' : 'logo'}.png`" alt=""/> -->
          </a>
        </div>
        <div class="menu">
          <ul class="anchor_nav">
            <li class="current"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Work Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <!-- <li><a href="#blog">Blog</a></li> -->
            <li><a href="#contact">Contact</a></li>
            <li class="download_cv">
              <a href="img/cv/Resume - Aarnav Sangekar.pdf" download><span>Download CV</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
  props: {
    dark: { type: Boolean },
  },
};
</script>
