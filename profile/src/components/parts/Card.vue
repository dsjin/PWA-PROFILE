<template>
  <div class="card">
      <div class="backgroud">
          <div class="filter">
          </div>
      </div>
      <div class="card-description">
          <h1>Work1</h1>
      </div>
  </div>
</template>
<script>
export default {
  name:"Card"
}
</script>
<style scoped>
    @media (max-width: 576px) { 
        .card{
            height: 200px !important;
        }
    }
    .card{
        position: relative;
        height: 400px;
        width: 100%;
        cursor: pointer;
    }
    .backgroud:hover{
        transform: scale(1.1);
    }
    .backgroud{
        background: url('../../assets/images/profile.jpg') no-repeat center center;
        height: 400px;
        width: 100%;
        transition: all .5s ease-in-out;
    }
    .filter{
        background-color: #CC927A;
        opacity: 0.5;
        width: 100%;
        height: 400px;
    }
    .card-description{
        height: 100px;
        width: 100%;
        background: linear-gradient(transparent, #CC927A) ;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
    }
    .card-description h1{
        margin-left:20px;
        color: rgb(253, 234, 227)
    }
</style>