<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
  
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">  {{isA ? 'Sign in'  :  ' Sign up'}}  </h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="isA" to="/register"> Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
            
          </p>
  
          <ul class="error-messages">
            <template v-for="(messages,field) in errors">
              <li v-for="(msg,index) in messages">{{field}}  {{msg}}</li>
            </template>
          </ul>
  
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isA">
              <input class="form-control form-control-lg" type="text"  v-model="user.username" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="email" v-model="user.email" placeholder="Email"  required>
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" v-model="user.password"  minlength="8" placeholder="Password"  required>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
            {{isA ? 'Sign in'  :  ' Sign up'}}  
            </button>
          </form>
        </div>
  
      </div>
    </div>
  </div>
</template>
<script>
  const Cookie =  process.client ? require('js-cookie')  : undefined
  import {login , register} from '@/api/user.js'
  export default{
    name : 'login',
    middleware: 'margin',
    computed : {
      isA () {
        return  this.$route.name == 'login'
      }
    },
    data () {
      return {
        user :{
          email: '',
          password: '',
          username: ''
        },
        errors:{}
      }
    },
    methods: {
      async onSubmit () {
        try {
          const {data} = this.isA ? await login({
          user: this.user
        })
        :
        await register({
          user: this.user
        })
        // console.log(data)
        this.$store.commit('SetUser', data.user)
        Cookie.set('user',data.user)
        this.$router.push('/')
        }catch(e) {
          console.dir(e)
          this.errors = e.response.data.errors
        }
      }
    },
  }
</script>