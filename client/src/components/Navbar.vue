<template>

<div class="nav-container fixed-top">
    <div class="wrapper">
        <nav>
            <div class="logo">
                sekuuu.ding
            </div>
            
            <ul class="nav-items">
                <li>
                    <a href="/">Home</a>   
                </li>
                <li>
                    <a href="/module">Module</a>   
                </li>
                <li>
                    <a href="/contactus">Contact Us</a>   
                </li>
                <li>
                    <a href="/aboutus">About Us</a>   
                </li>
                <li>
                    <a href="/faq">FAQ</a>   
                </li>
                <li style="margin-top: -35px;">
                    <a href="/profile">Profile</a>   
                </li>
                <li style="color: #9FEDD7; margin-top: -40px;">
                    <button class="btn btn-info">
                        <a href="/login" style="font-size: 15px; color: #9FEDD7;">
                        Sign Up / Login</a></button>
                </li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    name : 'Navbar'
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