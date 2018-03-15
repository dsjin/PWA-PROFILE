<template>
  <div id="app">
    <Header></Header>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Works></Works>
  </div>
</template>

<script>
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
export default {
  name: 'app',
  components: {
    "Header":Header,
    "AboutMe":AboutMe,
    "Skills":Skills,
    "Works":Works
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
</style>
