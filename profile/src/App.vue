<template>
  <div id="app">
    <transition name="fadeOut">
      <Loader v-show="isLoading"></Loader>
    </transition>
    <transition name="fadeIn">
      <div v-show="!isLoading">
        <Header></Header>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Works></Works>
        <ContactMe></ContactMe>
      </div>
    </transition>
  </div>
</template>

<script>
import vuex from '@/vuex'
const Header = resolve => {
 require.ensure(['./components/Header'], () => {
 resolve(require('./components/Header.vue'))
 })
}
const AboutMe = resolve => {
 require.ensure(['./components/AboutMe'], () => {
 resolve(require('./components/AboutMe.vue'))
 })
}
const Skills = resolve => {
 require.ensure(['./components/Skills'], () => {
 resolve(require('./components/Skills.vue'))
 })
}
const Works = resolve => {
 require.ensure(['./components/Works'], () => {
 resolve(require('./components/Works.vue'))
 })
}
const Loader = resolve => {
 require.ensure(['./components/parts/Loading'], () => {
 resolve(require('./components/parts/Loading.vue'))
 })
}
const ContactMe = resolve => {
 require.ensure(['./components/ContactMe'], () => {
 resolve(require('./components/ContactMe.vue'))
 })
}
export default {
  name: 'app',
  data(){
    return {
      isLoading:false
    }
  },
  mounted(){
    this.isLoading = true
  },
  computed:{
    fetch(){
      return vuex.getters.getLoading
    }
  },
  components: {
    "Header":Header,
    "AboutMe":AboutMe,
    "Skills":Skills,
    "Works":Works,
    "Loader":Loader,
    "ContactMe":ContactMe
  },  
  watch:{
    isLoading: function(value){      
      document.querySelector('body').style.overflow = value? 'hidden' : null 
    },
    fetch: function(value){
      if (!value) {
        setTimeout(()=>{
            this.isLoading = false
        },2000)
      }
    }
  }
}
</script>

<style>
  @import url("https://use.fontawesome.com/releases/v5.0.7/css/all.css");

  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  @media (min-width: 1160px){
    .container {
        width: 1130px;
    }
  }
  .container {
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
  }
  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
    .fadeOut-leave-active {
        transition: opacity 0.15s;
    }
    .fadeOut-leave-to {
        opacity: 0;
    }
    .fadeIn-enter-active{
        transition: opacity 1s;
    }
    .fadeIn-enter, .fadeIn-leave-to {
        opacity: 0;
    }
</style>
