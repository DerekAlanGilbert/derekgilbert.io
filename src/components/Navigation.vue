<template>
  <ul class="nav-wrapper text-center">
    <li><g-link  to="/">Home</g-link></li>
    <li><g-link  to="/contact">Contact</g-link></li>
  </ul>
</template>

<script>
</script>

<style lang="scss">
.nav-wrapper {
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin: 0px;
  li {
    list-style: none;
    margin: 0px;
    a {
      color: var(--title-color);
      text-decoration: none;
    }
    &:last-child {
    margin-right: 15px;
  }
  }
  cursor: pointer;
  &:hover {
    opacity: .8
  }
  &:focus {
    outline: none;
  }

}
</style>