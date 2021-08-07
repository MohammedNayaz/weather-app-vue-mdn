<template>

  <div>
    <header v-if="addCityActive" class="container add-city">
      <nav>
        <span>Weather App</span>
        <div class="right">
          <i @click="editCities" ref="editCities" class="far fa-edit"></i>
          <i @click="reloadApp" class="fas fa-sync"></i>
          <i @click="addCity" class="fas fa-plus"></i> <span>&nbsp;&nbsp;</span>
          <a class="admin" href="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=19.9733&lon=76.2891&zoom=5"><i class="fas fa-globe"></i></a>
           <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <!-- <a class="admin" href="https://www.linkedin.com/in/mohammed-nayaz-0734991a4/"><i class="fas fa-user-shield"></i></a> -->
          <a class="admin" href="/admin"><i class="fas fa-user-shield"></i></a><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
      </nav>
    </header>
    <header v-else class="container" :class="{ day: isDay, night: isNight }">
      <nav>
        <router-link class="router-link" :to="{ name: 'AddCity' }">
          <h3 class="fas fa-arrow-left"></h3>
        </router-link>
        <span
          >{{ new Date().toLocaleString("en-us", { weekday: "short" }) }},
          {{ new Date().toLocaleString("en-us", { month: "short" }) }}
          {{ new Date().toLocaleString("en-us", { day: "2-digit" }) }}</span
        >
        <span>&deg; F</span>
      </nav>
        <a href="https://www.linkedin.com/in/mohammed-nayaz-0734991a4/"><h4>Project By-MDNayaz</h4></a><br><br>

    </header>

  </div>


</template>

<script>
export default {
  name: "Navigation",
  props: ["addCityActive", "isDay", "isNight"],
  methods: {
    addCity() {
      this.$emit("add-city");
    },
    reloadApp() {
      location.reload();
    },
    editCities() {
      this.$refs.editCities.classList.toggle("edit-active");
      this.$emit("edit-city");
    },
    admin() {
      this.$emit("admin");
    }
  },
};
</script>

<style lang="scss" scoped>
.admin{
  color: white;

}
h4{
  float: right;
  color: white;
  font-style: oblique;
}
.add-city {
  // background-color: #313640;
  background-color: #001424;
  background-image: url("https://www.transparenttextures.com/patterns/tasky.png");
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
header {
  z-index: 99;
  position: fixed;
  max-width: 1024px;
  width: 100%;

  nav {
    display: flex;
    color: white;
    padding: 30px 0;
    justify-content: space-between;
  }

  .edit-active {
    color: rgba(210, 75, 75, 1);
  }

  .router-link {
    color: #fff;
  }

  .right {
    i {
      font-size: 20px;
    }

    i:nth-child(2),
    i:nth-child(3) {
      margin-left: 16px;
    }
  }

  span {
    font-weight: 600;
  }
}
</style>
