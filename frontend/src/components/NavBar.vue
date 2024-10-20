<template>

<nav class="navbar">
    <div class="logo">
        <a href="/">
            <img id="logo-img" src="../assets/logo.webp" alt="Insyra Logo" />
        </a>
    </div>
    <ul class="nav-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
/* Navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #1f449b;
}

.logo {
  color: #fff;
  font-size: 24px;
}

.logo img {
  width: auto;
  height: 50px;
  background-color: #fff;
  padding: 0px 15px;
  border-radius: 5px;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav-menu li a {
  color: #fff;
  text-decoration: none;
}
</style>