<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>
          <div id="club-logo">
            <img src="../../images/juventus.png" />
          </div>Juventus SQUAD
        </h4>
      </li>
      <li v-for="footballer in footballers" v-bind:key="footballer.id" class="collection-item">
        <div class="chip">{{footballer.position}}</div>
        {{footballer.name}}
        <router-link
          class="secondary-content"
          v-bind:to="{name:'viewJuventusPlayer',params:{footballer_id:footballer.footballer_id}}"
        >
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>

    <div class="fixed-action-btn">
      <router-link to="/newJuventusPlayer" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit";

export default {
  name: "club_2",
  data() {
    return {
      footballers: [],
    };
  },
  created() {
    db.collection("juventus")
      .orderBy("footballer_id")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            footballer_id: doc.data().footballer_id,
            name: doc.data().name,
            position: doc.data().pos,
            value: doc.data().val,
            contract: doc.data().contr,
          };
          this.footballers.push(data);
        });
      });
  },
};
</script>

<style scoped>
.collection-header h4 {
  text-align: center;
}

#club-logo {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}

#club-logo img {
  width: 100%;
  height: 100%;
}
</style>
