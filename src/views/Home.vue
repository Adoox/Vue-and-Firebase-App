<template>
  <div id="home">
    <div class="container">
      <div class="col">
        <div class="card">
          <div class="card-image">
            <img src="../../images/barcelona.png" />
          </div>
          <div class="card-content">
            <p>Barcelona - Spain</p>
          </div>
          <div class="card-action">
            <router-link to="/barcelona">
              <a class="btn-floating btn-large cyan pulse">
                <i class="fas fa-pen"></i>
              </a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-image">
            <img src="../../images/juventus.png" />
          </div>
          <div class="card-content">
            <p>Juventus - Italy</p>
          </div>
          <div class="card-action">
            <router-link to="/barcelona">
              <a class="btn-floating btn-large cyan pulse">
                <i class="fas fa-pen"></i>
              </a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-image">
            <img src="../../images/liverpool.png" />
          </div>
          <div class="card-content">
            <p>Liverpool - England</p>
          </div>
          <div class="card-action">
            <router-link to="/barcelona">
              <a class="btn-floating btn-large cyan pulse">
                <i class="fas fa-pen"></i>
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 150px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  background-color: rgb(236, 236, 236);
}

.card-content {
  text-align: justify;
  border-bottom: 1px solid rgb(161, 161, 161);
}

.card-content p {
  font-size: 20px;
}

.card-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background: white;
}

.card-image img {
  width: 90%;
  height: 95%;
}
</style>