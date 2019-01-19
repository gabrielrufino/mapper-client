<template>
  <div>

    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-brand">
          <router-link :to="{ name: 'home' }" class="navbar-item">
            <span><i class="fas fa-map-signs"></i> Mapper</span>
          </router-link>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{ name: 'home' }" class="navbar-item">Home</router-link>
          <router-link :to="{ name: 'targets' }" class="navbar-item">Targets</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Foto</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Profile
              </a>
              <a class="navbar-item">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
