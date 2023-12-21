<template>
    <div class="dizme_tm_all_wrap" data-magic-cursor="show">
    <MobileHeaderVue dark />
    <HeaderVue dark />

    <div>
      <NavbarComponent /> <!-- Include your navigation bar component -->
      <div class="blog-content">
        <h2>Blog Page - Mockup Shape</h2>
        <!-- Your blog content for Mockup Shape goes here -->
      </div>
    </div>
        <ScrollTopVue />
    </div>

  </template>
  
  <script>
  import HeaderVue from "@/components/layout/Header.vue";
  import MobileHeaderVue from "@/components/layout/MobileHeader.vue";
  import ScrollTopVue from "@/components/layout/ScrollTop.vue";

  
  export default {
    components: {
      ScrollTopVue,
    MobileHeaderVue,
    HeaderVue,
    },
  };
  </script>
  
  <style scoped>
  /* Your component-specific styles go here */
  </style>
  