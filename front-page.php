<?php 
get_header();
$slider = get_field('main-slider', 29);
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
                        <div class="">
                            <p><?= $slide['description'] ?></p>
                            <h2><?= $slide['title'] ?></h2>
                            <?php if ($slide['link']) { ?>
                            <a href="<?= $slide['link'] ?>">Подробнее</a>
                            <?php } ?>
                        </div>

                        <div class="examples">
                            <?php foreach($examples as $examlpe): 
                              ?>
                            <img src="<?=$examlpe;?>" alt="example">
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
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
</main>

<?php get_footer(); ?>