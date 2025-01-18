<?php
/**
 * Template Name: Home Page
 */
get_header();
?>

<section class="herosection section" style="background-image:url('<?php echo site_url(); ?>/wp-content/uploads/2025/01/Hero-Bg.png')">
    <div class="container">
        <div class="row">
            <div class="col-5-5 col-12">
            <div class="w-100 blue-text mb-3 fw-bold fnt-20"><?php echo get_field('title_small_herosecn'); ?></div>
            <h1 class="w-100 site_color_black_500 fnt-64 mb-3"><?php echo get_field('title_big_herosecn'); ?></h1>
            <div class="w-100 site_color_black_500"><?php echo get_field('content_herosecn'); ?></div>
<div class="text-center text-md-start">
<button type="button" class="btn btn-primary site-button">Get Started</button>
</div>
</div>
<div class="col-12 col-md">
    <img class="" src="<?php echo get_field('hero_image'); ?>"/>
</div>
        </div>
    </div>
</section>

<section class="contentmarket section py-3">
    <div class="container">
        <div class="row">
            <h2 class="fnt-40 fnt-lato fw-bold text-center mb-5 pb-5">Customers Win at Content Marketing <br>with <span class="colorblue">SEO Platform</span></h2>
            <div class="three-layers mt-3">
                <div class="row csm-max-wd">
                    <div class="col-md-4 col-12 text-center bx-shadow">
                        <img class="mb-3" src="<?php echo site_url(); ?>/wp-content/uploads/2025/01/Link-Building-Icon.png" />
                        <h4 class="mb-3 fnt-color-00173E">Link Building</h4>
                        <p>Behind the word mountains, far
from the countries Vokalia and
Consonantia, there</p>
                    </div>
                    <div class="col-md-4 col-12 text-center bx-shadow">
                         <img class="mb-3" src="<?php echo site_url(); ?>/wp-content/uploads/2025/01/Monthly-SEO-Task-Icon.png" />
                        <h4 class="mb-3 fnt-color-00173E">Monthly SEO Task</h4>
                        <p>Far far away, behind the word
mountains, far from the countries
Vokalia and Consonantia there</p>
                    </div>
                    <div class="col-md-4 col-12 text-center bx-shadow">
                         <img class="mb-3" src="<?php echo site_url(); ?>/wp-content/uploads/2025/01/On-Page-SEO-Icon.png" />
                        <h4 class="mb-3 fnt-color-00173E">On Page SEO</h4>
                        <p>Far far away, behind the word
mountains, far from the countries
Vokalia and Consonantia.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="increase-client section py-3">
    <div class="container">
        <div class="row">
            <h2 class="fnt-40 fnt-lato fw-bold text-center mb-5 pb-5">Increase your client for<br>
<span class="colorblue">better</span> position of Business</h2>

            <div class="client-twosection">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <img src="http://localhost/site1/wp-content/uploads/2025/01/Service-Image-1.png" />
                    </div>
                    <div class="col-md-6 col-12">
                        <p>Separated they live in Bookmarksgrove right at the coast of the
Semantics, a large language ocean.</p>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<ul>
    <?php $vctr="/wp-content/uploads/2025/01/Vector-1.png" ?>
    <li><img src="<?php echo site_url().$vctr; ?>" />Separated they live</li>
    <li><img src="<?php echo site_url().$vctr; ?>" />The coast of the</li>
    <li><img src="<?php echo site_url().$vctr; ?>" />Grove right at</li>
    <li><img src="<?php echo site_url().$vctr; ?>" />Semantics, a large</li>
</ul> 
<div class="text-md-start text-center">    
<button type="button" class="btn btn-primary site-button mt-5 ">Get Started</button>   
</div>           
</div>
                </div>
            </div>
        </div>
</div>
</section>

