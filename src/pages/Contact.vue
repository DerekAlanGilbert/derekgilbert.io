<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true"  :show-links="true"/>
    
    <!-- Contact Form -->
    <ContactForm/>

  </Layout> 
</template>


<script>
import Author from '~/components/Author.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    Author,
    ContactForm
  },

}
</script>

