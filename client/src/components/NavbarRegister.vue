<template>
<div class="nav-container fixed-top">
    <div class="wrapper">
        <nav>
            <div class="logo">
                 sekuuu.ding
            </div>
            

        </nav>
    </div>
</div>
</template>

<script>
export default {
    name : 'NavbarRegister'
}
</script>

<style>
*{
    box-sizing: border-box;
    margin:0;
}
.nav-container{
    height: 60px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    background: #FFFFFA;
}
.wrapper{
    max-width: 1200px;
    margin: 0 auto;
}
nav {
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
}
nav ul{
    display: flex;
    float: right;
}
nav .logo {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    color: #608EB8;
    margin-left: -900px;
}
.nav-items li{
    list-style: none;
    margin-right: 40px;
    margin-top: -35px;
}
.nav-items li:nth-last-of-type(1) {
    margin: 0;
}
.nav-items li a{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;

    color: #000000;
}
</style>