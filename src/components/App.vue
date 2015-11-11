<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
        <h1>MachineLearning toto予想</h1>
        <p>ビッグデータとテクノロジーでtotoを当てる！</p>
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
