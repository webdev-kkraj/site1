<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! function_exists( 'neve_child_load_css' ) ):
	/**
	 * Load CSS file.
	 */
	function neve_child_load_css() {
		wp_enqueue_style( 'neve-child-style', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'neve-style' ), NEVE_VERSION );
	}
endif;
add_action( 'wp_enqueue_scripts', 'neve_child_load_css', 20 );

function enqueue_bootstrap() {
	wp_enqueue_script('jquery');
	wp_enqueue_style('google-fonts-lato', 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap', false);
    wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', array(), '5.3.3', 'all');
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.3.0', true);
	wp_enqueue_style('google-fonts-open-sans', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap', false);
	wp_enqueue_style('nunito-font', 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap', false);
	wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', array(), '4.7.0');
		
	wp_enqueue_style('owl-carousel', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');
    wp_enqueue_style('owl-theme-default', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css');
    wp_enqueue_script('owl-carousel-js', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', array('jquery'), '2.3.4', true);
	wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/assets/custom.js', array('jquery', 'owl-carousel-js'), '1.0.0', true);

	
}
add_action('wp_enqueue_scripts', 'enqueue_bootstrap');


function case_studies() {
 
// Set UI labels for Custom Post Type
    $labels = array(
        'name'                => _x( 'Case Studies', 'Post Type General Name', 'neve' ),
        'singular_name'       => _x( 'Case Study', 'Post Type Singular Name', 'neve' ),
        'menu_name'           => __( 'Case Studies', 'neve' ),
        'parent_item_colon'   => __( 'Parent Case Study', 'neve' ),
        'all_items'           => __( 'All Case Study', 'neve' ),
        'view_item'           => __( 'View Case Study', 'neve' ),
        'add_new_item'        => __( 'Add New Case Study', 'neve' ),
        'add_new'             => __( 'Add New', 'neve' ),
        'edit_item'           => __( 'Edit Case Study', 'neve' ),
        'update_item'         => __( 'Update Case Study', 'neve' ),
        'search_items'        => __( 'Search Case Study', 'neve' ),
        'not_found'           => __( 'Not Found', 'neve' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'neve' ),
    );
	 
// Set other options for Custom Post Type
     
    $args = array(
        'label'               => __( 'Case Studies', 'neve' ),
        'description'         => __( 'Case Studies', 'neve' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'category', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        //'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
		'show_in_rest' => true,
		'rewrite'             => true,
 
    );
     
    // Registering your Custom Post Type  
    register_post_type( 'case_studies', $args ); 
 
}

add_action( 'init', 'case_studies', 0 );


function casestudy_taxonomy() {
    // Labels for the taxonomy
    $labels = array(
        'name'              => _x( 'Category Casestudy', 'taxonomy general name', 'neve' ),
        'singular_name'     => _x( 'Category Casestudy', 'taxonomy singular name', 'neve' ),
        'search_items'      => __( 'Search Category Casestudy', 'neve' ),
        'all_items'         => __( 'All Category Casestudy', 'neve' ),
        'parent_item'       => __( 'Parent Category Casestudy', 'neve' ),
        'parent_item_colon' => __( 'Parent Category Casestudy:', 'neve' ),
        'edit_item'         => __( 'Edit Category Casestudy', 'neve' ),
        'update_item'       => __( 'Update Category Casestudy', 'neve' ),
        'add_new_item'      => __( 'Add New Category Casestudy', 'neve' ),
        'new_item_name'     => __( 'New Category Name', 'neve' ),
        'menu_name'         => __( 'Case study category', 'neve' ),
    );

    // Arguments for the taxonomy
    $args = array(
        'labels'            => $labels,
        'hierarchical'      => true, // Set to false for a non-hierarchical taxonomy (like tags)
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud'     => true,
        'show_in_rest'      => true, // Enables the taxonomy in the block editor (Gutenberg)
    );

    // Register the taxonomy
    register_taxonomy( 'category_industry', array( 'case_studies' ), $args );
}
add_action( 'init', 'casestudy_taxonomy' );

function custom_excerpt($content, $limit = 20) {
    if (strlen($content) > $limit) {
        return substr($content, 0, $limit) . '...';
    }
    return $content;
}
