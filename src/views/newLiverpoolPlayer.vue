<template>
  <div id="newFootballer">
    <h3>New Player</h3>
    <div class="row">
      <form @submit.prevent="saveFootballer" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="footballer_id" required />
            <label>Footballer ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
            <label>Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
            <label>Position</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="value" required />
            <label>Value (mil)</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="contract" required />
            <label>Contract expiration year</label>
          </div>
        </div>
        <div class="btn-box">
          <button type="submit" class="btn green">Submit</button>
          <router-link to="/liverpool" class="btn red">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit";

export default {
  name: "newFootballer",
  data() {
    return {
      footballer_id: null,
      name: null,
      position: null,
      value: null,
      contract: null,
    };
  },
  methods: {
    saveFootballer() {
      db.collection("liverpool")
        .add({
          footballer_id: this.footballer_id,
          name: this.name,
          pos: this.position,
          val: this.value,
          contr: this.contract,
        })
        .then(this.$router.push("/liverpool"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.btn-box {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>