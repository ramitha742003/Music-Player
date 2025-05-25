// Header
class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="bg-dark text-white py-3">
        <nav class="container navbar navbar-expand-lg navbar-dark">
        <img src="images/logo.png" alt="Logo" width="40px" height="35px"></img>
          <a href="index.html" class="navbar-brand">Music Player</a>
          <!-- Hamburger button for mobile -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Navbar items -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="favorites.html">Favorites</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">LogIn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="adminLogin.html">Admin</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      `;
  }
}

// Footer
class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="bg-dark text-white py-5">
  <div class="container">
    <div class="row">
      <!-- Links Section -->
      <div class="col-md-4">
        <h5 class="text-uppercase">Quick Links</h5><hr />
        <ul class="list-unstyled">
          <li><a href="index.html" class="text-white">Home</a></li>
          <li><a href="about.html" class="text-white">About</a></li>
          <li><a href="favorites.html" class="text-white">Favorites</a></li>
          <li><a href="login.html" class="text-white">Login</a></li>
          <li><a href="register.html" class="text-white">Register</a></li>
        </ul>
      </div>

      <!-- Social Media Links Section -->
      <div class="col-md-4">
        <h5 class="text-uppercase">Social Media Links</h5><hr />
        <ul class="list-unstyled">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="text-white"
              >Facebook</a
            >
          </li>
          <li>
            <a href="https://x.com/" target="_blank" class="text-white"
              >Twitter</a
            >
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="text-white"
              >Instagram</a
            >
          </li>
          <li>
            <a
              href="https://in.pinterest.com/"
              target="_blank"
              class="text-white"
              >Pinterest</a
            >
          </li>
        </ul>
      </div>

      <!-- Contact Section -->
      <div class="col-md-4">
        <h5 class="text-uppercase">Contact Us</h5><hr />
        <ul class="list-unstyled">
          <li>
            Email:
            <a href="mailto:info@musicplayer.com" class="text-white"
              >info@musicplayer.com</a
            >
          </li>
          <li>
            Phone:
            <a href="tel:+1234567890" class="text-white">+123 456 7890</a>
          </li>
          <li>
            Official Website:
            <a href="index.html" class="text-white">www.musicplayer.com</a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="my-4" />
    <div class="text-center">
      <p>&copy; 2025 Music Player. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    `;
  }
}

// Fetching Header and Footer
customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
