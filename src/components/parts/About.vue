<template>
    <section class="about section" id="sobre">
        <h2 class="section__title">Sobre nós</h2>
        <span class="section__subtitle">A empresa</span>

        <div class="about__container">
            <!-- <img src="@/assets/img/perfil-2.png" alt="" class="about__img"> -->

            <div class="about__data">
                <p class="about__description">
                    A On Solutions Informática Assessoria e Suporte iniciou suas atividades em maio de 2010, na cidade de Lajeado, Rio Grande do Sul. A empresa surgiu de dois amigos com muitas ideias somadas a grande experiência profissional na área de informática.
                </p>  
                <p class="about__description">  
                    Trabalhamos com o intuito de atender aos clientes com o máximo de dedicação, nossa prioridade é a satisfação de nossos clientes.
                </p>
                <p class="about__description">
                    Nossa meta é suprir a necessidade de nossos clientes, superando expectativas, criando e aplicando soluções na área de informática.
                </p>
                <p class="about__description">
                    Temos como princípios básicos a responsabilidade, ética profissional, honestidade e respeito para com nossos clientes, que são nossos bens maiores.
                </p>

                

                <!-- <div class="about__info">
                    <div>
                        <span class="about__info-title">17+</span>
                        <span class="about__info-name">Projects in <br> FrontEnd</span>
                    </div>
                    <div>
                        <span class="about__info-title">03</span>
                        <span class="about__info-name">Projects in <br> BackEnd</span>
                    </div>
                    <div>
                        <span class="about__info-title">04</span>
                        <span class="about__info-name">Projects in <br> Apps</span>
                    </div>
                </div> -->

                <div class="about__buttons">
                    <a href="https://www.onsolutions.inf.br/" target="_blank" class="button button--flex">
                        Ir ao site oficial
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "about-page",
    mounted() {
        this.$srTop.reveal('.about__img', { delay: 300 });
        this.$srTop.reveal('.about__description', { delay: 400 });
        this.$srTop.reveal('.section__subtitle', { interval: 100 });
    }
}
</script>

<style>
    .about__img{
        width: 300px;
        border-radius: .5rem;
        justify-self: center;
        align-self: center;
    }
    .about__description {
        text-align: center;
        margin-bottom: var(--mb-2-5);
    }
    .about__info{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2-5);
    }
    .about__info-title {
        font-size: var(--h2-font-size);
        font-weight: var(--font-semi-bold);
        color: var(--title-color);
    }
    .about__info-title, .about__info-name {
        display: block;
        text-align: center;
    }
    .about__info-name{
        font-size:var(--smaller-font-size);
    }
    .about__buttons{
        display: flex;
        justify-content: center;
    }
    .about__icon{
        font-size: 1.5rem;
        margin-left: .5rem;
    }
</style>