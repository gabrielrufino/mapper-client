<template>
  <div>


    <div class="columns is-mobile">
      <div class="column column is-half is-offset-one-quarter">
        <h1 class="title has-text-primary">Login</h1>

        <div class="box">
          <form>
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input class="input is-primary" type="text" placeholder="gabrielrufino" v-model="username">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input is-primary" type="password" placeholder="********" v-model="password">
              </div>
            </div>

            <button class="button is-fullwidth is-primary">Login</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    username: null,
    password: null
  }),
  methods: {
    auth: () => {
      this.$http.post('/auth', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
