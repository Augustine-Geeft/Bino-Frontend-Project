var hamMenu = $(".ham-menu");

hamMenu.click(function () {
	// $(".hero-title").css("font-style", "italic")
	$(".mobile-menu").slideToggle()
	// document.querySelector('.mobile-nav nav').style.display = "block";
})


const options = {
	// rootMargin: "-550px",
}

const slideUpElements = document.querySelectorAll('.slideUp');
const fadeInElements = document.querySelectorAll('.fadeIn');
const fadeInLeftElements = document.querySelectorAll('.fadeInLeft');
const fadeInUpElements = document.querySelectorAll('.fadeInUp');
const fadeIndownElements = document.querySelectorAll('.fadeIndown');

const observer = new IntersectionObserver((entries, options) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('showslideUp')
			entry.target.classList.add('showfadeIn')
			entry.target.classList.add('showfadeInLeft')
			entry.target.classList.add('showfadeInUp')
			entry.target.classList.add('showfadeIndown')
		} else {
			entry.target.classList.remove('showfadeIn')
			entry.target.classList.remove('showfadeInLeft')
			entry.target.classList.remove('showfadeInUp')
			// entry.target.classList.remove('showfadeIndown')
		}
	})
});

slideUpElements.forEach((el) => observer.observe(el));
fadeInElements.forEach((el) => observer.observe(el));
fadeInLeftElements.forEach((el) => observer.observe(el));
fadeInUpElements.forEach((el) => observer.observe(el));
fadeIndownElements.forEach((el) => observer.observe(el));

$(window).on("load", function () {
	$(".loader-wrapper").fadeOut("slow");
  });