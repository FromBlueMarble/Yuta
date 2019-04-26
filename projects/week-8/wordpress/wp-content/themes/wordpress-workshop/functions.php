<?php
function my_init()
{
    add_theme_support('post-thumbnails');
    if (!is_admin()) {
        wp_register_style('main-css', get_template_directory_uri() . '/css/modern-business.css');
        wp_register_style('bootstrap', get_template_directory_uri() . '/vendor/bootstrap/css/bootstrap.min.css');
        wp_register_script('jquery', get_template_directory_uri() . '/vendor/jquery/jquery.min.js', false, '3.3.1', true);
        wp_register_script('bootstrap-js', get_template_directory_uri() . '/vendor/bootstrap/js/bootstrap.bundle.min.js', false, '4.2.1', true);
        wp_register_script('frontend-js', get_template_directory_uri() . '/js/frontend.js', false, '1.0.0', true);
        wp_enqueue_style('bootstrap');
        wp_enqueue_style('main-css');
        wp_enqueue_script('jquery');
        wp_enqueue_script('bootstrap-js');
        wp_enqueue_script('frontend-js');
    }
}
add_action('wp_enqueue_scripts', 'my_init');