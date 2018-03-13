<template>
  <div class="circle-container">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name:"SkillsCircle",
  data:()=>{
      return{
      }
  }
}
</script>
<style>
    .circle-container{
        border-radius: 50%;
        margin-right: 5%;
        float: left;
        background-color: #7AACCC;
        width: 130px;
        height: 130px;
        text-align: center;
        border: solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-color: #749AB2;
        margin-top: 10px;
        margin-bottom: 10px
    }
    @media (max-width: 576px) { 
        .circle-container{
            border-radius: 50%;
            margin-right: 5%;
            float: left;
            background-color: #7AACCC;
            border-color: #749AB2;
            width: 100px;
            height: 100px;
            text-align: center;
            border: solid;
            display: flex;
            font-size: 0.8em;
            flex-direction: column;
            justify-content: center;
            margin-top: 10px;
            margin-bottom: 10px
        }
    }
    .circle-container p{
        color: #402C2C
    }
</style>


