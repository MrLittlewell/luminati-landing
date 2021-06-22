<?php
function luminotti_scripts_styles()
{
  wp_register_style('plugins', get_template_directory_uri() . '/assets/css/plugins.min.css', array(), '1.2', 'screen');
  wp_register_style('my_style', get_template_directory_uri() . '/assets/css/main.css', array(), '1.2', 'screen');

  wp_enqueue_style('plugins');
  wp_enqueue_style('my_style');

  wp_enqueue_script('jquery_js', get_template_directory_uri() . '/assets/js/jquery.min.js', array(), '1.0', true);
  wp_enqueue_script('plugins', get_template_directory_uri() . '/assets/js/plugins.min.js', array(), '1.0', true);
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


add_action( 'wpcf7_mail_sent', 'your_wpcf7_mail_sent_function' );
function your_wpcf7_mail_sent_function( $contact_form ) {
 
   define('CRM_HOST', 'nattino.bitrix24.ru'); 
   define('CRM_PORT', '443'); 
   define('CRM_PATH', '/crm/configs/import/lead.php');
 
   define('CRM_LOGIN', 'bitrixcrm@luminotti.ru'); 
   define('CRM_PASSWORD', 'Luminotti2021'); 
 
   $title = $contact_form->title;
   $posted_data = $contact_form->posted_data;
    if ('Форма модальное окно' == $title ) { 
      $submission = WPCF7_Submission::get_instance();
      $posted_data = $submission->get_posted_data();
      
      $firstName = $posted_data['M-userName']; 
      $myemail = $posted_data['M-userEmail'];
      $myphone = $posted_data['M-userPhone'];
  
       $postData = array(
          'TITLE' => 'Форма c сайта - luminotti.ru',
          'SOURCE_ID' => 32,
          'NAME' => $firstName,
          'EMAIL_WORK' => $myemail,
          'PHONE_WORK' => $myphone
       );
 
       if (defined('CRM_AUTH')) {
          $postData['AUTH'] = CRM_AUTH;
       } else {
          $postData['LOGIN'] = CRM_LOGIN;
          $postData['PASSWORD'] = CRM_PASSWORD;
       }
 
       $fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
       if ($fp) {
          $strPostData = '';
          foreach ($postData as $key => $value)
             $strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);
 
          $str = "POST ".CRM_PATH." HTTP/1.0\r\n";
          $str .= "Host: ".CRM_HOST."\r\n";
          $str .= "Content-Type: application/x-www-form-urlencoded\r\n";
          $str .= "Content-Length: ".strlen($strPostData)."\r\n";
          $str .= "Connection: close\r\n\r\n";
 
          $str .= $strPostData;
 
          fwrite($fp, $str);
 
          $result = '';
          while (!feof($fp))
          {
             $result .= fgets($fp, 128);
          }
          fclose($fp);
 
          $response = explode("\r\n\r\n", $result);
 
          $output = '<pre>'.print_r($response[1], 1).'</pre>';
       } else {
          echo 'Connection Failed! '.$errstr.' ('.$errno.')';}
    }

    if ('Квиз' == $title ) { 
      $submission = WPCF7_Submission::get_instance();
      $posted_data = $submission->get_posted_data();
      
      $firstName = $posted_data['q-userName']; 
      $myphone = $posted_data['q-userPhone'];
      $cliendType = $posted_data['q-youAre'];
      $project = $posted_data['q-project'];
      $contactFrom = $posted_data['q-contact'];
  
       $postData = array(
          'TITLE' => 'Квиз c сайта - luminotti.ru '."\n".' Тип клиента: '. $cliendType .''."\n".' Наличие проекта: '. $project .''."\n".'Связаться через: '. $contactFrom .'',
          'SOURCE_ID' => 32,
          'NAME' => $firstName,
          'PHONE_WORK' => $myphone,
          'COMMENTS' => 'Квиз c сайта - luminotti.ru '."\n".' Тип клиента: '. $cliendType .''."\n".' Наличие проекта: '. $project .''."\n".'Связаться через: '. $contactFrom .'',
       );
 
       if (defined('CRM_AUTH')) {
          $postData['AUTH'] = CRM_AUTH;
       } else {
          $postData['LOGIN'] = CRM_LOGIN;
          $postData['PASSWORD'] = CRM_PASSWORD;
       }
 
       $fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
       if ($fp) {
          $strPostData = '';
          foreach ($postData as $key => $value)
             $strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);
 
          $str = "POST ".CRM_PATH." HTTP/1.0\r\n";
          $str .= "Host: ".CRM_HOST."\r\n";
          $str .= "Content-Type: application/x-www-form-urlencoded\r\n";
          $str .= "Content-Length: ".strlen($strPostData)."\r\n";
          $str .= "Connection: close\r\n\r\n";
 
          $str .= $strPostData;
 
          fwrite($fp, $str);
 
          $result = '';
          while (!feof($fp))
          {
             $result .= fgets($fp, 128);
          }
          fclose($fp);
 
          $response = explode("\r\n\r\n", $result);
 
          $output = '<pre>'.print_r($response[1], 1).'</pre>';
       } else {
          echo 'Connection Failed! '.$errstr.' ('.$errno.')';}
    }

    if ('Форма (подвал)' == $title ) { 
      $submission = WPCF7_Submission::get_instance();
      $posted_data = $submission->get_posted_data();
      
      $firstName = $posted_data['F-userName']; 
      $myphone = $posted_data['F-userPhone'];
      $userEmail = $posted_data['F-userEmail'];
      $comment = $posted_data['F-userComment'];
  
       $postData = array(
          'TITLE' => 'Форма (подвал) c сайта - luminotti.ru',
          'SOURCE_ID' => 32,
          'NAME' => $firstName,
          'PHONE_WORK' => $myphone,
          'COMMENTS' => $comment,
       );
 
       if (defined('CRM_AUTH')) {
          $postData['AUTH'] = CRM_AUTH;
       } else {
          $postData['LOGIN'] = CRM_LOGIN;
          $postData['PASSWORD'] = CRM_PASSWORD;
       }
 
       $fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
       if ($fp) {
          $strPostData = '';
          foreach ($postData as $key => $value)
             $strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);
 
          $str = "POST ".CRM_PATH." HTTP/1.0\r\n";
          $str .= "Host: ".CRM_HOST."\r\n";
          $str .= "Content-Type: application/x-www-form-urlencoded\r\n";
          $str .= "Content-Length: ".strlen($strPostData)."\r\n";
          $str .= "Connection: close\r\n\r\n";
 
          $str .= $strPostData;
 
          fwrite($fp, $str);
 
          $result = '';
          while (!feof($fp))
          {
             $result .= fgets($fp, 128);
          }
          fclose($fp);
 
          $response = explode("\r\n\r\n", $result);
 
          $output = '<pre>'.print_r($response[1], 1).'</pre>';
       } else {
          echo 'Connection Failed! '.$errstr.' ('.$errno.')';}
    }
 
}