<section class="our-case-studies section bg-color-F5F5F5 py-3">
    <div class="container">
        <div class="row">
            <div class="smallblue-txt text-center colorblue fw-bolder pt-5 mt-3">Previous Projects</div>
            <h2 class="fnt-40 fnt-lato fw-bold text-center mb-5 pb-5">Our Case Studies</h2>
            <div class="case-carousel mb-5">
                <div class="casestudy-carousel owl-carousel owl-theme">
    <div class="item bg-white">
        <div>
            <img src="http://localhost/site1/wp-content/uploads/2025/01/Case-Study-1.png" />
            <div class="grouptext text-center px-2 py-3">
                <h4 class="mb-2">Twice profit than before</h4>
                <div>Sales, SEO, Visitor</div>
            </div>
        </div>
    </div>
    <div class="item bg-white"><div>
            <img src="http://localhost/site1/wp-content/uploads/2025/01/Case-Study-1.png" />
            <div class="grouptext text-center px-2 py-3">
                <h4 class="mb-2">Twice profit than before</h4>
                <div>Sales, SEO, Visitor</div>
            </div>
        </div></div>
    <div class="item bg-white"><div>
            <img src="http://localhost/site1/wp-content/uploads/2025/01/Case-Study-1.png" />
            <div class="grouptext text-center px-2 py-3">
                <h4 class="mb-2">Twice profit than before</h4>
                <div>Sales, SEO, Visitor</div>
            </div>
        </div></div>
    <div class="item bg-white">
        <div>
            <img src="http://localhost/site1/wp-content/uploads/2025/01/Case-Study-1.png" />
            <div class="grouptext text-center px-2 py-3">
                <h4 class="mb-2">Twice profit than before</h4>
                <div>Sales, SEO, Visitor</div>
            </div>
        </div>
    </div>
</div>
            </div>
</div>
</div>
</section>


<section class="our-clients-says section pt-3 pb-5 h-70vh">
    <div class="container">
        <div class="row">
            <div class="smallblue-txt text-center colorblue fw-bolder pt-2">Client’s love</div>
            <h2 class="fnt-40 fnt-lato fw-bold text-center mb-5 pb-5">Love from Clients</h2>
            <div class="case-carousel">
                <div class="casestudy-carousel owl-carousel owl-theme">
    <div class="item bg-white">
        <div>
            <div class="grouptext text-center px-2 py-3">
               <p>BrightEdge is a comprehensive solution with the <br>latest AI innovations, empowering Gusto to <br>optimize, measure and communicate impact..</p>
            </div>
        </div>
    </div>
   <div class="item bg-white">
        <div>
            <div class="grouptext text-center px-2 py-3">
               <p>BrightEdge is a comprehensive solution with the <br>latest AI innovations, empowering Gusto to <br>optimize, measure and communicate impact..</p>
            </div>
        </div>
    </div>
    <div class="item bg-white">
        <div>
            <div class="grouptext text-center px-2 py-3">
               <p>BrightEdge is a comprehensive solution with the <br>latest AI innovations, empowering Gusto to <br>optimize, measure and communicate impact..</p>
            </div>
        </div>
    </div>
    <div class="item bg-white">
        <div>
            <div class="grouptext text-center px-2 py-3">
               <p>BrightEdge is a comprehensive solution with the <br>latest AI innovations, empowering Gusto to <br>optimize, measure and communicate impact..</p>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</section>


<section id="contact" class="get-touch section py-3">
    <div class="container">
        <div class="row">
             <h2 class="fnt-40 fnt-lato fw-bold text-center">Get In Touch</h2>
             <p class="text-center col-6 mx-auto">Far far away, behind the word mountains, far from the
countries Vokalia and Consonantia, there live the blind texts.
Separated they live in Bookmarksgrove right</p>
<div class="contactform col-md-7 col-11 mx-auto">
    <?php echo do_shortcode('[contact-form-7 id="df15fdf" title="Contact form"]'); ?>
</div>
        </div>
    </div>
</section>
<?php
get_footer();
?>
