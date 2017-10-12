<template lang="html">
  <div class="container posisilogin">
    <div class="row">
        <div class='col-md-3'></div>
        <div class="col-md-6">
            <div class="login-box well">
                    <form @submit.prevent="daftarsubmit()">
                        <legend>Sign Up</legend>
                        <div class="form-group">
                            <label for="username-email">Username</label>
                            <input id="username-email" placeholder="Username" type="text" class="form-control" v-model="daftar.username" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input id="password" placeholder="Password" type="password" class="form-control" v-model="daftar.password" />
                        </div>
                        <div class="input-group">
                          <div class="checkbox">
                            <label>
                              <input id="login-remember" type="checkbox" name="remember" value="1"> Remember me
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-default btn-login-submit btn-block m-t-md">Sign Up</button>
                        </div>
                        <span class='text-center'><a href="/resetting/request" class="text-sm">Forgot Password?</a></span>
                        <div class="form-group">
                            <p class="text-center m-t-xs text-sm">Already have an account?</p>
                            <router-link :to="{ name: 'Login' }">
                              <a class="btn btn-default btn-block m-t-md">Login</a>
                            </router-link>
                        </div>
                    </form>

            </div>
        </div>
        <div class='col-md-3'></div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      daftar: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'createAccount'
    ]),
    daftarsubmit () {
      this.createAccount(this.daftar)
    }
  }
}
</script>

<style lang="css">
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700);
body {
    background-color: #f9f9f9 !important;
    font-family: 'Open Sans', sans-serif!important;
    font-size:11px;
}
.well{
    background-color:#fff!important;
    border-radius:0!important;
    border:black solid 1px;
}

.well.login-box {
    /*width:400px; */
    border:#d1d1d1 solid 1px;
    margin:0 auto;
    margin-top:30px;
}
.well.login-box legend {
  font-size:26px;
  text-align:center;
  font-weight:300;
}
.well.login-box label {
  font-weight:300;
  font-size:13px;

}
.well.login-box input[type="text"] {
  box-shadow:none;
  border-color:#ddd;
  border-radius:0;
}

.well.welcome-text{
    font-size:21px;
}

/* Notifications */

.notification{
    position:fixed;
    top: 20px;
    right:0;
    background-color:#FF4136;
    padding: 20px;
    color: #fff;
    font-size:21px;
    display:none;
}
.notification-success{
  background-color:#3D9970;
}

.notification-show{
    display:block!important;
}

/*Loged in*/
.btn-default {
    color: #333;
    background-color: #f9f9f9;
    border-color: #ccc;
    border: 1px solid;
    text-align: center;
    cursor: pointer;
    color: #5e5e5e;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #fefefe), color-stop(100%, #f9f9f9)), #f9f9f9;
    background: -moz-linear-gradient(#fefefe, #f9f9f9), #f9f9f9;
    background: -webkit-linear-gradient(#fefefe, #f9f9f9), #f9f9f9;
    background: linear-gradient(#fefefe, #f9f9f9), #f9f9f9;
    border-color: #c3c3c3 #c3c3c3 #bebebe;
    -moz-box-shadow: rgba(0, 0, 0, 0.06) 0 1px 0, rgba(255, 255, 255, 0.1) 0 1px 0 0 inset;
    -webkit-box-shadow: rgba(0, 0, 0, 0.06) 0 1px 0, rgba(255, 255, 255, 0.1) 0 1px 0 0 inset;
    box-shadow: rgba(0, 0, 0, 0.06) 0 1px 0, rgba(255, 255, 255, 0.1) 0 1px 0 0 inset;
}

.posisilogin {
  margin-top: 67px;
  margin-bottom: 40px;
}
</style>
