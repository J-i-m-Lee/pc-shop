<template>
  <div id="">
    Cart
    <OrderHeader></OrderHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader"
import NavFooter from "../components/NavFooter"
export default {
  name: "Cart",
  components: {
    OrderHeader,
    NavFooter
  },
  props: {},
  data() {
    return {}
  }
}
</script>
<style lang="css" scoped></style>
