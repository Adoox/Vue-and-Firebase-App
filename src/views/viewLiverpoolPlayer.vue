<template>
  <div id="viewFootballer">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{name}}</h4>
      </li>
      <li class="collection-item">Footballer position: {{position}}</li>
      <li class="collection-item">Market value: €{{value}}m</li>
      <li class="collection-item">Contract expires: {{contract}}</li>
    </ul>
    <div class="btn-box">
      <router-link to="/liverpool" class="btn blue">Back</router-link>
      <button @click="deleteFootballer" class="btn red">Remove Player from Squad</button>
    </div>
    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{name:'editLiverpoolPlayer',params:{footballer_id:footballer_id}}"
        class="btn-floating btn-large red"
      >
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit";

export default {
  name: "viewFootballer",
  data() {
    return {
      footballer_id: null,
      name: null,
      position: null,
      value: null,
      contract: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("liverpool")
      .where("footballer_id", "==", to.params.footballer_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
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
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      db.collection("liverpool")
        .where("footballer_id", "==", this.$route.params.footballer_id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.footballer_id = doc.data().footballer_id;
            this.name = doc.data().name;
            this.position = doc.data().pos;
            this.value = doc.data().val;
            this.contract = doc.data().contr;
          });
        });
    },
    deleteFootballer() {
      if (confirm("Are you sure?")) {
        db.collection("liverpool")
          .where("footballer_id", "==", this.$route.params.footballer_id)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
              this.$router.push("/liverpool");
            });
          });
      }
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