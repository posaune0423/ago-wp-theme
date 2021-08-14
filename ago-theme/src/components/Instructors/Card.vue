<template>
  <v-card class="mx-auto" width="300">
    <v-img :src="image" height="280px" :position="position || 'center'"></v-img>

    <v-card-title>
      {{ name }}
    </v-card-title>

    <v-card-subtitle> {{ belonging }} | {{ part }} </v-card-subtitle>

    <v-card-actions>
      <v-btn icon class="align-end" @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ['name', 'image', 'description', 'part', 'belonging', 'position'],
  data: () => ({
    show: false
  })
};
</script>

<style lang="scss" scoped></style>
