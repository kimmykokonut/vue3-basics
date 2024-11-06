app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
  <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} game this {{ review.rating }} stars</li>
        <br/>
        "{{ review.review }}"
        Recommend? {{ review.recommend }}
      </ul>
    </div>
  `,
});
