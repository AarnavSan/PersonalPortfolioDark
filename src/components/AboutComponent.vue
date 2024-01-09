<template>
  <div class="dizme_tm_section" id="about">
    <div class="dizme_tm_about">
      <div class="container">
        <div class="wrapper">
          <div class="left">
            <img src="/img/slider/Aarnav_eyantra_exhibition.png" alt="" />
          </div>
          <div class="right">
            <div class="title wow fadeInUp" data-wow-duration="1s">
              <span>I am a Creative Engineer</span>
              <h3>I come up with creative ideas for existing problems!</h3>
            </div>
            <div class="text wow fadeInUp" data-wow-duration="1s">
              <p>
                Hello there! I'm Aarnav, an engineer who is primarily interested in working with 
                and learning about Immersive technologies and Game Development. I have been working 
                on personal projects related to educational technologies in the field of 
                XR (eXtended Reality) and Game Development! I'm a highly motivated individual who wants to 
                create a world where learning is fun and interesting. 
                I have worked in my college's GDSC ACE community as the AR/VR and Game Development Lead. I am the current chairperson of CSI - ACE.
                I have also been a curation lead and video production lead at 
                <a href="https://tedxace.com/" style="color: rgb(255,43,6);">
                  TEDxACE</a>.
                My hobbies are playing video games, reading mystery or action novels and watching anime!
                </p>
            </div>
          </div>
        </div>
      </div>
      <div class="brush_1 wow fadeInLeft" data-wow-duration="1s">
        <img src="/img/brushes/about/1.png" alt="" />
      </div>
      <div class="brush_2 wow fadeInRight" data-wow-duration="1s">
        <img src="/img/brushes/about/2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import VueJsCounter from "vue-js-counter";
export default {
  name: "AboutComponent",

  // components: { VueJsCounter },
  props: {
    dark: { type: Boolean },
  },
};
</script>
