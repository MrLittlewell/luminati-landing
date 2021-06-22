<!doctype html>
<html lang="ru">

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="facebook-domain-verification" content="euetm5pg293h6sxyr6y0w97kq3w75r" />
    <title><?php wp_title('«', true, 'right'); ?> <?php bloginfo('name'); ?></title>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <?php wp_head(); ?>
    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '917325899045649');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=917325899045649&ev=PageView&noscript=1"
    /></noscript>
<!-- End Facebook Pixel Code -->
</head>

<?php
$header = get_field('header', 'option');
?>

<body>
    <header id="header">
        <div class="container">
            <div class="header-content">
                <div class="logo-wrapper">
                    <a href="/">
                        <?php
                      $custom_logo_id = get_theme_mod('custom_logo');
                      $logo = wp_get_attachment_image_src($custom_logo_id, 'full');

                      if (has_custom_logo()) {
                        echo '<img src="' . esc_url($logo[0]) . '" alt="' . get_bloginfo('name') . '">';
                      }
                      ?>
                    </a>
                </div>
                <div class="">
                    <div class="header-infos">
                        <? foreach($header as $info): ?>
                        <? $type = $info['type'];
                    switch ($type) {
                        case 'string': ?>
                        <div class="contacts-info__item" tooltip="<?=$info['link']?>">
                            <img src="<?=$info['icon']['url']?>" alt="icon">
                        </div>
                        <? break;
                        case 'email':?>
                        <a class="contacts-info__item" href="mailto:<?=$info['link']?>" tooltip="<?=$info['link']?>">
                            <img src="<?=$info['icon']['url']?>" alt="icon">
                        </a>
                        <?break;
                        case 'tel': ?>
                        <a class="contacts-info__item" href="tel:<?=$info['link']?>" tooltip="<?=$info['link']?>">
                            <img src="<?=$info['icon']['url']?>" alt="icon">
                        </a>
                        <?break;
                        default: ?>
                        <div class="contacts-info__item" tooltip="<?=$info['link']?>">
                            <img src="<?=$info['icon']['url']?>" alt="icon">
                        </div>
                        <?break;
                    }
                    ?>
                        <? endforeach; ?>
                    </div>

                    <a href="javascript:;" class="btn" data-fancybox data-animation-duration="700"
                        data-src="#callback">Перезвоните мне
                    </a>
                </div>
                <div class="flyout-trigger">
                    <span class="flyout-trigger__bar"></span>
                    <span class="flyout-trigger__bar"></span>
                    <span class="flyout-trigger__bar"></span>
                </div>
            </div>
        </div>
        </div>
    </header>

    <div class="side-menu">
        <ul>
            <li><a class="active" href="#">Главная</a></li>
            <li><a href="#advantages">Преимущества</a></li>
            <li><a href="#slimline">Наша продукция</a></li>
            <li><a href="#сertificate_slider">Светильники</a></li>
            <li><a href="#our-works">Примеры работ</a></li>
            <li><a href="#ordering">Как мы работаем</a></li>
            <li><a href="#contacts">Контакты</a></li>
        </ul>
    </div>