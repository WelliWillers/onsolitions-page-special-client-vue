<template>
    <section class="home section" id="inicio">
        <div class="home__container container__page grid__page">
            <div class="home__content text-center">

                <div class="home__data">
                    <img src="@/assets/img/logo.png" alt="" class="about__img mb-5">
                    <!-- <h3 class="home__subtitle">Descrição empresa</h3> -->
                </div>
            </div>

            <div class="home__scroll">
                <a href="#mensagem" class="home__scroll-button button--flex">
                    <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span class="home__scroll-name">Descer</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
            </div>

            <div class="text-center home__message-text pt-5" id="mensagem">
                <h3 class="pb-5">Se você chegou até aqui,<br/> pode ter a certeza de que<br/> você é muito especial para nós.</h3>
                <p>Queremos agradecer pela parceria e confiança a nós depositada.<br/>
                Você é o motivo de buscarmos ser sempre melhores no que fazemos.
                <br/>
                <strong><i>O nosso muito obrigado!</i></p><strong/>
                <h4 class="section__title home__message py-4">Um Feliz Natal e <br/>um próspero Novo Ano.</h4>
                <p>Esperamos você em <strong>2022</strong>!!</p>

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
        this.$srTop.reveal('.home__message-text', { interval: 100, delay: 100 });
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
    .home__message {
        color: var(--first-color);
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