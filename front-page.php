<?php
get_header();
$pageId = 29;
$pageDenId = 14;
$slider = get_field('main-slider', $pageDenId);
$advantages = get_field('advantages_block', $pageDenId);
$ordering = get_field('ordering_procedure', $pageDenId);
$promo = get_field('promo_block', $pageDenId);
$сertificate_slider = get_field('сertificate_slider', $pageDenId);
?>
<main>
    <section id="front-slider">
        <div class="swiper-container front-slider">
            <div class="swiper-wrapper">
                <?php foreach ($slider as $slide) {
                    $examples = $slide['examples'];
                    ?>
                <div class="swiper-slide">
                    <div class="slider-content">
                        <div class="about">
                            <p><?= $slide['description'] ?></p>
                            <h2><?= $slide['title'] ?></h2>
                            <?php if ($slide['link']) { ?>
                            <a href="<?= $slide['link'] ?>">Подробнее</a>
                            <?php } ?>
                        </div>

                        <div class="examples">
                            <?php foreach($examples as $examlpe):
                                  ?>
                            <span>
                                <img src="<?=$examlpe;?>" alt="example">
                            </span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <img class="slide-main-image" src="<?php echo $slide['image']['url']; ?>" alt="slide">
                </div>
                <?php } ?>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </section>
    <section id="advantages">
        <div class="adv_layout_image">
            <?php if ($advantages['background_image']) : ?>
            <img src="<?= $advantages['background_image']['url'] ?>" alt="">
            <?php endif; ?>
        </div>

        <div class="advantages_texts">
            <p><?= $advantages['subheadline'] ?? ''?></p>
            <h2><?= $advantages['headline'] ?? ''?></h2>
        </div>

        <?php if ($advantages['Advantage']) : ?>
        <div class="adv_items">

            <?php foreach ($advantages['Advantage'] as $advantage) : ?>
            <div class="avd_item">
                <?php if ($advantage['image']) : ?>
                <img src="<?= $advantage['image']['url']?>" alt="">
                <?php endif; ?>

                <p class="adv_info">
                    <?= $advantage['description_image'] ?? ''?>
                </p>
            </div>
            <?php endforeach; ?>

        </div>
        <?php endif; ?>


    </section>
    <section id="ordering" data-parallax="scroll" positionY="0px"
        data-image-src="<?= $ordering['background_image']['url'] ?>">
        <div class="ordering-headline">
          <?= $ordering['headline'] ?? '' ?>
        </div>

        <?php if ($ordering['description_of_ordering_procedure']) : ?>
        <div class="ordering-procedure">

            <?php foreach ($ordering['description_of_ordering_procedure'] as $order) : ?>
            <div class="order-item">
                <p><?= $order['headline'] ?></p>
                <?php if ($order['image']) : ?>
                <img src="<?= $order['image']['url'] ?>" alt="">
                <?php endif; ?>
                <p><?= $order['description'] ?></p>
            </div>

            <?php endforeach; ?>
        </div>
        <?php endif; ?>
    </section>
    <section class="promo-block"
             <?php if ($promo['background_image']['url']) : ?>
             style="background: url(<?= $promo['background_image']['url']?>)">
             <?php endif;?>
        <div class="container">
            <?php if ($promo['block']) : ?>
            <?php foreach ($promo['block'] as $block) : ?>
            <div class="
            <?= $block['display_position'] ? 'promo-block-wrapper__' . $block['display_position'] : '' ?>">
                <div class="promo-block-left">
                    <div class="promo-block-left-content">
                        <?= $block['headline'] ?? '' ?>
                    </div>
                    <?php if ($block['images']) : ?>
                    <?php foreach ($block['images'] as $image) : ?>
                    <div class="promo-block-left-content">
                        <img src="<?= $image['image']['url'] ?>" alt="">
                    </div>
                    <?php endforeach; ?>
                    <?php endif; ?>
                </div>
                <div class="promo-block-right">
                    <div class="promo-block-description">
                        <?= $block['description'] ?? '' ?>
                    </div>
                </div>
            </div>
            <?php endforeach;?>
            <?php endif;?>
        </div>
    </section>
    <section id="сertificate_slider">
        <div class="swiper-container сertificate_slider">
            <div class="swiper-wrapper">
              <?php if ($сertificate_slider['slider']) : ?>
                <?php foreach ($сertificate_slider['slider'] as $slide) : ?>
                      <div class="swiper-slide">
                          <img class="image-сertificate_slider" src="<?= $slide['image']['url'] ?>" alt="">
                      </div>
                <?php endforeach; ?>
              <?php endif; ?>

            </div>
                <div class="pagination-сertificate">
                    <div class="swiper-button-prev-сertificate">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                             id="Layer_1" x="0px" y="0px" viewBox="0 0 338.352 338.352"
                             style="enable-background:new 0 0 338.352 338.352;" xml:space="preserve">
        <path d="M169.176,0C75.601,0,0,75.514,0,169.176s75.514,169.176,169.176,169.176s169.176-75.514,169.176-169.176    S262.752,0,169.176,0z M169.176,315.731c-81.191,0-146.556-65.365-146.556-146.556S87.986,22.619,169.176,22.619    s146.556,65.365,146.556,146.556S250.367,315.731,169.176,315.731z"/>
                            <path d="M231.187,162.382l-74.396-74.396c-4.472-4.472-11.267-4.472-15.825,0c-4.472,4.472-4.472,11.267,0,15.826l65.365,65.365    l-65.365,65.365c-4.472,4.472-4.472,11.267,0,15.825c2.236,2.236,4.472,3.354,7.913,3.354c2.236,0,5.677-1.118,9.03-2.236    l73.278-73.278c2.236-2.236,3.355-4.472,3.355-7.913C234.542,166.94,233.424,164.618,231.187,162.382z"/>
                    </svg>
                    </div>
                    <div class="swiper-button-next-сertificate">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                             id="Layer_1" x="0px" y="0px" viewBox="0 0 338.352 338.352"
                             style="enable-background:new 0 0 338.352 338.352;" xml:space="preserve">
        <path d="M169.176,0C75.601,0,0,75.514,0,169.176s75.514,169.176,169.176,169.176s169.176-75.514,169.176-169.176    S262.752,0,169.176,0z M169.176,315.731c-81.191,0-146.556-65.365-146.556-146.556S87.986,22.619,169.176,22.619    s146.556,65.365,146.556,146.556S250.367,315.731,169.176,315.731z"/>
                            <path d="M231.187,162.382l-74.396-74.396c-4.472-4.472-11.267-4.472-15.825,0c-4.472,4.472-4.472,11.267,0,15.826l65.365,65.365    l-65.365,65.365c-4.472,4.472-4.472,11.267,0,15.825c2.236,2.236,4.472,3.354,7.913,3.354c2.236,0,5.677-1.118,9.03-2.236    l73.278-73.278c2.236-2.236,3.355-4.472,3.355-7.913C234.542,166.94,233.424,164.618,231.187,162.382z"/>
                    </svg>
                    </div>
                </div>
        </div>
    </section>
    <section></section>
    <section></section>
</main>

<?php get_footer(); ?>