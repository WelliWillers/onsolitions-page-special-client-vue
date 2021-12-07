import Header from '@/components/Header.vue'
import Home from '@/components/parts/Home';
import About from '@/components/parts/About';
import Qualification from '@/components/parts/Qualification.vue';
import Testimonial from '@/components/parts/Testimonial.vue';
import Contactme from '@/components/parts/Contactme.vue';
import Footer from '@/components/Footer.vue'

const GlobalComponents = {
  install(Vue) {
    Vue.component(Header.name, Header);   
    Vue.component(Home.name, Home);   
    Vue.component(About.name, About);   
    Vue.component(Qualification.name, Qualification);   
    Vue.component(Testimonial.name, Testimonial);   
    Vue.component(Contactme.name, Contactme);   
    Vue.component(Footer.name, Footer);   
  }
};

export default GlobalComponents;
