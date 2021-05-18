<template>
    <div class="adminc">
<div class="sidebar">
<h3 class="baritem text-center">sekuuu.ding</h3>
  <a class="active" href="#dashboard">Dashboard</a>
    <a class="w3-button">Course
      <b-icon icon="caret-down-fill"></b-icon>
      <div class="w3-dropdown-content w3-bar-block">
      <a href="#" class="w3-bar-item w3-button">Web Development</a>
      <a href="#" class="w3-bar-item w3-button">Data Science</a>
      <a href="#" class="w3-bar-item w3-button">Computer Science</a>
      <a href="#" class="w3-bar-item w3-button">Web Design</a>
      <a href="#" class="w3-bar-item w3-button">Mobile Development</a>
    </div>
    </a>
  <a href="#userdata">User Data</a>
</div>
<div class="navv" style="float: right;">
  <b-nav tabs>
    <b-nav-item active>Dashboard</b-nav-item>
    <b-nav-item>Profile</b-nav-item>
    <b-nav-item>Signed Out</b-nav-item>
  </b-nav>
</div>
<!-- Page content -->
    <div class="content">
        <div class="containerad">
          <h6>Dashboard</h6>
          <div class="row">
          <div id="about" class="p-3 p-md-5" >
            <div class="row">
              <div class="col-lg">
                <div class="card text-black" style="background: #9FEDD7;    
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 1.5;">
                    <div class="card-body card-body pb-0 pr-0 pl-0 d-flex justify-content-between align-items-start">
                    <div>
                    <div class="text-value-lg">9.823</div>
                    <div>Members online</div>
                        <img src="../assets/images/gunung.png" width="100%">
                    </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg">
                    <div class="card text-black" style="background: #9FEDD7;
                    font-weight: bold;
                    line-height: 1.5;">
                    <div class="card-body card-body pb-0 pr-0 pl-0 pt-1 justify-content-between align-items-start">
                    <div>
                    <div class="module-bar">
                      <div class="container">
                        <p style="color: #000000; text-align:left; margin-bottom:2px; font-size: 12px;">Web Development</p>
                          <b-progress height="4px" :value="value" class="mb-2"></b-progress>
                          <p style="color: #000000; text-align:left; margin-bottom:2px; font-size: 12px;">Web Design</p>
                          <b-progress height="4px" :value="value" class="mb-2"></b-progress>
                          <p style="color: #000000; text-align:left; margin-bottom:2px; font-size: 12px;">Computer Science</p>
                          <b-progress height="4px" :value="value" class="mb-2"></b-progress>
                          <p style="color: #000000; text-align:left; margin-bottom:2px; font-size: 12px;">Mobile Development</p>
                          <b-progress height="4px" :value="value" class="mb-2"></b-progress>
                          <p style="color: #000000; text-align:left; margin-bottom:2px; font-size: 12px;">Data Science</p>
                          <b-progress height="4px" :value="value" class="mb-2"></b-progress>
                      </div>
                        </div>
                    </div>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
