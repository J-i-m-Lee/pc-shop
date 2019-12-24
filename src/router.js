import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Index from './views/Index.vue';
import Product from './views/Product.vue';
import Detail from './views/Detail.vue';
import Cart from './views/Cart.vue';
import Order from './views/Order.vue';
import OrderList from './views/OrderList.vue';
import OrderConfirm from './views/OrderConfirm.vue';
import OrderPay from './views/OrderPay.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/index',
            component: Home,
            children: [
                { path: 'index', name: 'index', component: Index },
                { path: 'product/:id', name: 'product', component: Product },
                { path: 'detail/:id', name: 'detail', component: Detail },
            ]
        },
        {
            path: '/order', name: 'order', component: Order,
            children: [
                { path: 'list', name: 'orderList', component: OrderList },
                { path: 'confirm', name: 'orderConfirm', component: OrderConfirm },
                { path: 'pay', name: 'orderPay', component: OrderPay },
            ]
        },
        { path: '/Cart', name: 'cart', component: Cart },

    ]
})