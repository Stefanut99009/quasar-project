<template>
  <div v-if="!isMainPage">
    <q-layout view="lHh Lpr lFf">
      <!-- Header with toolbar -->
      <!-- Uncomment the block below if needed -->
      <!--
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title>
            Quasar App
          </q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>
      -->

      <!-- Left drawer -->
      <!--
      <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
        <q-list>
          <q-item-label header>Essential Links</q-item-label>
          <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>
      -->

      <!-- Page container -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMainPage = ref(false) // Set to `true` or `false` based on your logic

</script>
