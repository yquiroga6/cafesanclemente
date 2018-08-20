import {
    MDCRipple
} from '@material/ripple';
import {
    MDCTopAppBar
} from '@material/top-app-bar/index';
import {
    MDCTab,
    MDCTabFoundation
} from '@material/tabs';
import {
    MDCTabBar,
    MDCTabBarFoundation
} from '@material/tabs';
import {
    MDCTabBarScroller,
    MDCTabBarFoundationScroller
} from '@material/tabs';
import {
    MDCMenu
} from '@material/menu';


window.cafeSanClemente = window.cafeSanClemente || {};

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const tabBar = new MDCTabBar(document.querySelector('#basic-tab-bar'));

const bHome = document.querySelector('#home_button');
const bFincas = document.querySelector('#fincas_button');
const bHistoria = document.querySelector('#historia_button');
const bProductos = document.querySelector('#productos_button');
const bCertificaciones = document.querySelector('#certificaciones_button');
const bEventos = document.querySelector('#eventos_button');

const sHome = document.getElementsByClassName("home");
const sFincas = document.getElementsByClassName("fincas");
const sHistoria = document.querySelector('#historia');
const sProductos = document.querySelector('#productos');
const sCertificaciones = document.querySelector('#certificaciones');
const sEventos = document.querySelector('#eventos');
const sParallax = document.querySelector('#parallax');

sParallax.style.display = "none";

bHome.addEventListener('click', function () {
    sParallax.style.display = "none";
    for (var i = 0; i < sHome.length; i++) {
        sHome[i].style.display = "block";
    }
    for (var i = 0; i < sFincas.length; i++) {
        sFincas[i].style.display = "none";
    }

});

bFincas.addEventListener('click', function () {
    sParallax.style.display = "block";
    for (var i = 0; i < sHome.length; i++) {
        sHome[i].style.display = "none";
    }
    for (var i = 0; i < sFincas.length; i++) {
        sFincas[i].style.display = "block";
    }
});
