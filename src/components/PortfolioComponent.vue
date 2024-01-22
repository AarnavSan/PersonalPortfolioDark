<template>
  <div class="dizme_tm_section" id="portfolio">
    <div class="dizme_tm_portfolio">
      <div class="container">
        <div class="dizme_tm_main_title" data-align="center">
          <span>Portfolio</span>
          <h3>My Amazing Works</h3>
          <p>
            This is a compilation some of my most recent and relevant projects. 
          </p>
        </div>
        <div class="portfolio_filter">
          <ul>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '1' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '1')"
                data-filter="*"
                >All</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '2' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '2')"
                data-filter=".arvr"
                >AR/VR</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '3' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '3')"
                data-filter=".gamedev"
                >Game Development</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '4' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '4')"
                data-filter=".iot"
                >IoT</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '5' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '5')"
                data-filter=".webmobile"
                >Web and Mobile Applications</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '6' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '6')"
                data-filter=".threed"
                >3D Designs</a
              >
              <!-- <a
                class="c-pointer"
                :class="activeNav === '7' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '7')"
                data-filter=".editedvideos"
                >Edited Videos</a
              > -->
            </li>
          </ul>
        </div>
        <div class="dizme_tm_portfolio_titles"></div>
        <div class="portfolio_list wow fadeInUp" data-wow-duration="1s">
          <ul class="gallery_zoom grid">

            <!-- EXPLOAR STARTS -->
            <li class="arvr grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="ExploAR"
                  data-category="AR/VR"
                >
                  <a
                    class="portfolio_popup"
                    href="#"
                    @click.prevent="active = 1"
                  >
                    <img src="/img/thumbs/42-56.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/projects/exploar/solar_system1.jpg"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>ExploAR</h3>
                  <span>AR/VR</span>
                </div>
              </div>
            </li>
            <!-- EXPLOAR ENDS -->

              <!-- DONUT 4.0 STARTS -->
              <li class="threed grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Blender Donut"
                  data-category="3D Design"
                >
                  <a
                    class="popup-youtube"
                    href="#"
                    @click.prevent="() => onClick('youtube', 'HP_MO3aRzkw')"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/blender/blenderdonut.png"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Blender Donut</h3>
                  <span>3D Design</span>
                </div>
              </div>
            </li>
            <!-- DONUT 4.0 ENDS -->

            <!-- HMAN ADVENTURES STARTS -->
              <li class="gamedev grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Hman Adventures"
                  data-category="Game Development"
                >
                  <a
                    class="portfolio_popup"
                    href="#"
                    @click.prevent="active = 3"
                  >
                    <img src="/img/thumbs/42-56.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/projects/hman/hman_adv_ingame.png"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Hman Adventures</h3>
                  <span>Game Development</span>
                </div>
              </div>
            </li>
            <!-- HMAN ADVENTURES ENDS -->

            <!-- HOLONUT STARTS -->
            <li class="threed grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Hologram Donut"
                  data-category="3D Design"
                >
                  <a
                    class="popup-youtube"
                    href="#"
                    @click.prevent="() => onClick('youtube', 'GFIy3udogWU')"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/blender/holonut.png"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Hologram Donut</h3>
                  <span>3D Design</span>
                </div>
              </div>
            </li>
            <!-- HOLONUT ENDS -->

            <!-- EARTH STARTS -->
            <li class="threed grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Realistic Earth in Blender"
                  data-category="3D Design"
                >
                  <a
                    class="zoom"
                    href="#"
                    @click.prevent="() => onClick('img', 'img/portfolio/blender/realisticearth.png')"
                  >
                    <img src="/img/thumbs/42-56.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/blender/realisticearth.png"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Realistic Earth in Blender</h3>
                  <span>3D Design</span>
                </div>
              </div>
            </li>
            <!-- EARTH ENDS -->

            <!-- GREETAR STARTS -->
            <li class="arvr grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="GreetAR"
                  data-category="AR/VR"
                >
                  <a
                    class="portfolio_popup"
                    href="#"
                    @click.prevent="active = 2"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/projects/greetar/greet_ar_show.jpg"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>GreetAR</h3>
                  <span>AR/VR</span>
                </div>
              </div>
            </li>
            <!-- GREETAR ENDS -->

            <!-- AUTOTOLLER STARTS -->
            <li class="iot grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="AutoToller"
                  data-category="IoT"
                >
                  <a
                    class="portfolio_popup"
                    href="#"
                    @click.prevent="active = 4"
                  >
                    <img src="/img/thumbs/42-56.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/projects/autotoller/auto_toller_setup.jpg"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>AutoToller</h3>
                  <span>IoT</span>
                </div>
              </div>
            </li>
            <!-- AUTOTOLLER ENDS -->

            <!-- SOFA STARTS -->
            <li class="threed grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="A Sofa So Good"
                  data-category="3D Design"
                >
                  <a
                    class="zoom"
                    href="#"
                    @click.prevent="() => onClick('img', 'img/portfolio/blender/sofa.png')"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/blender/sofa.png"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>A Sofa So Good</h3>
                  <span>3D Design</span>
                </div>
              </div>
            </li>
            <!-- SOFA ENDS -->

            <!-- DonutBreakfast STARTS -->
            <li class="threed grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Breakfast with a Donut"
                  data-category="3D Design"
                >
                  <a
                    class="zoom"
                    href="#"
                    @click.prevent="() => onClick('img', 'img/portfolio/blender/Breakfast.png')"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/blender/Breakfast.png"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Breakfast with a Donut</h3>
                  <span>3D Design</span>
                </div>
              </div>
            </li>
            <!-- DonutBreakfast ENDS -->

            <!-- TEDxACE Virtual Stage STARTS -->
            <li class="threed grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="TEDxACE Virtual Stage"
                  data-category="3D Design"
                >
                  <a
                    class="portfolio_popup"
                    href="#"
                    @click.prevent="active = 5"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/projects/tedxace/tedxace_stage.png"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>TEDxACE Virtual Stage</h3>
                  <span>3D Design</span>
                </div>
              </div>
            </li>
            <!-- TEDxACE Virtual Stage ENDS -->

            <!-- CHAIR STARTS -->
            <li class="threed grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Chair"
                  data-category="3D Design"
                >
                  <a
                    class="zoom"
                    href="#"
                    @click.prevent="() => onClick('img', 'img/portfolio/blender/chair.png')"
                  >
                    <img src="/img/thumbs/42-56.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/blender/chair.png"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Chair</h3>
                  <span>3D Design</span>
                </div>
              </div>
            </li>
            <!-- CHAIR ENDS -->

            <!-- APARTMENT STARTS -->
            <li class="threed grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="A model apartment"
                  data-category="3D Design"
                >
                  <a
                    class="zoom"
                    href="#"
                    @click.prevent="() => onClick('img', 'img/portfolio/blender/apartment.png')"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/blender/apartment.png"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>A model apartment</h3>
                  <span>3D Design</span>
                </div>
              </div>
            </li>
            <!-- APARTMENT ENDS -->


          </ul>
        </div>
      </div>
      <div class="brush_1 wow zoomIn" data-wow-duration="1s">
        <img src="/img/brushes/portfolio/1.png" alt="" />
      </div>
      <div class="brush_2 wow fadeInRight" data-wow-duration="1s">
        <img src="/img/brushes/portfolio/2.png" alt="" />
      </div>
    </div>
  </div>

  <MagnificPopUpVue
    :modal="modal"
    :close="closeModal"
    :name="name"
    :src="src"
  />

