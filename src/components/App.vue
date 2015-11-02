<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
        <h1>機械学習でtoto予想</h1>
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>
