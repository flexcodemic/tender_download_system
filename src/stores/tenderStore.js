import { defineStore } from "pinia";
import { tenders } from "./data/tenders.js";

export const useTenderStore = defineStore("tenderStore", {
  state: () => ({
    tenders: [],
    searchQuery: "",
  }),
  actions: {
    fetchTenders() {
      try {
        this.tenders = tenders; // Load tenders from mock data
      } catch (error) {
        console.error("Error fetching tenders:", error);
      }
    },
    setSearchQuery(query) {
      this.searchQuery = query;
    },
  },
  getters: {
    filteredTenders: (state) => {
      return state.tenders.filter((tender) =>
        tender.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
});
