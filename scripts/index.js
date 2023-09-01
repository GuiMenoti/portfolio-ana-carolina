const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const elements = document.querySelectorAll('.skills,.projects,.navbar,.header,.footer,.about')
const myObserver = new IntersectionObserver((entries) => {
  console.log(entries)
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})
elements.forEach((element) => myObserver.observe(element))


button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});