<!-- POPUPS -->
  <!-- POPUP 1 EXPLOAR-->
  <div :class="`${active === 1 ? '' : 'hidden_content'}`">
    <ModalBox :close="close">

      <div class="popup_details">
        
        <div class="top_image">
          <img src="/img/portfolio/projects/exploar/solar_system1.jpg" alt="" />

          <div
            class="main"
            data-img-url="/img/portfolio/projects/exploar/solar_system1.jpg"
            style="background-image: url('/img/portfolio/projects/exploar/solar_system1.jpg')"
          ></div> 
          
        </div>
        <div class="portfolio_main_title">
          <h3>ExploAR</h3>
          <span><a href="#">AR/VR</a></span>
          <div></div>
        </div>
        <div class="main_details">
          <div class="textbox">
            <p>
              ExploAR
            </p>
            <p style="text-align:justify">
              ExploAR is a work-in-progress AR Education Application 
              for school students that 
              teaches concepts in Augmented Reality. 
              It visualizes the concepts with animations, 3D 
              models and interactions and 
              runs on any android Phone that has ARCore supported.<br><br>
            
         
              Textual learning from textbooks gets repetitive and boring. 
              It is often hard to understand 
              complex concepts just from text. 
              ExploAR is my attempt at 
              making an augmented reality 
              based application that 
              could help students learn while having fun.<br><br>
              
              ExploAR uses Unity3D and ARCore 
              for a robust augmented reality application. 
              Currently it has an animated solar system, 
              a base version of the human skeleton 
              system and a projectile motion physics simulator.<br><br>

              <img src="/img/portfolio/projects/exploar/solar_system1.jpg" alt="" /><br>
              The solar system is animated with relative 
              revolutional speeds that are as relatively 
              accurate as I could make them. All the planets 
              are labeled and revolve around the sun.
              The size and scale is also relatively approximate.<br><br>

              <img src="/img/portfolio/projects/exploar/skele1.jpg" alt="" /><br>
              The base version of the human skeleton system 
              has some parts labelled, just as a proof 
              of concept of how more subjects and concepts can be shown.<br><br>
              
              <img src="/img/portfolio/projects/exploar/proj_motion2.jpg" alt="" /><br>
              The projectile motion simulator is 
              still in progress. It uses the default unity's physics 
              engine. There are options to change the velocity value and the inital angle of motion.
              My idea for this section is to be sort of like a quiz, 
              where some of the parameters would be 
              fixed, and you would be taught how to 
              solve the equation to shoot the cannon accurately and hit an objective.

            </p>
          </div>
          <div class="detailbox">
            <ul>
              <li>
                <span class="first">Technologies</span>
                <div class="margin-right justify-center ga-2 mt-2">          
            <v-chip 
            class="mr-2 ma-2"
            size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/blender.svg"></v-img>
            </v-avatar>
            Blender
          </v-chip><v-chip
          class="mr-2 ma-2"
          size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/unity.svg"></v-img>
            </v-avatar>
            Unity
          </v-chip>
        </div>
              </li>
              <li>
                <span class="first">Category</span>
                <span><a href="#">AR/VR</a></span>
              </li>
              <!-- <li>
                <span class="first">Date</span>
                <span>March 2021</span>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="additional_images">
          <ul>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/exploar/solar_system2.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/exploar/solar_system2.jpg"
                    style="background-image: url('/img/portfolio/projects/exploar/solar_system2.jpg')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/exploar/proj_motion3.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/exploar/proj_motion3.jpg"
                    style="background-image: url('/img/portfolio/projects/exploar/proj_motion3.jpg')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/exploar/skele2.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/exploar/skele2.jpg"
                    style="background-image: url('/img/portfolio/projects/exploar/skele2.jpg')"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ModalBox>
  </div>
  <!-- POPUP 1 EXPLOAR ENDS -->
    <!-- POPUP 2 GREETAR -->
    <div :class="`${active === 2 ? '' : 'hidden_content'}`">
    <ModalBox :close="close">

      <div class="popup_details">
        
        <div class="top_image">
          <img src="/img/portfolio/projects/greetar/greet_ar_show.jpg" alt="" />

          <div
            class="main"
            data-img-url="/img/portfolio/projects/greetar/greet_ar_show.jpg"
            style="background-image: url('/img/portfolio/projects/greetar/greet_ar_show.jpg')"
          ></div> 
          
        </div>
        <div class="portfolio_main_title">
          <h3>GreetAR</h3>
          <span><a href="#">AR/VR</a></span>
          <div></div>
        </div>
        <div class="main_details">
          <div class="textbox">
            <p>
              GreetAR
            </p>
            <p style="text-align:justify">
              GreetAR is an AR greeting card made to be a special gifting option for your loved ones. 
              Greeting cards are one of the most commonly gifted options during birthdays and special occasions. 
              Adding a more personalized touch to it using 3D models and animated options 
              is a good way to add a unique twist on it.<br><br>
            
              I originally came up with the idea for a friend's birthday. 
              I made 3D models and animations using Blender and Unity and 
              used the Vuforia plugin for adding Augmented Reality. 
              I created the animations and models to show some of our memories and inside jokes.<br><br>
              
              For a better and more general proof of concept, I added Fireworks using Visual Effects Graph 
              and 3D text from Blender to the application.<br><br>

              I am currently planning and researching on adding more customisation options and maybe a website to 
              create similar Greeting Card experiences, 
              where I can let the users choose 3D options and the texts on the Greeting Card.<br><br>

              I used Unity for the 3D development engineer, 
              Vuforia Plugin for adding Image Target based Augmented Reality 
              and Blender for making 3D models for the application. 
              The Greeting Card was designed in Canva.
            </p>
          </div>
          <div class="detailbox">
            <ul>
              <li>
                <span class="first">Technologies</span>
                <div class="margin-right justify-center ga-2 mt-2">          
            <v-chip 
            class="mr-2 ma-2"
            size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/blender.svg"></v-img>
            </v-avatar>
            Blender
          </v-chip><v-chip
          class="mr-2 ma-2"
          size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/unity.svg"></v-img>
            </v-avatar>
            Unity
          </v-chip>
          <v-chip
          class="mr-2 ma-2"
          size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/Canva.svg"></v-img>
            </v-avatar>
            Canva
          </v-chip>
        </div>
              </li>
              <li>
                <span class="first">Category</span>
                <span><a href="#">AR/VR</a></span>
              </li>
              <!-- <li>
                <span class="first">Date</span>
                <span>March 2021</span>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="additional_images">
          <ul>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/greetar/greet_ar1.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/greetar/greet_ar1.jpg"
                    style="background-image: url('/img/portfolio/projects/greetar/greet_ar1.jpg')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/greetar/greet_ar2.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/greetar/greet_ar2.jpg"
                    style="background-image: url('/img/portfolio/projects/greetar/greet_ar2.jpg')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/greetar/greet_ar_show1.png" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/greetar/greet_ar_show1.png"
                    style="background-image: url('/img/portfolio/projects/greetar/greet_ar_show1.png')"
                  ></div>
                </div>
              </div>
              
            </li>
          </ul>
        </div>
      </div>
    </ModalBox>
    </div>
  <!-- POPUP 2 GREETAR ENDS -->

  <!-- POPUP 3 HMANADVENTURES -->
  <div :class="`${active === 3 ? '' : 'hidden_content'}`">
    <ModalBox :close="close">

      <div class="popup_details">
        
        <div class="top_image">
          <img src="/img/portfolio/projects/hman/hman_adv_ingame.png" alt="" />

          <div
            class="main"
            data-img-url="/img/portfolio/projects/hman/hman_adv_ingame.png"
            style="background-image: url('/img/portfolio/projects/hman/hman_adv_ingame.png')"
          ></div> 
          
        </div>
        <div class="portfolio_main_title">
          <h3>Hman Adventures</h3>
          <span><a href="#">Game Development</a></span>
          <div></div>
        </div>
        <div class="main_details">
          <div class="textbox">
            <p>
              Hman Adventures
            </p>
            <p style="text-align:justify">
              H-Man's Adventure is a 2D Platformer made in Unity3D. 
              The game had pixel-art styled graphics. 
              Pixel art was made using Pixilart. 
              The player, character and item arts were custom made in pixilart.<br><br>
              
              <img src="/img/portfolio/projects/hman/hman_adv_ingame3.png" alt="" /><br>
              I used Unity Engine to design the game. The idea I had in mind was to give the player 
              an end objective to get to and finish the level, but to do this they had to 
              collect a specific item hidden in the level. 
              This specific item would be away from the path the game directs you on, 
              and takes some additional platforming to get to. While designing,
              I ensured there were available paths for backtracking 
              if the player initially misses the second path to get the objective and reaches the end, 
              as well as a message telling them to go back and get the objective item.<br><br>
              
              <img src="/img/portfolio/projects/hman/hman_adv_ingame2.png" alt="" /><br>
              This game was originally inspired by a birthday gift for a friend of mine, and then improved upon a little. 
              As someone who loves to work with visual technologies and game development, 
              I made this game as a sort of tribute to one of my closest friends, who helps us out a lot.<br><br>

              <img src="/img/portfolio/projects/hman/hman_adv_ingame4.png" alt="" /><br>
            </p>
          </div>
          <div class="detailbox">
            <ul>
              <li>
                <span class="first">Technologies</span>
                <div class="margin-right justify-center ga-2 mt-2">          
            <v-chip 
            class="mr-2 ma-2"
            size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/blender.svg"></v-img>
            </v-avatar>
            Blender
          </v-chip><v-chip
          class="mr-2 ma-2"
          size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/unity.svg"></v-img>
            </v-avatar>
            Unity
          </v-chip>
          <v-chip
          class="mr-2 ma-2"
          size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/Canva.svg"></v-img>
            </v-avatar>
            Canva
          </v-chip>
        </div>
              </li>
              <li>
                <span class="first">Category</span>
                <span><a href="#">Game Development</a></span>
              </li>
              <!-- <li>
                <span class="first">Date</span>
                <span>March 2021</span>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="additional_images">
          <ul>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/hman/hman_adv_ingame5.png" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/hman/hman_adv_ingame5.png"
                    style="background-image: url('/img/portfolio/projects/hman/hman_adv_ingame5.png')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/hman/hman_adv_ingame6.png" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/hman/hman_adv_ingame6.png"
                    style="background-image: url('/img/portfolio/projects/hman/hman_adv_ingame6.png')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/hman/hman_adv.png" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/hman/hman_adv.png"
                    style="background-image: url('/img/portfolio/projects/hman/hman_adv.png')"
                  ></div>
                </div>
              </div>
              
            </li>
          </ul>
        </div>
      </div>
    </ModalBox>
    </div>
  <!-- POPUP 3 HMANADVENTURES ENDS -->

  <!-- POPUP 4 AUTOTOLLER -->
  <div :class="`${active === 4 ? '' : 'hidden_content'}`">
    <ModalBox :close="close">

      <div class="popup_details">
        
        <div class="top_image">
          <img src="/img/portfolio/projects/autotoller/mongo_dashboard.png" alt="" />

          <div
            class="main"
            data-img-url="/img/portfolio/projects/autotoller/mongo_dashboard.png"
            style="background-image: url('/img/portfolio/projects/autotoller/mongo_dashboard.png')"
          ></div> 
          
        </div>
        <div class="portfolio_main_title">
          <h3>AutoToller</h3>
          <span><a href="#">IoT</a></span>
          <div></div>
        </div>
        <div class="main_details">
          <div class="textbox">
            <p>
              AutoToller
            </p>
            <p style="text-align:justify">
              AutoToller is an IoT infrastructure that uses license plate detection to detect number plates 
              and automatically deduct tolls using an IoT device at the tolling booths.<br><br>
            
              AutoToller uses a NodeMCU device to be placed at the tollgates to 
              remove the need for a manual toll collection system. 
              Each device has its own "road_id" that tell where it is being placed, 
              and which entrance of the toll road it is placed at.<br><br>
              
              We have a NodeMCU as the base IOT device. It has an ultrasonic sensor and a camera. 
              When a vehicle comes near enough, the ultrasonic sensor is used to judge its distance. 
              Once it comes close, the nodeMCU uses the camera to get a photo and read the license plate on the vehicle.
              It does so by using OpenCV to find the number plate using Canny Edge detection and Contour detection. 
              Then it uses easyocr to perform OCR on the license plate and get this text.<br><br>

              The NodeMCU then sends the road_id data which denotes what road it has been placed on, 
              entry_device on whether its at one entrance or the other, 
              and the license_plate which has the license plate number of the vehicle, 
              to a express JS Web server that is a RESTful API hosted on the Render.com Cloud. 
              This API then sends this data for storage on the MongoDB Atlas Database for storage.<br><br>

              The NodeMCU serves as the main controller unit of our project, 
              using the ultrasonic sensor to detect how far a vehicle is and a camera for the license plate detection. 
              We chose to go with a webcam connected to the laptop that sends the license plate data 
              to the NodeMCU using a websocket.<br><br>

              This was a team project for our IoE mini project. 
              I ideated and created the entire architecture and flow for an automatic tolling system.
               I designed the entire system, and planned out the work. 
               I also build all the components. 
              My teammates helped with the documentation and necessary reports.
            </p>
          </div>
          <div class="detailbox">
            <ul>
              <li>
                <span class="first">Technologies</span>
                <div class="margin-right justify-center ga-2 mt-2">          
            <v-chip 
            class="mr-2 ma-2"
            size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/arduino.svg"></v-img>
            </v-avatar>
            Arduino
          </v-chip><v-chip
          class="mr-2 ma-2"
          size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/nodejs-icon.svg"></v-img>
            </v-avatar>
            Node
          </v-chip>
          <v-chip
          class="mr-2 ma-2"
          size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/javascript.svg"></v-img>
            </v-avatar>
            Express
          </v-chip>
          <v-chip
          class="mr-2 ma-2"
          size="x-small"
            pill
            v-bind="props"
          >
            <v-avatar start>
              <v-img src="img/svg/skills/mongodb.svg"></v-img>
            </v-avatar>
            MongoDB
          </v-chip>
        </div>
              </li>
              <li>
                <span class="first">Category</span>
                <span><a href="#">IoT</a></span>
              </li>
              <!-- <li>
                <span class="first">Date</span>
                <span>March 2021</span>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="additional_images">
          <ul>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/autotoller/mongo_storage.png" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/autotoller/mongo_storage.png"
                    style="background-image: url('/img/portfolio/projects/autotoller/mongo_storage.png')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/autotoller/render_server_hosting.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/autotoller/render_server_hosting.jpg"
                    style="background-image: url('/img/portfolio/projects/autotoller/render_server_hosting.jpg')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="/img/portfolio/projects/autotoller/auto_toller_setup.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="/img/portfolio/projects/autotoller/auto_toller_setup.jpg"
                    style="background-image: url('/img/portfolio/projects/autotoller/auto_toller_setup.jpg')"
                  ></div>
                </div>
              </div>
              
            </li>
          </ul>
        </div>
      </div>
    </ModalBox>
    </div>
  <!-- POPUP 4 AUTOTOLLER ENDS -->

  <!-- POPUP 5 TEDxACE -->
  <div :class="`${active === 5 ? '' : 'hidden_content'}`">
  <ModalBox :close="close">

    <div class="popup_details">
      
      <div class="top_image">
        <img src="/img/portfolio/projects/tedxace/tedxace_stage.png" alt="" />

        <div
          class="main"
          data-img-url="/img/portfolio/projects/tedxace/tedxace_stage.png"
          style="background-image: url('/img/portfolio/projects/tedxace/tedxace_stage.png')"
        ></div> 
        
      </div>
      <div class="portfolio_main_title">
        <h3>TEDxACE Virtual Stage</h3>
        <span><a href="#">3D Design</a></span>
        <div></div>
      </div>
      <div class="main_details">
        <div class="textbox">
          <p style="text-align:justify">
            The TEDxACE 2021 and TEDxACE 2022 events were held virtually due to the Covid 2020 pandemic. 
            As the only other member of the video production team during TEDxACE 2022, I noticed the lack of a uniform  background in our speakers' videos from TEDxACE 2021. 
            Since every speaker had  recorded their talks at each of their own places, we had a wide variety of backgrounds in these videos.<br><br>
            <iframe style="padding-right:40px" width="300" height="200" src="https://www.youtube.com/embed/4qmj72FYjLc" title="Solving water scarcity with river rejuvenation project | Ravindra Desai | TEDxACE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="200" height="200" src="https://www.youtube.com/embed/aiwfVSATUxo" title="How dance helps you rise up on your feet! | Akshay Bhosale | TEDxACE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br><br>
            To solve this problem of a non-uniform background for our 2022 event, 
            I proposed the idea of a 3D-rendered custom made TEDxACE stage. 
            Once accepted by the licensee and co-licensee of TEDxACE, 
            I began prototyping and rendering different combinations of these stages using Blender.<br><br>

            <img src="/img/portfolio/projects/tedxace/tedxace_frontstage_2.png" alt="" /><br>

            
            I experimented by adding different lights and different props, almost all of which were custom made.             
            These props included wireframe lightbulbs and cones, a 3D representation of our event logo etc.<br><br>
            <img src="/img/portfolio/projects/tedxace/tedxace_frontstage_9.png" alt="" /><br>

            After a lot of suggestions and changes, we settled on the following final virtual background:<br><br>
            <img src="/img/portfolio/projects/tedxace/tedxace_stage.png" alt="" /><br>

            This background was chosen for all our videos, and you can see the videos of TEDxACE 2022 on the official TEDx channel. Here is a playlist of those videos:<br><br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=J6nuG-6tXKVMEOFa&amp;list=PLjZMwzLv2Pf2e8o-p3pbts4pT5cCGv7BD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            The following are all of the prototype renders I made for the TEDxACE Virtual Stage:<br><br>
          </p>
        </div>
        <div class="detailbox">
          <ul>
            <li>
              <span class="first">Technologies</span>
              <div class="margin-right justify-center ga-2 mt-2">          
            <v-chip 
              id="blender"
              class="mr-2 ma-2"
              size="x-small"
              pill
              v-bind="props"
            >
            <v-avatar start>
              <v-img src="img/svg/skills/blender.svg"></v-img>
            </v-avatar>
            Blender
          </v-chip>
          <v-chip 
              id="adobe-premiere"
              class="mr-2 ma-2"
              size="x-small"
              pill
              v-bind="props"
            >
            <v-avatar start>
              <v-img src="img/svg/skills/adobe-premiere.svg"></v-img>
            </v-avatar>
            Adobe Premiere Pro
          </v-chip>
      </div>
            </li>
            <li>
              <span class="first">Category</span>
              <span><a href="#">3D Design</a></span>
            </li>
            <!-- <li>
              <span class="first">Date</span>
              <span>March 2021</span>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="additional_images">
        <ul>
          <li v-for="n in 12" :key="n">
          <div class="list_inner">
            <div class="my_image">
              <img :src="`/img/portfolio/projects/tedxace/tedxace_frontstage_${n}.png`" alt="" />
              <div
                class="main"
                :data-img-url="`/img/portfolio/projects/tedxace/tedxace_frontstage_${n}.png`"
                :style="{ backgroundImage: `url('/img/portfolio/projects/tedxace/tedxace_frontstage_${n}.png')` }"
              ></div>
            </div>
          </div>
          </li>
          <li v-for="n in 4" :key="n">
          <div class="list_inner">
            <div class="my_image">
              <img :src="`/img/portfolio/projects/tedxace/tedxace_sideview${n}.png`" alt="" />
              <div
                class="main"
                :data-img-url="`/img/portfolio/projects/tedxace/tedxace_sideview${n}.png`"
                :style="{ backgroundImage: `url('/img/portfolio/projects/tedxace/tedxace_sideview${n}.png')` }"
              ></div>
            </div>
          </div>
          </li>
          <li >
          <div class="list_inner">
            <div class="my_image">
              <img :src="`/img/portfolio/projects/tedxace/tedxace_stage.png`" alt="" />
              <div
                class="main"
                :data-img-url="`/img/portfolio/projects/tedxace/tedxace_stage.png`"
                :style="{ backgroundImage: `url('/img/portfolio/projects/tedxace/tedxace_stage.png')` }"
              ></div>
            </div>
          </div>
          </li>
        </ul>
      </div>
    </div>
  </ModalBox>
  </div>
  <!-- POPUP 5 TEDxACE ENDS -->

