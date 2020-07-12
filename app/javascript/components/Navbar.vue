<template>

  <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
    <md-list>
      <md-list-item>
        <md-icon>move_to_inbox</md-icon>
        <span class='md-list-item-text'><router-link to='/'>Home</router-link></span>
      </md-list-item>

      <md-list-item>
        <md-icon>send</md-icon>
        <span class="md-list-item-text">Sent Mail</span>
      </md-list-item>

      <md-list-item>
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">Trash</span>
      </md-list-item>

      <md-list-item>
        <md-icon>error</md-icon>
        <span class="md-list-item-text">Spam</span>
      </md-list-item>
    </md-list>
  </md-app-drawer>
</template>

<script>
  export default {
    name: 'Navbar'

  }
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>