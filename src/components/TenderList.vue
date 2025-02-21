<template>
  <div>
    <h2 class="mb-3">Available Tenders</h2>

    <!-- Search Input -->
    <input
      type="text"
      v-model="searchQuery"
      @input="updateSearch"
      placeholder="Search tenders..."
      class="form-control mb-3"
    />

    <div v-if="tenders.length">
      <div v-for="tender in tenders" :key="tender.id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ tender.title }}</h5>
          <p class="card-text">{{ tender.description }}</p>
          <p class="card-text"><strong>Deadline:</strong> {{ tender.deadline }}</p>
          <a :href="tender.document" class="btn btn-primary" download>
            Download Tender
          </a>
        </div>
      </div>
    </div>

    <p v-else class="text-muted">No tenders found.</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useTenderStore } from "@/store/tenderStore";

const store = useTenderStore();
const tenders = computed(() => store.filteredTenders);
const searchQuery = computed(() => store.searchQuery);

const updateSearch = (event) => {
  store.setSearchQuery(event.target.value);
};

onMounted(() => {
  store.fetchTenders();
});
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 15px;
}
</style>
