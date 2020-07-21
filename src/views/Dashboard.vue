<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Footballers</h4>
      </li>
      <li v-for="footballer in footballers" v-bind:key="footballer.id" class="collection-item">
        <div class="chip">{{footballer.position}}</div>
        {{footballer.name}}
        <router-link
          class="secondary-content"
          v-bind:to="{name:'viewFootballer',params:{footballer_id:footballer.footballer_id}}"
        >
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>

    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit";

export default {
  name: "dashboard",
  data() {
    return {
      footballers: []
    };
  },
  created() {
    db.collection("footballers")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            footballer_id: doc.data().footballer_id,
            name: doc.data().name,
            position: doc.data().pos,
            speed: doc.data().spd,
            dribbling: doc.data().dri,
            passing: doc.data().pas,
            shot: doc.data().sht,
            strength: doc.data().str,
            defense: doc.data().def
          };
          this.footballers.push(data);
        });
      });
  }
};
</script>