<!-- POPUPS END -->
</template>

<script>
import MagnificPopUpVue from "./popup/MagnificPopUp.vue";
import ModalBox from "./popup/ModalBox.vue";
export default {
  name: "PortfolioComponent",
  data() {
    return {
      activeNav: "1", // props
      name: "",
      src: "",
      modal: false,
      // Content
      active: 0,
    };
  },
  mounted() {
    let Isotope = require("isotope-layout");
    setTimeout(() => {
      let iso = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
      let filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function (itemElem) {
          let number = itemElem.querySelector(".number").textContent;
          return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function (itemElem) {
          let name = itemElem.querySelector(".name").textContent;
          return name.match(/ium$/);
        },
      };
      // bind filter button click filter main funtion
      let filtersElem = document.querySelector(".portfolio_filter ul");
      filtersElem.addEventListener("click", function (event) {
        if (event.target.getAttribute("data-filter")) {
          let filterValue = event.target.getAttribute("data-filter");
          filterValue = filterFns[filterValue] || filterValue;
          iso.arrange({ filter: filterValue });
        }
      });
    }, 1000);
  },
  methods: {
    onClick(name, src) {
      this.name = name;
      this.src = src;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
      this.name = "";
      this.src = "";
    },
    close() {
      this.active = 0;
    },
  },
  components: { MagnificPopUpVue, ModalBox },
};
</script>


