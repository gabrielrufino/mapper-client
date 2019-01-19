<template>
  <div>

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

      <button class="button is-fullwidth is-primary">Login</button>
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
