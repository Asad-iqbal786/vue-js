<template>

  <nav class="header__menu navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/product-list">Product</router-link></li>
          </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
 
};
</script>

<style scoped>
.header {
  background-color: #f2f2f2;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo img {
  height: 84px;
  padding-bottom: 0px;
}

.header__search {
  flex-grow: 1;
  padding-top: 20px;

  margin: 0 1rem;
}

.bDFoZg {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding-top: 16px;
    margin-right: 20px;
}

.djRHpt {
  display: flex;
  width: auto;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 1px;
}

.hQyOJr {
  width: auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
}

.ant-badge {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  position: relative;
  display: inline-block;
  line-height: 1;
}

.header__search input[type="text"] {
  width: 75%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}



.header__auth a {
  margin-right: 1rem;
  color: #000000;
  text-decoration: none;
}

.header__menu {
  background-color: #000000;
  padding: 0.5rem;
  /* width: 99%; */
  border-bottom: 2px solid #7d7d7d;
}

.header__menu ul {
  display: flex;
  list-style: none;
  /* padding: 0; */
  margin: 0;
  /* justify-content: space-evenly; */
}

.BwnfP {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  height: 35px;
}

.gzxJJc {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-weight: 700;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-transform: uppercase;
}

.jwiNak {
  height: 30px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  padding: 0px 10px;
}

.header__menu li {
  margin-right: 1rem;
}

.header__menu a {
  color: #ffffff;
  text-decoration: none;
}

.header__menu a:hover {
  color: white;
  font-weight: bolder;
}

.header__search-button  {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #000000;
  color: #fff;
  border: none;
  position: relative;
  cursor: pointer;
  right: 47px;
}
.sc-dqBHgY.jwiNak {
  font-size: 16px;
  padding-top: 40px;
  font-weight: 700;
}

@media (max-width: 767px) {
  .header {
    flex-wrap: wrap;
  }

  .header__logo,
  .header__auth,
  .header__search {
    margin-bottom: 1rem;
  }

  .header__search {
    flex-basis: 100%;
  }

  .header__search-button {
    margin-top: 0.5rem;
  }

  .header__menu {
    padding: 0.5rem 1rem;
  }

  .header__menu ul {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .header__menu li {
    margin-bottom: 0.5rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .header__menu  {
    padding: 0.5rem 1rem;
    margin-top: 34px;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .header {
    flex-direction: column;
    /* Change the flex direction to column */
    align-items: center;
    /* Center items horizontally */
  }

  header.headers {
    height: 133px;
  }

  .header__logo img {
    height: 70px;
    /* Adjust the logo size for medium screens */
  }

  .header__logo  {
    position: relative;
    right: 146px;
    margin-top: 14px;
  }

  .sc-dqBHgY.jwiNak  {
    font-size: 16px;
    padding-top: 0px;
    font-weight: 700;
  }

  .sc-kTUwUJ.bDFoZg {
    position: absolute;
    right: 2px;
  }

  .header__menu  {
    padding: 0.5rem 1rem;
    margin-top: 34px;
  }

  .sc-kTUwUJ.bDFoZg  {
    position: absolute;
    right: 2px;
    top: 12px;
    color: black;
  }

  .header__search {
    padding-top: 0px;
    width: 100%;
  }

  .header__search input {
    height: 75p;
  }
}
</style>

