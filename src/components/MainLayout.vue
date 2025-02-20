<template>
  <div>
    <nav class="navbar navbar-dark bg-dark px-3">
      <router-link to="/" class="navbar-brand">Tender System</router-link>
      <router-link to="/login" class="btn btn-outline-light">Login</router-link>
    </nav>
    <div class="container mt-4">
      <router-view></router-view> <!-- loads the current page -->
    </div>
  </div>
</template>
