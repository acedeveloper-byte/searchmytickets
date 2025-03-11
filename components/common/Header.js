import React from "react";

const Header = () => {
  return (
    <div>
      <div class="header header-transparent theme">
        <div class="container">
          <nav id="navigation" class="navigation navigation-landscape">
            <div class="nav-header">
              <a class="nav-brand static-show" href="/#">
                <img src="/img/logo-light.png" class="logo" alt="" />
              </a>

              <a class="nav-brand mob-show" href="/">
                <img src="/img/logo.png" class="logo" alt="" />
              </a>

              <div class="nav-toggle"></div>

              <div class="mobile_nav">
                <ul>
                  <li class="currencyDropdown me-2">
                    <a
                      href="#"
                      class="nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#currencyModal"
                    >
                      <span class="fw-medium">INR</span>
                    </a>
                  </li>

                  <li class="languageDropdown me-2">
                    <a
                      href="#"
                      class="nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#countryModal"
                    >
                      <img
                        src="/img/flag/flag.png"
                        class="img-fluid"
                        width="17"
                        alt="Country"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="bg-light-primary text-primary rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                    >
                      <i class="fa-regular fa-circle-user fs-6"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="nav-menus-wrapper"
              style={{ transitionProperty: "none" }}
            >
              <ul class="nav-menu">
                <li>
                  <a href="/">
                    Home<span class="submenu-indicator"></span>
                  </a>
                </li>
                <li>
                  <a href="/about-us">
                    About Us<span class="submenu-indicator"></span>
                  </a>
                </li>
                <li>
                  <a href="/contact-us">
                    Contact Us<span class="submenu-indicator"></span>
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy">
                    Privacy Policy<span class="submenu-indicator"></span>
                  </a>
                </li>
              </ul>

              <ul class="nav-menu nav-menu-social align-to-right">
                <li class="currencyDropdown me-2">
                  <a
                    href="#"
                    class="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#currencyModal"
                  >
                    <span class="fw-medium">INR</span>
                  </a>
                </li>

                <li class="languageDropdown me-2">
                  <a
                    href="#"
                    class="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#countryModal"
                  >
                    <img
                      src="/img/flag/flag.png"
                      class="img-fluid"
                      width="17"
                      alt="Country"
                    />
                  </a>
                </li>

                <li class="list-buttons light">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#login">
                    <i class="fa-regular fa-circle-user fs-6 me-2"></i>Sign In /
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
