<?php
get_header();
$pageId = 29;
$pageDenId = 14;
$slider = get_field('main-slider', $pageId);
$advantages = get_field('advantages_block', $pageId);
$ordering = get_field('ordering_procedure', $pageId);
$promo = get_field('promo_block', $pageId);
$сertificate_slider = get_field('сertificate_slider', $pageId);
$our_works = get_field('our_works', $pageId);
$footer = get_field('footer', 'option');

?>
<main>
    <section id="front-slider">
        <div class="swiper-container front-slider">
            <div class="swiper-wrapper">
                <?php foreach ($slider as $slide) {
                    $examples = $slide['examples'];
                    ?>
                <div class="swiper-slide">
                    <div class="slider-content ">
                        <div class="about animate__animated animate__fadeInLeftBig" data-wow-offset="0">
                            <p><?= $slide['description'] ?></p>
                            <h2><?= $slide['title'] ?></h2>
                            <?php if ($slide['link']) { ?>
                            <a class="btn" href="<?= $slide['link'] ?>">Подробнее</a>
                            <?php } ?>
                        </div>

                        <div class="examples animate__animated animate__fadeInRightBig" data-wow-offset="0">
                            <span></span>
                            <?php foreach($examples as $examlpe):
                                  ?>
                            <span>
                                <img src="<?=$examlpe;?>" alt="example">
                            </span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <img class="slide-main-image" src="<?= $slide['image']['url']; ?>" alt="slide">
                </div>
                <?php } ?>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next">
                <svg x="0px" y="0px" viewBox="0 0 490.8 490.8">
                    <path style="fill:#fff;"
                        d="M231.696,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
                              l227.115,227.136L216.592,472.461c-4.237,4.093-4.355,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
                              c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L231.696,3.128z" />
                    <path style="fill:#fff;" d="M274.363,237.795L39.696,3.128c-4.237-4.093-10.99-3.975-15.083,0.262
                              c-3.992,4.134-3.992,10.687,0,14.821l227.115,227.136L24.592,472.461c-4.237,4.093-4.354,10.845-0.262,15.083
                              c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667
                              C278.511,248.718,278.521,241.966,274.363,237.795z" />
                    <path
                        d="M224.144,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115
                              L216.592,18.232c-4.093-4.237-3.975-10.99,0.262-15.083c4.134-3.992,10.687-3.992,14.82,0l234.667,234.667
                              c4.164,4.165,4.164,10.917,0,15.083L231.675,487.565C229.676,489.56,226.968,490.68,224.144,490.68z" />
                    <path d="M32.144,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115
                              L24.592,18.232c-4.171-4.171-4.171-10.933,0-15.104s10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083
                              L39.696,487.544C37.695,489.551,34.978,490.68,32.144,490.68z" />
                </svg>
            </div>
            <div class="swiper-button-prev">
                <svg x="0px" y="0px" viewBox="0 0 490.787 490.787">
                    <path style="fill:#009688;"
                        d="M47.087,245.454L274.223,18.339c4.237-4.093,4.355-10.845,0.262-15.083
                                c-4.093-4.237-10.845-4.355-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262L24.474,237.923c-4.164,4.165-4.164,10.917,0,15.083
                                L259.14,487.672c4.237,4.093,10.99,3.975,15.083-0.262c3.993-4.134,3.993-10.687,0-14.821L47.087,245.454z" />
                    <path style="fill:#009688;"
                        d="M466.223,3.235c-4.165-4.164-10.917-4.164-15.083,0L216.474,237.902
                                c-4.164,4.165-4.164,10.917,0,15.083L451.14,487.651c4.237,4.093,10.99,3.976,15.083-0.261c3.993-4.134,3.993-10.688,0-14.821
                                L239.087,245.454L466.223,18.339c4.171-4.16,4.179-10.914,0.019-15.085C466.236,3.248,466.229,3.241,466.223,3.235z" />
                    <path
                        d="M266.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L24.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L259.119,3.256
                                c4.093-4.237,10.845-4.355,15.083-0.262c4.237,4.093,4.355,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262
                                L47.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C272.236,489.664,269.511,490.792,266.671,490.787z" />
                    <path
                        d="M458.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L216.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L451.119,3.256
                                c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262
                                L239.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C464.236,489.664,461.511,490.792,458.671,490.787z" />
                </svg>
            </div>
        </div>
    </section>
    <section id="advantages">
        <div class="adv_layout_image">
            <?php if ($advantages['background_image']) : ?>
            <img src="<?= $advantages['background_image']['url'] ?>"
                alt="<?= $advantages['background_image']['filename'] ?>">
            <?php endif; ?>
        </div>

        <div class="advantages_texts animate__animated animate__fadeInDown" data-wow-offset="0">
            <p><?= $advantages['subheadline'] ?? ''?></p>
            <h2><?= $advantages['headline'] ?? ''?></h2>
        </div>

        <?php if ($advantages['Advantage']) : ?>
        <div class="adv_items">

            <?php foreach ($advantages['Advantage'] as $advantage) : ?>
            <div class="avd_item animate__animated animate__fadeInBottomRight" data-wow-offset="0">
                <?php if ($advantage['image']) : ?>
                <img src="<?= $advantage['image']['url']?>" alt="<?= $advantage['image']['filename'] ?>">
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
        <div class="ordering-headline animate__animated animate__fadeInLeftBig" data-wow-offset="0">
            <h2><?= $ordering['headline'] ?? '' ?></h2>
            <a href="javascript:;" class="btn" data-fancybox data-animation-duration="700" data-src="#callback">Оформить
                заявку</a>
        </div>

        <?php if ($ordering['description_of_ordering_procedure']) : ?>
        <div class="ordering-procedure animate__animated animate__fadeInTopRight" data-wow-offset="0">

            <?php foreach ($ordering['description_of_ordering_procedure'] as $order) : ?>
            <div class="order-item">

                <?php if ($order['image']) : ?>
                <img src="<?= $order['image']['url'] ?>" alt="<?= $order['image']['filename'] ?>">
                <?php endif; ?>
                <p><?= $order['headline'] ?></p>
                <p><?= $order['description'] ?></p>
            </div>

            <?php endforeach; ?>
        </div>
        <?php endif; ?>
    </section>
    <section class="promo-block">

        <?php if ($promo['block']) : ?>
        <?php foreach ($promo['block'] as $block) : ?>
        <div class="promo-item" id="<?=$block['anchor']?>"
            style="background-image: url(<?= $block['background_image']['url']?>)">
            <div class="container">
                <div class="
            <?= $block['display_position'] ? 'promo-block-wrapper__' . $block['display_position'] : '' ?>">
                    <div class="promo-block-left  animate__animated animate__fadeIn animate__slow animate__delay-1s"
                        data-wow-offset="0">
                        <div class="promo-block-left-content">
                            <h2><?= $block['headline'] ?? '' ?></h2>
                        </div>
                        <?php if ($block['images']) : ?>
                        <?php foreach ($block['images'] as $image) : ?>
                        <div class="promo-block-left-content">
                            <img src="<?= $image['sizes']['medium'] ?>" alt="<?= $image['filename'] ?>">
                        </div>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                    <div class="promo-block-right">
                        <div class="promo-block-description">
                            <?= $block['description'] ?? '' ?>
                            <a href="javascript:;" class="btn" data-fancybox data-animation-duration="700"
                                data-src="#callback">Заказать</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <?php endforeach;?>
        <?php endif;?>
    </section>
    <section id="сertificate_slider">
        <div class="container">
            <h2>Наши сертификаты</h2>
            <div class="swiper-container сertificate_slider">
                <div class="swiper-wrapper">
                    <?php if ($сertificate_slider['slider']) : ?>
                    <?php foreach ($сertificate_slider['slider'] as $slide) : ?>
                    <div class="swiper-slide">
                        <a href="<?= $slide['url'] ?>" data-fancybox data-caption="<?= $slide['description']?>">
                            <img class="image-сertificate_slider" src="<?= $slide['url'] ?>" alt="">
                        </a>
                    </div>
                    <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="pagination-сertificate">
                <div class="swiper-button-prev-сertificate">
                    <svg x="0px" y="0px" viewBox="0 0 490.787 490.787">
                        <path style="fill:#009688;"
                            d="M47.087,245.454L274.223,18.339c4.237-4.093,4.355-10.845,0.262-15.083
                                c-4.093-4.237-10.845-4.355-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262L24.474,237.923c-4.164,4.165-4.164,10.917,0,15.083
                                L259.14,487.672c4.237,4.093,10.99,3.975,15.083-0.262c3.993-4.134,3.993-10.687,0-14.821L47.087,245.454z" />
                        <path style="fill:#009688;"
                            d="M466.223,3.235c-4.165-4.164-10.917-4.164-15.083,0L216.474,237.902
                                c-4.164,4.165-4.164,10.917,0,15.083L451.14,487.651c4.237,4.093,10.99,3.976,15.083-0.261c3.993-4.134,3.993-10.688,0-14.821
                                L239.087,245.454L466.223,18.339c4.171-4.16,4.179-10.914,0.019-15.085C466.236,3.248,466.229,3.241,466.223,3.235z" />
                        <path
                            d="M266.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L24.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L259.119,3.256
                                c4.093-4.237,10.845-4.355,15.083-0.262c4.237,4.093,4.355,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262
                                L47.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C272.236,489.664,269.511,490.792,266.671,490.787z" />
                        <path
                            d="M458.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L216.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L451.119,3.256
                                c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262
                                L239.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C464.236,489.664,461.511,490.792,458.671,490.787z" />
                    </svg>
                </div>
                <div class="swiper-button-next-сertificate">
                    <svg x="0px" y="0px" viewBox="0 0 490.8 490.8">
                        <path style="fill:#009688;"
                            d="M231.696,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
                              l227.115,227.136L216.592,472.461c-4.237,4.093-4.355,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
                              c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L231.696,3.128z" />
                        <path style="fill:#009688;" d="M274.363,237.795L39.696,3.128c-4.237-4.093-10.99-3.975-15.083,0.262
                              c-3.992,4.134-3.992,10.687,0,14.821l227.115,227.136L24.592,472.461c-4.237,4.093-4.354,10.845-0.262,15.083
                              c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667
                              C278.511,248.718,278.521,241.966,274.363,237.795z" />
                        <path
                            d="M224.144,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115
                              L216.592,18.232c-4.093-4.237-3.975-10.99,0.262-15.083c4.134-3.992,10.687-3.992,14.82,0l234.667,234.667
                              c4.164,4.165,4.164,10.917,0,15.083L231.675,487.565C229.676,489.56,226.968,490.68,224.144,490.68z" />
                        <path d="M32.144,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115
                              L24.592,18.232c-4.171-4.171-4.171-10.933,0-15.104s10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083
                              L39.696,487.544C37.695,489.551,34.978,490.68,32.144,490.68z" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
    <section id="quiz-form">
        <div class="container">
            <h2>Продите тест за 1 минуту<br> и начём сотрудничесво с Вами</h2>
            <div id="quiz">
                <div class="steps">
                    <div class="step-one active" datastep="1">
                        <h3>Какую систему вы выбрали?</h3>
                        <div class="variables">
                            <div class="variable" data-value="SLIMLINE">SLIMLINE</div>
                            <div class="variable" data-value="EASY">EASY</div>
                            <div class="variable" data-value="FLAT MASK">FLAT MASK</div>
                        </div>
                    </div>
                    <div class="step-two" datastep="2">
                        <h3>Готов ли проект освещения?</h3>
                        <div class="variables">
                            <div class="variable" data-value="Да">Да</div>
                            <div class="variable" data-value="Нет">Нет</div>
                        </div>
                    </div>
                    <div class="step-three" datastep="3">
                        <h3>Вы являетесь?</h3>
                        <div class="variables">
                            <div class="variable" data-value="подрядчик">Я подрядчик</div>
                            <div class="variable" data-value="клиент">Я клиент</div>
                            <div class="variable" data-value="дизайнер">Я дизайнер</div>
                            <div class="variable" data-value="дистрибьютор">Я дистрибьютор</div>
                        </div>
                    </div>
                    <div class="step-four" datastep="4">
                        <h3>Нам связаться с Вами через?</h3>
                        <div class="variables">
                            <div class="variable" data-value="Telegram">Telegram</div>
                            <div class="variable" data-value="WhatsApp">WhatsApp</div>
                            <div class="variable" data-value="Звонок">Звонок</div>
                        </div>
                    </div>
                    <div class="step-five" datastep="5">
                        <h3>Оставьте ваши данные и мы свяжемся с Вами!</h3>
                        <div class="last-step-form">
                            <div class="fields">
                                <div class="form-field">
                                    <label for="f-Name">Введите Ваше имя</label>
                                    <input class="form-control" type="text" name="f-Name">
                                </div>
                                <div class="form-field">
                                    <label for="f-Phone">Введите Ваш телефон</label>
                                    <input class="form-control" type="tel" name="f-Phone">
                                </div>
                            </div>
                            <button>Отправить</button>

                            <div class="hidden-form">
                                <?= do_shortcode('[contact-form-7 id="5" title="Квиз"]')?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="our-works">
        <div class="container">
            <h2><?= $our_works['title'];?></h2>
            <div class="works-gallery">
                <?
                    $gallery = $our_works['works_gallery'];
                    foreach($gallery as $item):
                ?>
                <div class="gallery-item">
                    <a href="<?= $item['url'];?>" data-fancybox data-caption="<?= $item['description']?>">
                        <img src="<?= $item['url'];?>" alt="works">
                    </a>
                </div>
                <? endforeach; ?>
            </div>
        </div>
    </section>
    <section id="last-form">
        <div class="container">
            <h2>Остались дополнительные вопросы?<br> Задайте нам и мы Вам перезвоним!</h2>
            <form>
                <div class="row">
                    <div class="form-field">
                        <label for="f-Name">Введите Ваше имя</label>
                        <input class="form-control" type="text" name="f-Name">
                    </div>
                    <div class="form-field">
                        <label for="f-Name">Введите Ваш email</label>
                        <input class="form-control" type="email" name="f-Name">
                    </div>
                    <div class="form-field">
                        <label for="f-Name">Введите Ваше телефон</label>
                        <input class="form-control" type="tel" name="f-Name">
                    </div>
                </div>
                <div class="row-textarea">
                    <div class="form-field">
                        <label for="f-Name">Ваш вопрос</label>
                        <textarea class="form-control" type="text" name="f-Name"></textarea>
                    </div>
                </div>
                <button>Отправить</button>
            </form>
        </div>
    </section>
    <div id="contacts">
        <div class="contacts-info">
            <? foreach($footer as $info): ?>
            <? $type = $info['type'];
                    switch ($type) {
                        case 'string': ?>
            <div class="contacts-info__item">
                <img src="<?=$info['icon']['url']?>" alt="">
                <div><?=$info['link']?></div>
            </div>
            <? break;
                        case 'email':?>
            <a class="contacts-info__item" href="mailto:<?=$info['link']?>">
                <img src="<?=$info['icon']['url']?>" alt="">
                <div><?=$info['link']?></div>
            </a>
            <?break;
                        case 'tel': ?>
            <a class="contacts-info__item" href="tel:<?=$info['link']?>">
                <img src="<?=$info['icon']['url']?>" alt="">
                <div><?=$info['link']?></div>
            </a>
            <?break;
                        default: ?>
            <div class="contacts-info__item">
                <img src="<?=$info['icon']['url']?>" alt="">
                <div><?=$info['link']?></div>
            </div>
            <?break;
                    }
                    ?>
            <? endforeach; ?>
        </div>
        <div class="map">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab9f1121662192984f69e0c2646e8c1bfed76f35d530a97375b27f728cd3cdaf5&amp;source=constructor"
                width="100%" height="500" frameborder="0"></iframe>
        </div>

    </div>
    <div class="to-top">
        <svg width="50" height="50" x="0" y="0" viewBox="0 0 490.544 490.544" style="enable-background:new 0 0 512 512">
            <rect width="490.544" height="490.544" rx="50" ry="50" fill="#18191a" shape="rounded"
                transform="matrix(0.84,0,0,0.84,39.24352050781252,39.24352050781252)" />
            <g transform="matrix(0.7,0,0,0.7,73.58156640529643,73.58160552978526)">
                <path
                    d="M18.098,274.151L245.213,47.015l227.115,227.136c4.237,4.093,10.99,3.975,15.083-0.262   c3.993-4.134,3.993-10.687,0-14.821L252.744,24.401c-4.165-4.164-10.917-4.164-15.083,0L2.994,259.068   c-4.093,4.237-3.975,10.99,0.262,15.083c4.134,3.992,10.687,3.992,14.82,0H18.098z"
                    fill="#efefed" data-original="#607d8b" />
                <path
                    d="M252.765,216.38c-4.165-4.164-10.917-4.164-15.083,0L3.016,451.047   c-4.093,4.237-3.976,10.99,0.262,15.083c4.134,3.993,10.687,3.993,14.821,0l227.115-227.115l227.115,227.136   c4.237,4.093,10.99,3.976,15.083-0.261c3.993-4.134,3.993-10.688,0-14.821L252.765,216.38z"
                    fill="#efefed" data-original="#607d8b" />
                <path
                    d="M479.88,277.266c-2.831,0.005-5.548-1.115-7.552-3.115L245.213,47.015L18.098,274.151  c-4.237,4.093-10.99,3.975-15.083-0.262c-3.992-4.134-3.992-10.687,0-14.82L237.682,24.401c4.165-4.164,10.917-4.164,15.083,0  l234.667,234.667c4.159,4.172,4.148,10.926-0.024,15.085C485.409,276.146,482.702,277.265,479.88,277.266z"
                    fill="#efefed" data-original="#000000" />
                <path
                    d="M479.88,469.266c-2.831,0.005-5.548-1.115-7.552-3.115L245.213,239.015L18.098,466.151  c-4.237,4.093-10.99,3.976-15.083-0.262c-3.993-4.134-3.993-10.687,0-14.821l234.667-234.667c4.165-4.164,10.917-4.164,15.083,0  l234.667,234.667c4.159,4.172,4.148,10.926-0.024,15.085C485.409,468.146,482.702,469.265,479.88,469.266z"
                    fill="#efefed" data-original="#000000" />
        </svg>
    </div>

    <div style="display: none;" id="callback" class="animated-modal">
        <form>
            <div class="form-field">
                <label for="f-Name">Введите Ваше имя</label>
                <input class="form-control" type="text" name="f-Name">
            </div>
            <div class="form-field">
                <label for="f-Name">Введите Ваш email</label>
                <input class="form-control" type="email" name="f-Name">
            </div>
            <div class="form-field">
                <label for="f-Name">Введите Ваш телефон</label>
                <input class="form-control" type="tel" name="f-Name">
            </div>

            <button>Отпрвить</button>
        </form>
    </div>
    <div class="loader">
        <div class="">
            <?php
            $custom_logo_id = get_theme_mod('custom_logo');
            $logo = wp_get_attachment_image_src($custom_logo_id, 'full');

            if (has_custom_logo()) {
            echo '<img src="' . esc_url($logo[0]) . '" alt="' . get_bloginfo('name') . '">';
            }
            ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>