<template>
    <div id="works" class="container">
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
    </div>
</template>
<script>
const Card = resolve => {
 require.ensure(['./parts/Card'], () => {
 resolve(require('./parts/Card.vue'))
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
      isPan:false
    }
  },
  components:{
      "Card":Card
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
          alert("Click")
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
</style>

