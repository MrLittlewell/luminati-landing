<?php
function luminotti_scripts_styles()
{
  wp_register_style('swiper_css', get_template_directory_uri() . '/assets/css/swiper.css', array(), '1.0', 'screen');
  wp_register_style('animate', get_template_directory_uri() . '/assets/css/animate.css', array(), '1.0', 'screen');
  wp_register_style('fancybox_style', get_template_directory_uri() . '/assets/css/jquery.fancybox.min.css', array(), '1.2', 'screen');
  wp_register_style('my_style', get_template_directory_uri() . '/assets/css/main.css', array(), '1.2', 'screen');
  wp_register_style('promo-block', get_template_directory_uri() . '/assets/css/promo-block.css', array(), '1.2', 'screen');

  wp_enqueue_style('swiper_css');
  wp_enqueue_style('animate');
  wp_enqueue_style('fancybox_style');
  wp_enqueue_style('my_style');
  wp_enqueue_style('promo-block');

  wp_enqueue_script('jquery_js', get_template_directory_uri() . '/assets/js/jquery.js', array(), '1.0', true);
  wp_enqueue_script('fancybox_js', get_template_directory_uri() . '/assets/js/jquery.fancybox.min.js', array(), '1.0', true);
  wp_enqueue_script('mask', get_template_directory_uri() . '/assets/js/jquery.mask.js', array(), '1.0', true);
  wp_enqueue_script('masonry', get_template_directory_uri() . '/assets/js/masonry.js', array(), '1.0', true);
  wp_enqueue_script('plugins', get_template_directory_uri() . '/assets/js/plugins.js', array(), '1.0', true);
  wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true);
  wp_localize_script('main', 'ajax', [
    'ajaxurl' => admin_url('admin-ajax.php'),
  ]);
}
add_action('wp_enqueue_scripts', 'luminotti_scripts_styles', 1);

if (function_exists('add_theme_support')) {
    add_theme_support('menus');
  }
  
  add_action('after_setup_theme', function () {
  
  
    register_nav_menus([
      'main_menu' => 'Меню',
    ]);
  
    add_theme_support(
      'custom-logo',
      array(
        'height'      => 500,
        'width'       => 500,
        'flex-height' => true,
      )
    );
  });

if (function_exists('acf_add_options_page')) {

  acf_add_options_page(array(
    'page_title'   => 'Theme General Settings',
    'menu_title'  => 'Глобальные настройки',
    'menu_slug'   => 'theme-general-settings',
    'capability'  => 'edit_posts',
    'redirect'    => false
  ));
}

add_filter('show_admin_bar', '__return_false');