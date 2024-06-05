<?php
/**
 * Plugin Name:   Animated block
 * Description:   Animated block
 * Version:       1.0.0
 * Author:        me
 * Text Domain:   animated-block
 * Domain Path:   /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
\add_action( 'init', function() {
	\register_block_type( __DIR__ . '/build' );
} );

