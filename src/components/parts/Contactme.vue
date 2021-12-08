<template>
    <section class="contact section">
        <h2 class="section__title contact__title">Entre em contato</h2>
        <span class="section__subtitle contact__subtitle">Que retornaremos o mais breve possível.</span>

        <div class="contact__container">
            <div class="contact__information">
                <i class="uil uil-whatsapp-alt contact__icon"></i>

                <div>
                    <h3 class="contact__title">WhatsApp</h3>
                    <span class="contact__subtitle"><a href="https://api.whatsapp.com/message/PJGGOKAPNW7JB1" target="_blank">Clique aqui para conversa</a> <br/> ou ligue (51) 3748-6454</span>
                </div>
            </div>
            <div class="contact__information">
                <i class="uil uil-message contact__icon"></i>

                <div>
                    <h3 class="contact__title">E-mail</h3>
                    <span class="contact__subtitle"><a href="mailto:onsolutions@onsolutions.inf.br" target="_blank">onsolutions@onsolutions.inf.br</a></span>
                </div>
            </div>
            <div class="contact__information">
                <i class="uil uil-map-marker contact__icon"></i>

                <div>
                    <h3 class="contact__title">Endereço</h3>
                    <span class="contact__subtitle"><a href="https://www.google.com/maps/place/On+Solutions/@-29.4573996,-51.9733106,17z/data=!3m1!4b1!4m5!3m4!1s0x951c61705f32e42b:0x66c794f54f3ee3fb!8m2!3d-29.457364!4d-51.9711406" target="_blank">Clique para ver</a></span>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "contactme-page",
    mounted() {
        this.$srTop.reveal('.contact', { delay: 100 });
    }
}
</script>

<style>
    .contact {
        background-color: var(--first-color);
        height: 100%;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 5rem 2rem 5rem 2rem !important;
        width: var(--nav-left);
        z-index: var(--z-fixed);
        box-shadow: 0px 0 14px -6px var(--title-color);
    }
    .contact__container{
        row-gap: 3rem;
        padding: 1rem 3rem;
    }
    .contact__information{
        display: flex;
        margin-bottom: var(--mb-1);
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .contact__icon{
        font-size: 2rem;
        color: var(--body-color);
        margin-bottom: var(--mb-0-75);
    }
    .contact__title{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        color: var(--container-color);
    }
    .contact__subtitle{
        font-size: var(--small-font-size);
        color: var(--container-color);
        margin-bottom: var(--mb-1) !important;
    }
    .contact__content{
        background-color: var(--input-color);
        border-radius: .5rem;
        padding: .75rem 1rem .25rem;

    }
    .contact__label{
        font-size: var(--small-font-size);
        color: var(--title-color);
    }
    .contact__input{
        width: 100%;background-color: var(--input-color);
        color: var(--text-color);
        font-family: var(--body-font-family);
        font-size: var(--normal-font-size);
        border: none;
        outline: none;
        padding: .75rem 1rem .25rem 0;
    }
</style>