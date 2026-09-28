import Cat from "./images/Cat.png"
import App from "./app.js

export default {
  components: { Cat, App },

  data() {
    return {
      message: "This is unindexed, rare, secret. It just isn't public yet. You were one of the first people to find this, and it shows all of your kindness."
    }
  },

  template: `
    <div class="container">
      <h1>Hello!</h1>
      <Cat />
      <App />
    </div>
  `
}