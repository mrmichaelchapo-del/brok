import Cat from "./components/Cat.js"

export default {
  components: { Cat },

  data() {
    return {
      message: "This is unindexed, rare, secret. It just isn't public yet. You were one of the first people to find this, and it shows all of your kindness."
     passion: "Thank you for coming here to this site."
    }
  },

  template: `
    <div class="container">
      <h1>Hello!</h1>
      <p>{{ message }} {{ passion }}</p>
      <Cat />
    </div>
  `
}