</div>
                  
        <table class="table table-responsive-sm table-hover table-outline mb-0">
          <thead class="thead-light">
          <tr>
          <th class="text-center" width="21%">
              <b-icon icon="people-fill"></b-icon>
          </th>
          <th class="text-center">User</th>
          <th class="text-center">Email</th>
          <th class="text-center">Usage</th>
          <th class="text-center">Course</th>
          <th class="text-center">Activity</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td class="text-center">
            <img class="c-avatar-img" src="../assets/images/aithrapic.jpg" width="25%" style="border-radius: 50%;">
          </td>
          <td>
          <div>Aithra Junia</div>
          <div class="small text-muted"><span>New</span> | Registered: Jan 1, 2015</div>
          </td>
          <td class="text-center">aithrajbouty@gmail.com
          </td>
          <td>
          <div class="clearfix">
          <div class="float-left"><strong>50%</strong></div>
          <div class="float-right"><small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small></div>
          </div>
          <div class="progress progress-xs">
          <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </td>
          <td class="text-center">Web Development
          </td>
          <td>
          <div class="small text-muted">Last login</div><strong>10 sec ago</strong>
          </td>
          </tr>
          <tr>
          <td class="text-center">
            <img class="c-avatar-img" src="../assets/images/hanapic.jpg"  width="25%" style="border-radius: 50%;">
          </td>
          <td>
          <div>Avram Tarasios</div>
          <div class="small text-muted"><span>Recurring</span> | Registered: Jan 1, 2015</div>
          </td>
          <td class="text-center">aithrajbouty@gmail.com
          </td>
          <td>
          <div class="clearfix">
          <div class="float-left"><strong>10%</strong></div>
          <div class="float-right"><small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small></div>
          </div>
          <div class="progress progress-xs">
          <div class="progress-bar bg-info" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </td>
          <td class="text-center">Data Science
          </td>
          <td>
          <div class="small text-muted">Last login</div><strong>5 minutes ago</strong>
          </td>
          </tr>
          <tr>
          <td class="text-center">
            <img class="c-avatar-img" src="../assets/images/kefilpic.jpg"  width="25%" style="border-radius: 50%;">
          </td>
          <td>
          <div>Quintin Ed</div>
          <div class="small text-muted"><span>New</span> | Registered: Jan 1, 2015</div>
          </td>
          <td class="text-center">aithrajbouty@gmail.com
          </td>
          <td>
          <div class="clearfix">
          <div class="float-left"><strong>74%</strong></div>
          <div class="float-right"><small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small></div>
          </div>
          <div class="progress progress-xs">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 74%" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </td>
          <td class="text-center">Web Design
          </td>
          <td>
          <div class="small text-muted">Last login</div><strong>1 hour ago</strong>
          </td>
          </tr>
          <tr>
          <td class="text-center">
            <img class="c-avatar-img" src="../assets/images/aithrapic.jpg"  width="25%" style="border-radius: 50%;">
          </td>
          <td>
          <div>Enéas Kwadwo</div>
          <div class="small text-muted"><span>New</span> | Registered: Jan 1, 2015</div>
          </td>
          <td class="text-center">aithrajbouty@gmail.com
          </td>
          <td>
          <div class="clearfix">
          <div class="float-left"><strong>98%</strong></div>
          <div class="float-right"><small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small></div>
          </div>
          <div class="progress progress-xs">
          <div class="progress-bar bg-danger" role="progressbar" style="width: 98%" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </td>
          <td class="text-center">Computer Science
          </td>
          <td>
          <div class="small text-muted">Last login</div><strong>Last month</strong>
          </td>
          </tr>
          <tr>
          <td class="text-center">
            <img class="c-avatar-img" src="../assets/images/aithrapic.jpg"  width="25%" style="border-radius: 50%;">
          </td>
          <td>
          <div>Agapetus Tadeáš</div>
          <div class="small text-muted"><span>New</span> | Registered: Jan 1, 2015</div>
          </td>
          <td class="text-center">aithrajbouty@gmail.com
          </td>
          <td>
          <div class="clearfix">
          <div class="float-left"><strong>22%</strong></div>
          <div class="float-right"><small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small></div>
          </div>
          <div class="progress progress-xs">
          <div class="progress-bar bg-info" role="progressbar" style="width: 22%" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </td>
          <td class="text-center">Mobile Development
          </td>
          <td>
          <div class="small text-muted">Last login</div><strong>Last week</strong>
          </td>
          </tr>
          <tr>
          <td class="text-center">
            <img class="c-avatar-img" src="../assets/images/aithrapic.jpg"  width="25%" style="border-radius: 50%;">
            </td>
          <td>
          <div>Friderik Dávid</div>
          <div class="small text-muted"><span>New</span> | Registered: Jan 1, 2015</div>
          </td>
          <td class="text-center">aithrajbouty@gmail.com
          </td>
          <td>
          <div class="clearfix">
          <div class="float-left"><strong>43%</strong></div>
          <div class="float-right"><small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small></div>
          </div>
          <div class="progress progress-xs">
          <div class="progress-bar bg-success" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </td>
          <td class="text-center">Web Development
          </td>
          <td>
          <div class="small text-muted">Last login</div><strong>Yesterday</strong>
          </td>
          </tr>
          </tbody>
          </table> 
        </div>

    </div>
</div>

</template>
<script>
export default {
    name : 'AdminContent',
    data() {
      return {
        value: 75
      }
    }
}

</script>

<style>
/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 250px;
  position: fixed;
  height: 100%;
  overflow: auto;
  background: #FEF9C7;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  font-size: 15px;
  line-height: 28px;
  padding: 18px;
  text-decoration: none;
  font-family: Montserrat;
  text-decoration: none;
}
.sidebar h3{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 43px;
    /* identical to box height */
    color: #608EB8;  
    margin-top: 20px;
    margin-bottom: 20px;
}
/* Active/current link */
.sidebar a.active {
    background: #9FEDD7;
    box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 15px;
    line-height: 28px;
    font-weight: bold;
    font-family: Montserrat;
    /* identical to box height */
    color: white;
    text-decoration: none;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #9FEDD7;;
  color: white;
  font-weight: bold;
  text-decoration: none;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 250px;
  padding: 1px 16px;
  height: 1000px;
}
.containerad{
    margin-top: 100px;
}
.table{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    --primary: #321fdb;
    --secondary: #ced2d8;
    --success: #2eb85c;
    --info: #39f;
    --warning: #f9b115;
    --danger: #e55353;
    --light: #ebedef;
    --dark: #636f83;
    --color: #3c4b64;
    word-wrap: break-word;
    box-sizing: border-box;
    border-collapse: collapse;
    width: 100%;
    color: #3c4b64;
    border: 1px solid;
    border-color: #d8dbe0;
    margin-bottom: 0!important;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
