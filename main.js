const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      return this.cart.push(id);
    },
    removeById(id) {
      // find item by id, gets index position.
      const index = this.cart.indexOf(id);
      // removes 1 item at spec. index.
      if (index > -1) {
        this.cart.splice(index, 1);
      }
      //if not splice, use filter to not mutate array. but space?
    },
  },
});
