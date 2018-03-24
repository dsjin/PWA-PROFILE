<template>
    <div id="works" class="container" ref="Works">
        <div class="content">
            <h3>Works</h3>
        </div>
        <div class="content-slide">
            <div class="has-slider">
                <v-touch class="slider" :style="slideStyle" :class="{'is-animating':!isPan}" @horizontal-pan="onPan" @tap="onTap" :pan-options="{ threshold: 0, pointers: 0 }">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </v-touch>
            </div>
        </div>
        <transition name="fade">
            <v-touch v-show="showModal" @tap="onTap" ref="modalTouch">
                <Modal ref="modal"></Modal>
            </v-touch>
        </transition>
    </div>
</template>
<script>
const Card = resolve => {
 require.ensure(['./parts/Card'], () => {
 resolve(require('./parts/Card.vue'))
 })
}
const ModalBox = resolve => {
 require.ensure(['./parts/ModalBox'], () => {
 resolve(require('./parts/ModalBox.vue'))
 })
}
export default {
  name:"works",
  data () {
    return {
      child: 3,
      percentage:0.0,
      finalPercentage:0.0,
      activeSlide:0,
      sensitivity:25,
      isPan:false,
      addEvent:false,
      showModal:false
    }
  },
  created(){
      if(!this.$isMobile()){
          window.addEventListener('scroll', this.onScroll)
      }
  },
  components:{
      "Card":Card,
      "Modal":ModalBox
  },
  methods:{
      onPan:function(event){
          this.isPan = true
          this.percentage = 100 / this.child * event.deltaX / window.innerWidth;
          this.finalPercentage = this.percentage - 100 / this.child * this.activeSlide;
          if(event.isFinal){
              this.isPan = false
                if (event.velocityX > 1) {
                    this.goToSlide(this.activeSlide-1)
                } else if (event.velocityX < -1) {
                    this.goToSlide(this.activeSlide+1)
                } else{
                    if(this.percentage <= -(this.sensitivity / this.child)){
                        this.goToSlide(this.activeSlide+1)
                    }else if(this.percentage >= (this.sensitivity / this.child)){
                        this.goToSlide(this.activeSlide-1)
                    }else{
                        this.goToSlide(this.activeSlide)
                    }
                }
          }
      },
      onTap:function(event){
          if(event.target == this.$refs.modal.$el && this.$isMobile()){
              this.showModal = false
          }else{
              this.showModal = true
          }
      },
      onScroll:function(event){
          if(window.pageYOffset >= this.$refs.Works.getBoundingClientRect().top && this.$refs.Works.getBoundingClientRect().bottom >= 0){
              if(!this.addEvent){
                  window.addEventListener('keyup', this.onPress)
                  this.addEvent = !this.addEvent;
              }
          }else{
              if(this.addEvent){
                  window.removeEventListener('keyup', this.onPress)
                  this.addEvent = !this.addEvent;
              }
          }
      },
      onPress:function(event){
          if(event.key === "ArrowLeft" && !this.showModal){
              this.goToSlide(this.activeSlide-1)
          }else if (event.key === "ArrowRight" && !this.showModal){
              this.goToSlide(this.activeSlide+1)
          }else if (event.key === "Enter" && !this.showModal){
              this.showModal = true
          }else if (event.key.includes("Esc") && this.showModal){
              this.showModal = false
          }
      },
      goToSlide:function(number){
            if(number < 0){
                this.activeSlide = 0
            }
            else if(number > this.child - 1){
                this.activeSlide = this.child - 1
            }
            else{
                this.activeSlide = number
            }
            this.finalPercentage = -(100 / this.child) * this.activeSlide;
      }
  },
  computed: {
      slideStyle: function(){
          return {
              transform : 'translateX(' + this.finalPercentage + '%)'
          }
      },
      modalStyle: function(){
          var display = "none"
          if (this.showModal) {
              display = "block"
          }
          return {
              display : display
          }
      }
  },
  updated(){
      if(this.$refs.modalTouch.$el.style.display === "" && this.showModal){
          this.$refs.modal.$el.scrollTop = 0
      }
  },
  watch:{
      showModal: function(value){
          document.querySelector('body').style.overflow = this.showModal? 'hidden' : null
      }
  }
}
</script>
<style>
    #works{
        margin-top:20px
    }
    #works .content{
        padding-top: 2%;
        padding-left: 2%;
        padding-right: 2%;
        padding-bottom: 5px
    }
    .content-slide{
        padding: 0%
    }
    .has-slider{
        overflow: hidden;
    }
    .mama{
        width: 100%
    }
    .slider{
        display: flex;
        width: 300%;
    }
    .is-animating{
        transition: transform 400ms cubic-bezier( 0.5, 0, 0.5, 1 )
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.15s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

