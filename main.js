let share = document.querySelectorAll('.share');
let body = document.querySelector('body');
let iconBox = document.querySelector('.article-writer__share');
let articleWriterWrapper = document.querySelector('.article-writer-wrapper');
let articleWriter = document.querySelector('.article-writer');

var w = window.matchMedia('(min-width: 1200px)');
var x = window.matchMedia('(max-width: 1440px)');


function toggle(event) {
	if (event.target.classList.contains('share')) {
		articleWriter.classList.toggle('hide');
		articleWriterWrapper.classList.toggle('hide');
		console.log('add');
	}
}

function load() {
	if (x.matches) {
		share.forEach(e => {
			e.addEventListener('click', toggle);
		});
	} else if (w.matches) {
		share.forEach(e => {
			e.removeEventListener('click', toggle);
			
		});

		iconBox.addEventListener('mouseover', () => {
			(articleWriterWrapper.style.opacity = 1),
				(articleWriterWrapper.style.transition = 'opacity 0.5s');
			articleWriterWrapper.style.visibility = 'visible';
		});

		iconBox.addEventListener('mouseout', () => {
			articleWriterWrapper.style.visibility = 'hidden';
		});
	}
}
		
window.addEventListener('resize', load);
