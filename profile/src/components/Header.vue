<template>
    <div id="header">
        <div class="container center">
            <div class="_flex justify_end" style="padding:1em;">
                <a href="https://blog.dsjin.tk" target="blank" style="text-decoration:none;font-size:1.2em">
                    Blog
                </a>
            </div>
            <div class="profile-container">
                <img src="../assets/images/profile.jpg"/>
                <h1>THATCHAKON JOM-UD</h1>
                <h2>Graduated in Software Engineering @ ITKMITL</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name:"Header"
}
</script>
<style>
    @media (max-width: 576px) { 
        h1{
            font-size:1.5em
        }
        h2{
            font-size: 1em
        }
    }
    #header{
        background-image: url('../assets/images/bg.png')
    }
    .center{
        position: relative;
        height: 100%;
        text-align: center
    }
    .profile-container{
        display: inline-block;
        position: relative;
        padding: 5%
    }
    .profile-container img{
        border-radius: 50%;
        width: 100%;
        max-width: 150px;
        height: auto;
    }
</style>

