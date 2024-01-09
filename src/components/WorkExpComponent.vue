<template>
  <div class="dizme_tm_section entry wow fadeInUp" id="experience">
    <div class="dizme_tm_services">
      <div class="container">
        <div class="dizme_tm_main_title" data-align="center">
          <span>Experience</span>
          <h3>Work Experience</h3>
          <p>
            My current experience includes the internships I have done
          </p>
        </div>
        

  <v-timeline class="entry wow fadeInUp" data-wow-duration="1s" align ="start">
    <v-timeline-item
      v-for="(item, i) in experiences"
      :key="i"
      
    >

    <template v-slot:icon><v-avatar :image="item.icon" alt="Experience Image"></v-avatar>
</template>

    <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-white`"
          v-text="item.date"
        ></div>
      </template>
      <v-card  theme="dark" >
      <v-card-item>
        <v-card-title class="text-center">{{item.title}}</v-card-title>
        <v-card-subtitle class="text-center">{{ item.company_name }}</v-card-subtitle>
      </v-card-item>
      <v-divider></v-divider>

      <v-card-text>
        <v-list lines="one">
            <v-list-item
              v-for="(point, i) in item.points"
              :key="i"
            >{{point}}</v-list-item>
          </v-list>
      </v-card-text>

      <div class="text-center"><iframe
            v-if="!(item.yt_src === '')"
            class="mfp-iframe center-block"   data-align="center"
            :src="`//www.youtube.com/embed/${item.yt_src}?autoplay=1`"
            frameBorder="0"
            allowFullScreen
          /><br><p style="font-size: small; font-family: Arial, Helvetica, sans-serif; color: #b9b9b9;">{{ yt_desc }}</p></div>
      
    </v-card>

      <!-- <v-card>
        <v-card-title :class="['text-h6', `bg-${item.color}`]">
          <h1></h1>
          <p></p>
        </v-card-title>
        <v-card-text class="bg-white text--primary">
                    
          
          <v-list lines="two">
            <v-list-item
              v-for="(point, i) in item.points"
              :key="i"
              :title=""
              :subtitle="point"
            ></v-list-item>
          </v-list> -->
          <!-- <v-btn
            :color="item.color"
            variant="outlined"
          >
            Button
          </v-btn> -->
        <!-- </v-card-text>
      </v-card> -->
    </v-timeline-item>
  </v-timeline>
       
</div>
  </div>
 </div>
</template>

<script>


//import ModalBox from "./popup/ModalBox.vue";
export default {
  name: "ServiceCompoent",
  data() {
    return {
      active: 0,      
      experiences : [
        {
          title: "Summer Intern",
          company_name: "e-Yantra, IIT-Bombay",
          icon: "/img/workexp/eyantra.png",
          iconBg: "#FFFFFF",
          color: 'red-lighten-2',
          date: "May 2023 - July 2023",
          yt_src:"h9M9yFwOHIg",
          yt_desc:"e-Yantra Virtual Museum Project Demo (demo voiceover done by Aarnav)",
          points: [
            "Designed and developed a 3D Virtual Museum website.",
            "The virtual museum dynamically expands based on the number of artifacts stored in the database",
            "Took a session on \"sense-act-think\" paradigm with 50 Bhutanese school students from Royal Academy of Bhutan.",
            "Presented A Virtual Reality based Virtual Museum at Akhil Bharatiya Shiksha Samagam 2023 inaugurated by the Hon'ble Prime Minister at Bharat Mandapam, Pragati Maidan, New Delhi.",          
          ],
          detail: {
            images :[],
            descriptions:[]
          }
        },
        {
          title: "VR Intern",
          company_name: "EvolutionCO",
          color: 'purple-lighten-2',
          icon: "/img/workexp/evolutionco.png",
          iconBg: "#FFFFFF",
          date: "Jan 2021 - Feb 2022",
          yt_src:"",
          yt_desc:  "",
          points: [
            "Worked on a virtual reality experience for a leading German company.",
            "Designed and Modelled the 3D Elevator and Elevator Panels and parts using Blender",
            "Using Unity 3D, I developed a virtual reality application working on HTC Vive.",
          ],
          detail: {
            images :[],
            descriptions:[]
          }
        }
      ]
    };
  },
  mounted() {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  },
  methods: {
    close() {
      this.active = 0;
    },
  },
  components: {  },
  props: {
    dark: { type: Boolean },
  },
};
</script>
