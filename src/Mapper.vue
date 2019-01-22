<template>
  <div id="mapper">
    <navbar></navbar>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'mapper',
  components: {
    Navbar
  }
}
</script>
