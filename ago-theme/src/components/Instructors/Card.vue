<template>
  <v-card
    class="mx-auto trainer_card"
    :height="person.visible ? 'auto' : '448'"
  >
    <v-img
      :src="person.image"
      :lazy-src="person.image"
      height="280px"
      alt="トレーナー画像"
      :position="person.position || 'center'"
    ></v-img>

    <v-card-title>
      {{ person.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ person.belonging }} | {{ person.part }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        icon
        class="align-end"
        @click.native="person.visible = !person.visible"
      >
        <v-icon>{{
          person.visible ? 'mdi-chevron-up' : 'mdi-chevron-down'
        }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="person.visible">
        <v-divider></v-divider>

        <v-card-text>
          {{ person.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ['person']
};
</script>

<style lang="scss" scoped>
.trainer_card {
  @include pc-screen() {
    width: 300px;
  }
}
</style>
