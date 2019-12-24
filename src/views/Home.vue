<template>
  <div id="">
    Home
    <NavHeader></NavHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader"
import NavFooter from "../components/NavFooter"
export default {
  name: "Home",
  components: {
    NavHeader,
    NavFooter
  },
  props: {},
  data() {
    return {}
  }
}
</script>
<style lang="css" scoped></style>
