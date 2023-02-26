<script setup>
import { ref } from 'vue'
import PublicHeader from '../public_components/PublicHeader.vue'
import PublicAside from '../public_components/PublicAside.vue'
import Home from './Home.vue'


defineProps({
  // title01: String,
  // title02: String,
  // title03: String,
})
</script>

<template>
  <el-container class="main container">
    <el-aside width="200px">
      <PublicAside />
    </el-aside>
    <el-container class="child container">
      <PublicHeader />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.child {
  display: flex;
  flex-wrap: wrap;
}
</style>
