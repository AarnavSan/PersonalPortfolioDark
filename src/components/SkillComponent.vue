<template>
  <div class="dizme_tm_section" id="skills">
    <div class="dizme_tm_services">
      <div class="container">
        <div class="dizme_tm_main_title" data-align="center">
          <span>Skills</span>
          <h3>What I have learned till now</h3>
          <p>
            Coming from an engineering background, I have a combination of strong technical skills with good design thinking
          </p>
        </div>
      </div>

      <v-container>
        <v-row justify="center">
          <!-- First Card -->
          <v-col cols="12" md="5">
            <v-card max-width="700" class="tilt-effect skill-card">
              <v-row>
                <!-- Left Column -->
                <v-col cols="2">
                  <v-row align="center" justify="center" class="img-icon">
                    <img src="/img/skills/Skillset.png" alt="" />
                  </v-row>
                </v-col>

                <!-- Right Column -->
                <v-col cols="9">
                  <v-card-title class="title-text">
                    Skillset
                  </v-card-title>
                  <v-card-text class="list-container card-text">
                    <ul>
                      <li v-for="(item, index) in skillset" :key="index">
                        {{ item }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <!-- Second Card -->
          <v-col cols="12" md="5">
            <v-card max-width="700" class="tilt-effect skill-card">
              <v-row>
                <!-- Left Column -->
                <v-col cols="2">
                  <v-row align="center" justify="center" class="img-icon">
                    <img src="/img/skills/Programming.png" alt="" />
                  </v-row>
                </v-col>

                <!-- Right Column -->
                <v-col cols="9">
                  <v-card-title class="title-text">
                    Programming Languages
                  </v-card-title>
                  <v-card-text class="list-container card-text">
                    <ul>
                      <li v-for="(item, index) in proglang" :key="index">
                        {{ item }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <!-- Third Card -->
          <v-col cols="12" md="5">
            <v-card max-width="700" class="tilt-effect skill-card">
              <v-row>
                <!-- Left Column -->
                <v-col cols="2">
                  <v-row align="center" justify="center" class="img-icon">
                    <img src="/img/skills/Techskills.png" alt="" />
                  </v-row>
                </v-col>

                <!-- Right Column -->
                <v-col cols="9">
                  <v-card-title class="title-text">
                    Technlogical Tools
                  </v-card-title>
                  <v-card-text class="list-container card-text">
                    <ul>
                      <li v-for="(item, index) in tech_tools" :key="index">
                        {{ item }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <!-- Fourth Card -->
          <v-col cols="12" md="5">
            <v-card max-width="700" class="tilt-effect skill-card">
              <v-row>
                <!-- Left Column -->
                <v-col cols="2">
                  <v-row align="center" justify="center" class="img-icon">
                    <img src="/img/skills/DesignTools.png" alt="" />
                  </v-row>
                </v-col>

                <!-- Right Column -->
                <v-col cols="9">
                  <v-card-title class="title-text">
                    Digital Graphic Tools
                  </v-card-title>
                  <v-card-text class="list-container card-text">
                    <ul>
                      <li v-for="(item, index) in graphic_tools" :key="index">
                        {{ item }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="brush_1 wow fadeInLeft" data-wow-duration="1s">
        <img src="/img/brushes/service/5.png" alt="" />
      </div>
      <div class="brush_2 wow zoomIn" data-wow-duration="1s">
        <img src="/img/brushes/service/6.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCompoent",
  data() {
    return {
      active: 0,
      skillset: [ 
        "eXtended Reality",
        "Game Development",
        "3D Modelling",
        "Web and Mobile Applications", 
        "Artificial Intelligence & Machine Learning",
        "Video Editing",
        "Graphic Design"
      ],
      proglang: [ 
      "Java", 
      "JavaScript",
      "Python",
      "C", 
      "C#", 
      "C++",
      "Dart",
      "HTML",
      "CSS",
      "TypeScript"
    ],
      tech_tools: [ 
      "Unity 3D", 
      "Unreal Engine",
      "Git", "Node", "React", "Express", "MongoDB", 
      "MySQL", "AWS"
    ],
    graphic_tools: [ 
      "Blender", "Premiere Pro", "After Effects",
      "Photoshop", "Illustrator", "Pixilart", 
      "Canva", "Figma"
    ]
    };
  },
  mounted() {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 5,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 400,
      transition: true,
      'max-glare': 0.5,
    });
  },
  methods: {
    close() {
      this.active = 0;
    },
  },
};
</script>

<style scoped>
.skill-card {
  box-shadow: 18px 0px 87px rgba(10, 15, 70, 0.07);
  background-color: #4b4f5c;
  color: #fff;
  font-family: inherit;
  padding: 0px 0px 0px 0px;
  height: 250px;
}

.card-icon {
  width: 40px;
  height: auto;
  margin-right: 5px;
}
img {
  width: 80px; /* Adjust the width of the image */
  height: auto; /* Maintain aspect ratio */
  margin-top: 40px;/* Adjust the margin as needed */
  margin-left: 80px;
}

.title-text {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 30px;
  padding-top: 50px;
}

.list-container {
  padding: 10px 20px 20px 40px; /* Adjust the padding as needed */
}

.list-container ul {
  list-style: circle;
  margin: 0;
  padding: 0;
  columns: 2; /* Set the number of columns for the list */
  column-gap: 20px; /* Adjust the gap between columns as needed */
}

.list-container li {
  padding: 2px 2px 2px 2px; /* Adjust the padding as needed */
}


.card-text {
  color: #b9b5c9;
  font-size: 16px;
}
</style>
