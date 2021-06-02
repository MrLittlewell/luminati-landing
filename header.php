<!doctype html>
<html>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><?php wp_title('«', true, 'right'); ?> <?php bloginfo('name'); ?></title>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
        rel="stylesheet">
    <?php wp_head(); ?>
</head>


<body>
    <header>
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
                    <div class="">links</div>
                    <div class="">
                        <a href="javascript:;" class="btn" data-fancybox data-animation-duration="700"
                            data-src="#callback">Перезвоните мне
                            <div class="button__horizontal"></div>
                            <div class="button__vertical"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>