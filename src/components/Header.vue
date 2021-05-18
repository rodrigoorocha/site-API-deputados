<template>
  
    <b-navbar sticky variant="light" >
      <a class="navbar-brand">Deputados API</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active"></li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Deputados</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Adicionar"
              >Adicionar</router-link
            >
          </li>
        </ul>
      </div>
    </b-navbar>
  
</template>

<script>
export default {};
</script>

<style>

</style>