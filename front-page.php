<?php 
get_header();
$pageId = 29;
$slider = get_field('main-slider', $pageId);
$advantages = get_field('advantages_block', $pageId);
$ordering_procedure = get_field('ordering_procedure', $pageId);
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