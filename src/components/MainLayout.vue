<template>
  <div>
    <nav class="navbar navbar-dark bg-dark px-3">
      <router-link to="/" class="navbar-brand">Tender System</router-link>
      <div>
        <button v-if="!isLoggedIn" @click="goToLogin" class="btn btn-outline-light">Login</button>
        <button v-if="isLoggedIn" @click="logout" class="btn btn-danger">Logout</button>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);

onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem('user');
});

const goToLogin = () => {
  router.push('/login');
};

const logout = () => {
  localStorage.removeItem('user');
  isLoggedIn.value = false;
  router.push('/login');
};
</script>
