document.addEventListener('DOMContentLoaded', function () {
  // ===== Hamburger Menu =====
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevents closing the menu immediately
      navLinks.classList.toggle('show');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('show');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (event) {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      if (!isClickInsideMenu && !isClickOnToggle) {
        navLinks.classList.remove('show');
      }
    });
  }

  // ===== Sign In / Sign Up Toggle =====
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');
const showSignin = document.getElementById('show-signin');
const showSignup = document.getElementById('show-signup');
const toSignup = document.getElementById('to-signup');
const toSignin = document.getElementById('to-signin');

function setActiveToggle(activeButton) {
  showSignin.classList.remove('active-toggle');
  showSignup.classList.remove('active-toggle');
  activeButton.classList.add('active-toggle');
}

if (signinForm && signupForm) {
  if (showSignin) {
    showSignin.addEventListener('click', () => {
      signinForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      setActiveToggle(showSignin);
    });
  }

  if (showSignup) {
    showSignup.addEventListener('click', () => {
      signupForm.classList.remove('hidden');
      signinForm.classList.add('hidden');
      setActiveToggle(showSignup);
    });
  }

  if (toSignup) {
    toSignup.addEventListener('click', (e) => {
      e.preventDefault();
      signupForm.classList.remove('hidden');
      signinForm.classList.add('hidden');
      setActiveToggle(showSignup);
    });
  }

  if (toSignin) {
    toSignin.addEventListener('click', (e) => {
      e.preventDefault();
      signinForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      setActiveToggle(showSignin);
    });
  }
}

  // ===== Theme Toggle =====
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      toggleBtn.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
  }
});







