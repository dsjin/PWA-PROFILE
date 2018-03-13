<template>
    <div id="nav_button-right">
        <div class="flex-container">
            <i class="fas fa-angle-left fa-5x"></i>
        </div>
    </div>
</template>
<script>
export default {
  name:"ButtonRight",
  data:()=>{
      return {

      }
  },
}
</script>
<style>
    #nav_button-right{
        width: 60px;
        background-color: aqua;
        height: 80px;
        position: absolute;
        right: 0;
    }
    #nav_button-right i{
        margin: 0 auto;
        display: block
    }
    .flex-container{
        height: 100%;
        padding: 0;
        margin: 0;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

