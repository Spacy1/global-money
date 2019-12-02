import SmoothScroll from 'smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './sass/main.scss';
// import './libs/bootstrap-grid.min.css';

AOS.init();

new SmoothScroll('a[href*="#"]', {
  speed: 300,
});
