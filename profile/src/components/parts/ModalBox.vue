<template>
    <div class="modal">
        <div class="_over _right_50 _top_50 close-message">
            Press 'ESC' to close
        </div>
        <div class="modal-content">
            <div class="modal-title">
                {{data.title}}
            </div>
            <div class="modal-image">
                <div class="img" :style="backgroundStyle"></div>
            </div>
            <div class="modal-description">
                <h4>Description</h4>
                <p>{{data.description}}</p>
            </div>
            <div class="model-link">
                <div class="_flex _center_vertical" v-for="item in data.links" :key="item.title">
                    <a :href="item.path" target="_blank" v-if="item.path != '#'" ><i class="fa-2x _purple-hover" :class="item.icon"></i></a>
                    <i class="fa-2x _purple-hover" :class="item.icon" v-else></i>
                    <p>{{item.msg}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name:"ModalBox",
  props:['data'],
  data(){
      return {
          mock:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare felis non nisi pretium interdum. Curabitur vel nibh ultrices, volutpat urna sit amet, hendrerit metus. Curabitur condimentum dapibus orci, quis porttitor mauris tristique ac. Nunc et eros justo. Suspendisse ut turpis sem. Nullam augue lorem, pharetra a dolor vitae, dictum sodales nulla. Proin sagittis orci a risus pellentesque consequat. Sed sed ex vulputate, imperdiet dui eu, imperdiet leo. Curabitur vehicula interdum sapien, ac placerat enim fermentum finibus. Nam sit amet faucibus dui. Cras egestas orci quis nulla fermentum ornare."
      }
  },
  computed:{
      backgroundStyle: function(){
          return {

              'background' : 'url(' + this.data.imgpath + ')',
              'background-size': 'auto 100%',
              'background-repeat': 'no-repeat',
              'background-position': 'center',
          }
      }
  }
}
</script>
<style>
    @media (max-width: 576px) { 
        .modal-content {
            width: 80% !important;
        }
        .close-message{
            display: none;
        }
        .modal-image{
            height: 200px !important
        }
    }
    .model-link a{
        color: currentColor;
    }
    ._over{
        position: fixed;
    }
    ._right_50{
        right: 50px;
    }
    ._top_50{
        top: 50px
    }
    .close-message{
        color: beige;
        font-size: 1.2em
    }
    .modal {
        position: fixed; 
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
        border-radius: 5px;
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
    }
    .modal-title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 2em;
        margin-top: 10px;
        margin-bottom: 10px 
    }
    .modal-image{
        width: 100%;
        height: 400px;
        background: #888
    }
    .modal-image img{
        display: block;
        height: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .modal-image .img{  
        width: 100%;
        height: 100%;
    }
    .model-link.button h4{
        display: inline-block;
        margin: 0
    }
    .model-link i{
        margin-right: 5px
    }
    .model-link p{
        margin-left: 5px;
        display: inline-block;
    }
    .button{
        background-color: aqua;
        margin-top:1em;
        margin-bottom:1em;
    }
    .button.link-title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .fab, .fas{
        transition: all .2s ease-in;
    }
    ._purple-hover:hover{
        color:#6e5494
    }
</style>

