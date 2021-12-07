<template>
  <div class="dashboard__container">
    <div class="leftPart">
      <contactme-page/>
    </div>
    <div class="rightPart">
      <nav-header />
        <main class="main">
            <home-page/>
            <about-page/>
            <contactme-page />
        </main>
      <nav-footer/>
      <a href="#" class="scrollup" id="scroll-up">
        <i class="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

    this.$srTop.reveal('.project__title', { delay: 100 });
    this.$srTop.reveal('.project__subtitle', { delay: 200 });
    this.$srTop.reveal('.project__img', { delay: 300 });

  }
}
</script>

<style>
  .leftPart {
    position:relative;
    width: var(--nav-left);
  }
  .rightPart {
    margin-left: var(--nav-left);
  }
  .scrollup{
    position: fixed;
    right: 1rem;
    bottom: -20%;
    background-color: var(--first-color);
    opacity: .8;
    padding: 0 .3rem;
    border-radius: .4rem;
    z-index: var(--z-tooltip);
    transition: .4s;
  }
  .scrollup:hover{
    background-color: var(--first-color-alt);
  }
  .scrollup__icon{
    font-size: 1.5rem;
    color: #fff;
  }
  .show-scroll {
    bottom: 5rem;
  }
</style>