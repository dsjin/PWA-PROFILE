<template>
  <div id="skills" class="container">
    <div class="content">
      <h3>Skills</h3>
      <div class="skills-wrapper">
        <SkillCircle v-for="skill in skills" :key="skill.name">
          <p>{{skill.name}}</p>
        </SkillCircle>
      </div>
    </div>
  </div>
</template>
<script>
const Circle = resolve => {
 require.ensure(['./parts/Circle'], () => {
 resolve(require('./parts/Circle.vue'))
 })
}
import JSON from '@/assets/JSON/skills.json'
import vuex from '../vuex'
export default {
  name:"skills",
  data:()=>{
    return {
      //skills:JSON
    }
  },
  created(){
    //this.$getData("https://us-central1-pwa-profile.cloudfunctions.net/skills", this.skills)
  },
  components:{
    "SkillCircle":Circle
  },
  computed:{
    skills:()=>{
      return vuex.getters.getSkills
    }
  }
}
</script>
<style>
    #skills{
      margin-top: 20px
    }
    #skills h3{
      color: #402C2C
    }
    .skills-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>

