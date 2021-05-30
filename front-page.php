<?php 
get_header();

$slider = get_field('main-slider', 14);
$advantages_block = get_field('advantages_block', 14);
$ordering_procedure = get_field('ordering_procedure', 14);
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
    <section class="advantages-block">
        <div> <?= $advantages_block['headline'] ?? ''?></div>
        <div> <?= $advantages_block['subheadline'] ?? ''?></div>
        <div>
          <?php if ($advantages_block['background_image']) : ?>
              <img src="<?= $advantages_block['background_image']['url'] ?>" alt="">
          <?php endif; ?>
        </div>
          <?php if ($advantages_block['Advantage']) : ?>
            <?php foreach ($advantages_block['Advantage'] as $advantages) : ?>
                <div>
                    <?php if ($advantages['image']) : ?>
                        <img src="<?= $advantages['image']['url']?>" alt="">
                    <?php endif; ?>
                </div>
                <div>
                    <?= $advantages['description_image'] ?? ''?>
                </div>
            <?php endforeach; ?>
          <?php endif; ?>
    </section>
    <section class="ordering-procedure">
      <?php if ($ordering_procedure['background_image']) : ?>
          <img src="<?= $ordering_procedure['background_image']['url'] ?>" alt="">
      <?php endif ?>
      <?php if ($ordering_procedure['description_of_ordering_procedure']) : ?>
        <?php foreach ($ordering_procedure['description_of_ordering_procedure'] as $ordering) : ?>
              <div>
                  <div class="ordering-procedure-description">
                    <div>
                      <?php if ($ordering['image']) : ?>
                          <img src="<?= $ordering['image']['url'] ?>" alt="">
                      <?php endif; ?>
                    </div>
                      <div>
                        <?= $ordering['headline'] ?>
                      </div>
                      <div>
                        <?= $ordering['description'] ?>
                      </div>
                  </div>
              </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
</main>

<?php get_footer(); ?>