<footer>
    <div class="container">
      <?php
      $address = get_field('address', 'option');
      $email = get_field('email', 'option');
      $phone = get_field('phone', 'option');
      $social_networks = get_field('social_networks', 'option');
      ?>
        <div class="footer-information">
            <div class="contact-info">
                <p class="ct-title">Адрес</p>
                      <p> <?= $address ?? '' ?> </p>
            </div>
            <div class="contact-info">
                <p class="ct-title">Email</p>
                      <a href="mailto:<?= $email ?? '' ?>"><?= $email ?? '' ?></a>
            </div>
            <div class="contact-info">
                <p class="ct-title">Телефон</p>
                      <a href="tel:<?= $phone ?? '' ?>"> <?= $phone ?? '' ?> </a>
            </div>
        </div>
        <div class="footer-social-image">
          <?php if ($social_networks) : ?>
            <?php foreach ($social_networks as $social) : ?>
                  <a href="<?= $social['link']['url'] ?>">
                      <img src="<?= $social['image_social']['url'] ?>" alt="">
                  </a>
            <?php endforeach; ?>
          <?php endif; ?>
        </div>
    </div>
    <div class="Copyright">Copyright &copy; <?php echo date("Y"); ?>. &nbsp;
        <a href="<?php bloginfo('url'); ?>"><?php bloginfo('name'); ?></a>.
        Все права защищены. <br />
    </div>

</footer>
  <?php wp_footer(); ?>
  </body>

  </html>