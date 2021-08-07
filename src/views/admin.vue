<template>

  <header class="container admin">
    <nav>
      <router-link class="router-link" :to="{ name: 'AddCity' }">
        <br>
      <h2 id="bk" class="fas fa-arrow-left"></h2>
      </router-link>
    </nav>
    <div class="main">
      <h2 >About Developer</h2>
      <br><br>
    <div class="desc">
      <br>
      <ul>
        <li>Name: Mohammed Nayaz</li><br>
        <li>Qualifications: BE - CS&amp;E</li><br>
        <li>Email ID: mdnayaz493@gmail.com</li>
<br>
        <img  src="../../public/mdn.jpg" alt="" />
      </ul>

      <br>
    </div>

    </div>
    </header>
      <!-- <a href="https://www.linkedin.com/in/mohammed-nayaz-0734991a4/"><h4>Project By-MDNayaz</h4></a> -->

</template>

<script>
export default {

}
</script>

<style>

  h2{
    text-align: center;
    font-weight:bolder;
    color: white;
  }

  img{
    align-items: center;
    padding-left: 80px;
    width: 250px;
  }

  .admin {
    z-index: 99;
    position: fixed;
    max-width: 1024px;
    width: 100%;
    background-color: #001424;
    background-image: url("https://www.transparenttextures.com/patterns/dark-wood.png");
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
      display: flex;
      color: white;
      padding: 30px 0;
      justify-content: space-between;

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

  }
  #bk{
    float: left;
    color: white;
    width: 40px;
    height: 100%;
    /* background: #1A4A65; */
  }
  .desc{
      background: #1A4A65;
      padding-top: 0;
      padding-left: 20px;
      color: white;
        background-color: #001424;
        background-image: url("https://www.transparenttextures.com/patterns/tasky.png");
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  }
  ul{
    padding-left: 20px;
    /* font-size: 20px; */
  }
</style>
