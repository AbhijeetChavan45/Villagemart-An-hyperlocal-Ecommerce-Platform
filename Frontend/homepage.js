

// toggle navbar for mobile
const navToggle = document.getElementById('nav-toggle');
const headerRight = document.getElementById('headerRight');

navToggle.addEventListener('click', () => {
  headerRight.classList.toggle('active');

  // toggle icon between menu and close
  if (headerRight.classList.contains('active')) {
    navToggle.innerHTML = '<i class="ri-close-line"></i>';
  } else {
    navToggle.innerHTML = '<i class="ri-menu-3-fill"></i>';
  }
});



