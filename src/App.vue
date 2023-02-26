<script setup>
// import Main from './components/Main.vue'
import PublicHeader from '../src/public_components/PublicHeader.vue'
import PublicAside from '../src/public_components/PublicAside.vue'
// import Home from './Home.vue'

</script>

<template>
  <div class="common-layout">
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
  </div>
</template>


<style scoped>
.common-layout{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.main {
  width: 100%;
  height: 100%;
}

.child {
  display: flex;
  flex-wrap: wrap;
}

</style>
