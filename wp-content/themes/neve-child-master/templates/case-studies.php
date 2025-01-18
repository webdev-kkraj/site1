<?php
/**
 * Template Name: Case study Page
 */
get_header();
?>
<section class="case-page section h-30vh">
    <div class="container">
        <div class="row">
            <div>
                <h1 class="fw-bold text-white mb-2 fnt-40">Case Studies</h1>
                <div class="breadcrumbs text-white">
                    <a class="text-white fw-normal me-1 d-inline" href="#">Home</a>/
                    <a class="text-white fw-normal mr-1 d-inline" href="#">Case Studies</a>
                </div>
            </div> 
        </div>
    </div>   
</section>

<section class="listing-cases bg-color-F5F5F5 pb-5">
    <div class="container">
        <div class="row">
                <div class="filtercase my-5 pt-5">
                    <?php 
                    $terms = get_terms( array(
                        'taxonomy' => 'category_industry',
                        'hide_empty' => false, 
                    ) );
                    if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) :
                    ?>
                    <ul>
                        <li class="flt-active">All</li>
                        <?php 
                        foreach ( $terms as $term ) :
                        ?>
                        <li data-filter="<?php echo esc_html( $term->slug ); ?>" data-filtername="<?php echo esc_html( $term->name ); ?>">
                            <?php echo esc_html( $term->name ); ?>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                    <?php endif; ?>
                </div>
                <div class="group-cases mb-5">
                    <?php 
                    $args = array( 'post_type' => 'case_studies','posts_per_page' => '-1' ,'order' => 'asc' );
	                $loop = new WP_Query( $args );
                    while ( $loop->have_posts() ) : $loop->the_post();
                    if (has_post_thumbnail( $post->ID )) 
                    { 
	                    $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' ); 
	                } 
                    $filter_terms = '';
                    $cterms = get_the_terms( $post->ID, 'category_industry');
                    foreach ( $cterms as $trm ) {
                        $filter_terms .= esc_html( $trm->slug )." ";
                    }
                    ?>
                    <a href="<?php echo get_permalink(); ?>">
                    <div class="caseitem bg-white all <?php echo $filter_terms; ?>">
                        <img src="<?php echo $image[0]; ?>" />
                        <div class="grouptext text-center px-2 py-3">
                            <h4 class="mb-2 fnt-lato">Twice profit than before</h4>
                            <div>Sales, SEO, Visitor</div>
                        </div>
                    </div>
                    </a>
                    <?php endwhile; wp_reset_query(); ?>
                </div>
        </div>
    </div>
</section>
<?php
get_footer();
?>
