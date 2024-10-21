<template>
    <div class="feature-item">
        <v-card
          class="mx-auto border border-teal-accent-4 rounded-lg px-4 pb-3"
          max-width="500"
          elevation="0"
        >
          <v-card-text>
            <p class="text-h5 font-weight-black">{{ feature.title }}</p>
            <br>
            <div class="text-medium-emphasis">
              {{ feature.description }}
            </div>
          </v-card-text>
  
          <v-card-actions>
            <v-btn
              color="teal-accent-4"
              text="Learn More"
              variant="outlined"
              @click="reveal = true"
            ></v-btn>
          </v-card-actions>
  
          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="position-absolute w-100 border border-teal-accent-4 rounded-lg px-4"  <!-- 增加左右 padding -->
              height="100%"
              style="bottom: 0;"
              elevation="0"
            >
              <v-card-text class="pb-0">
                <p class="text-h4">Origin</p>
  
                <p class="text-medium-emphasis">
                  {{ feature.description }}
                </p>
              </v-card-text>
  
              <v-card-actions class="pt-0">
                <v-btn
                  color="teal-accent-4"
                  text="Close"
                  variant="outlined"
                  @click="reveal = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
    </div>
</template>


<script>
export default {
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style scoped>
.feature-item {
    display: flex; /*新增這一行以使用 flexbox */
    flex-direction: column; /* 如果需要垂直排列內容 */
    justify-content: center; /* 垂直置中 */
    align-items: center; /* 水平置中 */
    /* 其他樣式 */
}
</style>
