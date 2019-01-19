<template>
  <div>

    <h1>Login</h1>

    <form>
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input is-primary" type="text" placeholder="username" v-model="username">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input is-primary" type="password" placeholder="********" v-model="password">
        </div>
      </div>
    </form>

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
