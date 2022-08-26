import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/ReavealOnScroll.js';
import StickyHeader from './modules/StickyHeader';

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let mobileMenu = new MobileMenu();

let stickyHeader = new StickyHeader();

if(module.hot) {
    module.hot.accept()
}