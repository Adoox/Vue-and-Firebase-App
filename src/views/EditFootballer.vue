<template>
  <div id="editFootballer">
    <h3>Edit Footabller</h3>
    <div class="row">
      <form @submit.prevent="updateFootballer" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="footballer_id" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="value" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="contract" required />
          </div>
        </div>
        <div class="btn-box">
          <button type="submit" class="btn green">Submit</button>
          <router-link to="/barcelona" class="btn red">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit";

export default {
  name: "editFootballer",
  data() {
    return {
      footballer_id: null,
      name: null,
      position: null,
      value: null,
      contract: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("barcelona")
      .where("footballer_id", "==", to.params.footballer_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.footballer_id = doc.data().footballer_id;
            vm.name = doc.data().name;
            vm.position = doc.data().pos;
            vm.value = doc.data().val;
            vm.contract = doc.data().contr;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("barcelona")
        .where("footballer_id", "==", this.$route.params.footballer_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.footballer_id = doc.data().footballer_id;
            this.name = doc.data().name;
            this.position = doc.data().pos;
            this.value = doc.data().val;
            this.contract = doc.data().contr;
          });
        });
    },
    updateFootballer() {
      db.collection("barcelona")
        .where("footballer_id", "==", this.$route.params.footballer_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                footballer_id: this.footballer_id,
                name: this.name,
                pos: this.position,
                val: this.value,
                contr: this.contract
              })
              .then(() => {
                this.$router.push({
                  name: "viewFootballer",
                  params: { footballer_id: this.footballer_id }
                });
              });
          });
        });
    }
  }
};
</script>

<style scoped>
.btn-box {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>