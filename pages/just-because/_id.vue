/* Page for the individual EVENT */
<template>
    <!-- class container in order to center the contend -->
    <!-- class mt-5 in order to heva a margin top of 5 units -->
    <div class="container mt-5">
        <!-- this component will include the breadcrumps in the page -->
        <BreadCrump :items="breadcrumps" />
        <!-- this component creates the entire "first row" of the page 
    composed of Title, Description and Image related to the selected event -->
        <TopWorkDescription :image="work.image" :name="work.name" :description="work.description" />
        <hr />
        <div class="row">
            <div class="col center">
                <p class="subtitle">Used technologies</p>
                <div class="row justify-content-center">
                    <TechnologyComponent class="col m-2" v-for="technology in work.technologies"
                        :key="technology.id" :image="technology.image" :name="technology.name" />
                </div>
            </div>
            <div class="col center">
                <p class="subtitle">Reach the project</p>

                <div v-if="work.finished == 1" class="center">
                    <a :href="work.url">
                        <div class="button btn mt-3 typing" id="demo"></div>
                    </a>
                </div>

                <div v-if="work.finished == 0" class="center">
                    <div class="button-deactivated btn mt-3">Still working on it ...</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import BreadCrump from '~/components/BreadCrump.vue'
import TechnologyComponent from '~/components/TechnologyComponent.vue'
export default {
    name: 'SingleGeospatialWork',
    components: {
        BreadCrump,
        TechnologyComponent
    },

    async asyncData({ route, $axios }) {
        // Get the id of the event to show from route
        const { id } = route.params
        // Make api call for data
        const { data } = await $axios.get('/api/justBecause-work/' + id)

        const icons = []
        for (let i = 0; i < data.technologies.length; i++) {
            const code = data.technologies[i].codeTech
            const nome = data.technologies[i].name
            const element = data.technologies[i].image;
            icons.push({ id: code, name: nome, image: element })
        }

        return {
            // parse received data (event data and season name for readable bredcrumbs)
            work: {
                id: data.codeWork,
                name: data.name,
                image: data.image,
                description: data.description,
                technologies: icons,
                url: data.url,
                finished: data.finished,
                short: data.shortName
            },
        }
    },
    data() {
        return {
            // its used to reroute when a card is pressed
            path: 'all-places',
        }
    },
    head() {
        return {
            title: ` ${this.work.short} | Just Because`,
            meta: [
                {
                    hid: 'descriptionSingleJB',
                    name: 'description',
                    content: 'specific Just Because work and its related info: Name, description, image, technologies and related link',
                },
                {
                    hid: 'keywordsSingleJB',
                    name: 'keywords',
                    content: ["Just Because", "Data analysis", "Mapflap", this.work.short, this.work.technologies],
                },
            ],
        }
    },
    computed: {
        // define breadcrumbs routes
        breadcrumps() {
            return [
                {
                    label: 'Just Because',
                    url: '/just-because',
                },
            ]
        },
    },
    mounted() {
    const text = "Have a look!";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        document.getElementById("demo").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        setTimeout(() => {
          document.querySelector('.typing::after').style.display = 'none';
        }, 1000);
      }
    }

    typeWriter();
  }
}
</script>

<style scoped>
.sub-sub-title {
    font-weight: 600;
}

.button {
    padding: 1rem 4rem;
    border-radius: 100rem;
    background-color: rgb(166, 90, 58);
    color: white;
    width: 22rem;
    font-weight: 600;
    transition: 0.5s;
}

.button-deactivated {
    padding: 1rem 4rem;
    border-radius: 100rem;
    background-color: rgb(184, 172, 190);
    color: rgb(0, 0, 0);
    width: 24rem;
    font-weight: 600;
}

.button:hover {
    width: 25.5rem;
}

.center {
    text-align: center;
}
</style>