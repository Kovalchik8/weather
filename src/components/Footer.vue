<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer__social">
        <li><a target="_blank" href="https://www.facebook.com/kovalchik8"><i class="fab fa-facebook-f"></i></a></li>
        <li><a target="_blank" href="https://www.instagram.com/roman.kovalchik/?hl=ru"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  position: relative;
  top: 55px;
  padding-bottom: 15px;
  background: #323544;
  &__social {
    list-style: none;
    margin: 0;
    padding: 15px 0 0 0;
    display: flex;
    justify-content: center;
    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 7px;
        font-size: 1.2rem;
        width: 40px;
        height: 40px;
        color: $colorBlue;
        border-radius: 50%;
        background: $colorBgDark;
        transition: 0.2s;

        &:hover {
          text-decoration: none;
          color: white;
          background-color: $colorBlue;
        }
      }
    }
  }
}
</style>
