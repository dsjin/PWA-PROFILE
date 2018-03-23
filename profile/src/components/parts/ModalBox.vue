<template>
    <div class="modal" >
        <div class="modal-content">
            <p>test</p>
        </div>
    </div>
</template>
<script>
export default {
  name:"ModalBox",
  computed:{
  }
}
</script>
<style>
    .modal {
        position: fixed; 
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
    }
</style>