<!-- <li class="arvr grid-item">
  <div class="inner">
    <div
      class="entry dizme_tm_portfolio_animation_wrap"
      data-title="ExploAR"
      data-category="AR/VR"
    >
      <a
        class="popup-youtube"
        href="#"
        @click.prevent="() => onClick('youtube', '7e90gBu4pas')"
      >
        <img src="/img/thumbs/42-56.jpg" alt="" />
        <div class="main" data-img-url="/img/portfolio/1.jpg"></div>
      </a>
    </div>
    <div class="mobile_title">
      <h3>ExploAR</h3>
      <span>AR/VR</span>
    </div>
  </div>
</li>
<li class="gamedev grid-item">
  <div class="inner">
    <div
      class="entry dizme_tm_portfolio_animation_wrap"
      data-title="HMan Adventures"
      data-category="Game Development"
    >
      <a
        class="popup-vimeo"
        href="#"
        @click.prevent="() => onClick('vimeo', '337293658')"
      >
        <img src="/img/thumbs/42-34.jpg" alt="" />
        <div class="main" data-img-url="/img/portfolio/2.jpg"></div>
      </a>
    </div>
    <div class="mobile_title">
      <h3>HMan Adventures</h3>
      <span>Game Development</span>
    </div>
  </div>
</li>
<li class="iot grid-item">
  <div class="inner">
    <div
      class="entry dizme_tm_portfolio_animation_wrap"
      data-title="Autotoller"
      data-category="IoT"
    >
      <a
        class="soundcloude_link mfp-iframe audio"
        href="#"
        @click.prevent="() => onClick('soundcloud', '471954807')"
      >
        <img src="/img/thumbs/42-56.jpg" alt="" />
        <div class="main" data-img-url="/img/portfolio/3.jpg"></div>
      </a>
    </div>
    <div class="mobile_title">
      <h3>Autotoller</h3>
      <span>IoT</span>
    </div>
  </div>
