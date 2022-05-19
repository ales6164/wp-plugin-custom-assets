<?php

/*

Plugin Name: Custom Assets

Plugin URI: https://aleskovacic.com/

Description: Add custom assets to your WP installation.

Version: 1.0

Author: Ales Kovacic

Author URI: https://aleskovacic.com/

License: GPLv2 or later

Text Domain: aleskovacic

*/

function main_styles()
{
    wp_enqueue_style('main', plugin_dir_url(__FILE__) . '/styles/main.css');
    wp_enqueue_style('gordita-font', plugin_dir_url(__FILE__) . '/fonts/gordita-cufonfonts-webfont/style.css');
    wp_enqueue_style('bebas-neue-font', plugin_dir_url(__FILE__) . '/fonts/Bebas_Neue/style.css');
    wp_enqueue_script('main', plugin_dir_url(__FILE__) . '/scripts/main.js', array('jquery'));
}

add_action('wp_enqueue_scripts', 'main_styles');

