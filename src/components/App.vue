<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
        <span class=title>MachineLearning toto予想</span>
        <h1>ビッグデータを分析して機械学習でtotoを予想</h1>
    </div>
    <!-- main view -->
    <router-view
      class="view"
    >
    </router-view>
  </div>
</template>

<script>
module.exports = {

}
</script>


<style>
body {
    margin: 0px;
}
.title {
    font-size: large;
}
h1 {
    font-size: small;
}
</style>