</li>
<li class="webmobile grid-item">
  <div class="inner">
    <div
      class="entry dizme_tm_portfolio_animation_wrap"
      data-title="Scott Felix"
      data-category="Web and Mobile Applications"
    >
      <a
        class="zoom"
        href="#"
        @click.prevent="() => onClick('img', 'img/portfolio/5.jpg')"
      >
        <img src="/img/thumbs/42-56.jpg" alt="" />
        <div class="main" data-img-url="/img/portfolio/5.jpg"></div>
      </a>
    </div>
    <div class="mobile_title">
      <h3>Blue Lemon</h3>
      <span>Web and Mobile Applications</span>
    </div>
  </div>
</li>
<li class="threed grid-item">
  <div class="inner">
    <div
      class="entry dizme_tm_portfolio_animation_wrap"
      data-title="Donut Scene"
      data-category="3D Design"
    >
      <a
        class="zoom"
        href="#"
        @click.prevent="() => onClick('img', 'img/portfolio/4.jpg')"
      >
        <img src="/img/thumbs/42-34.jpg" alt="" />
        <div class="main" data-img-url="/img/portfolio/4.jpg"></div>
      </a>
    </div>
    <div class="mobile_title">
      <h3>Donut Scene</h3>
      <span>3D Design</span>
    </div>
  </div>
</li>
<li class="webmobile grid-item">
  <div class="inner">
    <div
      class="entry dizme_tm_portfolio_animation_wrap"
      data-title="Farmer Buddy"
      data-category="Web and Mobile Applications"
    >
      <a
        class="portfolio_popup"
        href="#"
        @click.prevent="active = 1"
      >
        <img src="/img/thumbs/42-34.jpg" alt="" />
        <div class="main" data-img-url="/img/portfolio/6.jpg"></div>
      </a>
    </div>
    <div class="mobile_title">
      <h3>Farmer Buddy</h3>
      <span>Web and Mobile Applications</span>
    </div>
  </div>
</li> -->
