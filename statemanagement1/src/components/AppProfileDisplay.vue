<template>
  <section
    class="md:w-1/3 flex flex-col p-12"
    v-if="validateFormData()"
    id="secProfile"
  >
    <!-- Profile Card -->
    <h3 class="font-bold font-lg">{{ formData.name }}</h3>
    <p class="mt-2">{{ formData.occupation }}</p>
  </section>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    validateFormData() {
      return (
        Object.keys(this.formData).length>0 &&
        this.formData.name != "" &&        
        this.formData.occupation != ""
      );
    },
  },
};
</script>

<style scoped>
#secProfile {
  background-color: #e8f0f5;
  color: #1f8edc;
  border: 1px solid #1f8edc;
}
</style>