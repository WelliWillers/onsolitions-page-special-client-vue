<template>
    <section class="home section" id="home">
        <div class="home__container container__page grid__page">
            <div class="home__content grid__page">


                <div class="home__data">
                    <h1 class="home__title">Hi, I'am Wellington</h1>
                    <h3 class="home__subtitle">FrontEnd Development</h3>
                </div>
            </div>

            <div class="home__scroll">
                <a href="#about" class="home__scroll-button button--flex">
                    <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span class="home__scroll-name">Scroll Down</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "home-page",
    mounted() {
        this.$srTop.reveal('.home__img', { delay: 100 });
        this.$srTop.reveal('.home__title', { delay: 200 });
        this.$srTop.reveal('.home__subtitle', { delay: 300 });
        this.$srTop.reveal('.home__description', { delay: 400 });
        this.$srTop.reveal('.home__social-icon', { interval: 100 });
        this.$srTop.reveal('.button--flex', { delay: 100 });
    }
}
</script>

<style>
    .home__container{
        gap: 1rem;
    }
    .home__content{
        grid-template-columns: .5fr 3fr;
        padding-top: 1.5rem;
        align-items: center;
    }
    .home__social{
        display: grid;
        grid-template-columns: max-content;
        row-gap: 1rem;
    }
    .home__social-icon {
        font-size: 1.25rem;
        color: var(--first-color);
    }
    .home__social-icon:hover{
        color: var(--first-color-alt);
    }
    .home__blob{
        width: 200px;
        fill: var(--first-color);
    }
    .home__blob-img{
        width: 200px !important;
    }
    .home__data{
        grid-column: 1/3;
    }
    .home__title{
        font-size: var(--big-font-size);
    }
    .home__subtitle{
        font-size: var(--h3-font-size);
        color: var(--text-color); 
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-75);
    }
    .home__description{
        margin-bottom: var(--mb-2);
    }

    .home__scroll{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .home__scroll-button{
        color: var(--first-color);
        transition: .3s;
    }
    .home__scroll-button:hover{
        transform: translateY(.25rem);
    }
    .home__scroll-mouse{
        font-size: 2rem;
    }
    .home__scroll-name{
        font-size: var(--small-font-size);
        color: var(--title-color); 
        font-weight: var(--font-medium);
    }
    .home__scroll-arrow {
        font-size: 1.2rem;
    }

    


</style>