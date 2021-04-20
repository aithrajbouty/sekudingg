<template>
    <div class="containerc">
        <h2 style="text-align:center"><strong>Contact Us</strong></h2>
        <p>For submissions of cooperation or questions about our application or program, please contact :</p>
            <div id="about" class="p-3 p-md-5">
            <div class="row">
                <div class="col-lg">
                <!-- Icon made by Freepik perfect from www.flaticon.com -->
                <img src="../assets/images/lokasi.png" height="120" class="m-4">
                <h5 class="ml-md-4 mr-md-4"><strong>Alamat</strong></h5>
                <p>Jalan Raya Jatinangor Km. 21, Universitas Padjadjaran</p>
                </div>
                <div class="col-lg">
                <!-- Icon made by Freepik perfect from www.flaticon.com -->
                <img src="../assets/images/nohp.png" height="120" class="m-4">
                <h5 class="ml-md-4 mr-md-4"><strong>No. Telepon</strong></h5>
                <p>0812-2222-3333</p>
                </div>
                <div class="col-lg">
                <!-- Icon made by Freepik perfect from www.flaticon.com -->
                <img src="../assets/images/email.png" height="120" class="m-4">
                <h5 class="ml-md-4 mr-md-4"><strong>Email</strong></h5>
                <p>sekuuuding.info@gmail.com</p>
                </div>
            </div>
            </div>

            <h4 style="text-align:center;"><strong>Please fill the form below to contact us.</strong></h4>
            <br>
        <div class="row">
            <div class="column">

            </div>
            <div class="column" style="text-align:Left">
            <form action="/action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">
                <label for="country">Country</label>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="indonesia">Indonesia</option>
                <option value="usa">USA</option>
                </select>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
                <input type="submit" value="Submit">
            </form>
            </div>
        </div>
        
        </div>
</template>

<style>
/* Style inputs */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit] {
  background-color: #FFE072;
  color: black;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #FFE072;
}
/* Create two columns that float next to eachother */
.column {
  float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>