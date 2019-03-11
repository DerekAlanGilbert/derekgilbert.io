<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true"  :show-links="true"/>
    <!-- Return to Home -->
      <div class="content-box text-center">
        <h1> Thanks for contacting me, we'll be in touch </h1>
        <g-link to="/">Return Home</g-link>
      </div>
  </Layout> 
</template>


<script>
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
  },

}
</script>
 <style lang="scss" scoped>
h1 {
  color: var(--body-color);
}
</style>



