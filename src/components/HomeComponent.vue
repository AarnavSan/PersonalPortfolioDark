<template>
  <div class="dizme_tm_section" id="home">
    <div class="dizme_tm_hero">
      <div
        class="background"
        :data-img-url="`/img/slider/${dark ? 2 : 1}.jpg`"
      ></div>
      <div class="container">
        <div class="content">
          <div class="details">
            <div class="hello">
              <h3 class="orangeText">Hello, I'm</h3>
            </div>
            <div class="name">
              <h3>Aarnav Sangekar</h3>
            </div>
            <div class="job">
              <p>
                An <span class="greenText">Engineer</span> From
                <span class="purpleText">India</span>
              </p>
            </div>
            <div class="text">
              <p>
                I'm an Engineer with a passion for designing and developing applications in Augmented Reality, Virtual Reality and Game Development!
              </p>
            </div>
            <div class="button">
              <div class="dizme_tm_button">
                <a class="anchor" href="#about"><span>About Me</span></a>
              </div>
              <div class="social">
                <ul>
                  <li>
                    <a href="https://github.com/AarnavSan"><i class="icon-github-1"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/aarnav-sangekar/"><i class="icon-linkedin-1"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="avatar">
            <div class="image">
              <img src="/img/slider/Aarnav edited Designer.png" alt="" />
            <span
                class="skills figma anim_moveBottom"
                v-html="unity"
              ></span>
              <span class="skills photoshop anim_moveBottom" v-html="threejs"></span>
              <span class="skills illustrator anim_moveBottom" v-html="blender"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="dizme_tm_down">
        <a class="anchor" href="#about" v-html="dark ? mouseDark : mouse">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { unity, blender, threejs, ai, figma, mouse, mouseDark, ps } from "../svg";
export default {
  name: "HomeComponent",
  data() {
    return { unity, blender, threejs, ai, ps, figma, mouse, mouseDark };
  },
  props: {
    dark: { type: Boolean },
  },
};
</script>
