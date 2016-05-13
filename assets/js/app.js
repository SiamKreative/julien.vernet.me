/**
 * Remove loading class when page fully loaded
 * https://github.com/SiamKreative/julien.vernet.me/blob/master/assets/sass/main.scss#L60-L64
 */
window.onload = function () {
	document.body.className = '';
}

/**
 * Mobile specific
 */
window.ontouchmove = function () {
	return false;
}
window.onorientationchange = function () {
	document.body.scrollTop = 0;
}

/**
 * Google Fonts
 * https://bensmann.no/google-webfonts-performance/
 */
WebFontConfig = {
	google: {
		families: ['Source+Sans+Pro:300,900']
	}
};

var cb = function () {
	var wf = document.createElement('script');
	wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;

if (raf) {
	raf(cb);
} else {
	window.addEventListener('load', cb);
}