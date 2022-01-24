<template>
  <footer class="section bd-container">
    <div class="footer__container bd-grid">
      <div class="footer__content">
        <a href="#" class="footer__logo">Tasty Food</a>
        <span class="footer_description"> Restaurant </span>
        <div>
          <a href="#" class="footer__social">
            <box-icon name="facebook"></box-icon>
          </a>
          <a href="#" class="footer__social">
            <box-icon name="instagram"></box-icon>
          </a>
          <a href="#" class="footer__social">
            <box-icon name="twitter"></box-icon>
          </a>
        </div>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">Services</h3>
        <ul>
          <li><a href="#" class="footer__link"> Delivery</a></li>
          <li><a href="#" class="footer__link"> Pricing</a></li>
          <li><a href="#" class="footer__link"> Fast food</a></li>
          <li><a href="#" class="footer__link"> Reserve your spot</a></li>
        </ul>
      </div>
      <div class="footer__content">
        <h3 class="footer__title">Information</h3>
        <ul>
          <li><a href="#" class="footer__link"> Event</a></li>
          <li><a href="#" class="footer__link"> Contact us</a></li>
          <li><a href="#" class="footer__link"> Privacy policy</a></li>
          <li><a href="#" class="footer__link"> Terms of service</a></li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">Address</h3>
        <ul>
          <li>Gbagada, Lagos</li>
          <li>Forolagba street</li>
          <li>+234(0)567-1293-074</li>
          <li>info@foodco.com</li>
        </ul>
      </div>
    </div>

    <p class="footer__copy">&#169; 2022 ShadyDev. All rights reserved</p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer__container {
  grid-template-columns: repeat(autofit, minmax(220px, 1fr));
  row-gap: 2rem;
}

.footer__logo {
  font-size: var(--font_-medium);
  color: var(--main-color);
  font-weight: var(--font__semi-bold);
}

.footer__description {
  display: block;
  font-size: var(--small-font-size);
  margin: 0.25rem 0 var(--m-3);
}

.footer__social {
  font-size: 1.5rem;
  color: var(--title);
  margin-right: var(--m-2);
}

.footer__title {
  font-size: var(--fontfont__subheading_heading);
  color: var(--title);
  margin-bottom: var(--m-2);
}

.footer__link {
  display: inline-block;
  color: var(--text-color);
  margin-bottom: var(--m-1);
}

.footer__link:hover {
  color: var(--main-color);
}

.footer__copy {
  text-align: center;
  font-size: var(--font-small);
  color: var(--text-color__light);
  margin-top: 3.5rem;
}
</style>
