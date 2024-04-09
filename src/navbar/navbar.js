
document.addEventListener("DOMContentLoaded", function() {
	var checkBtn = document.getElementById('check');

	checkBtn.addEventListener('change', function() {
		if (this.checked) {
			document.body.classList.add('noscroll');
		} else {
			document.body.classList.remove('noscroll');
		}
	});
});