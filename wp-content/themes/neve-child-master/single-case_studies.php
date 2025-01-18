<?php
get_header();
?>
<section class="case-page section h-30vh">
    <div class="container">
        <div class="row">
            <div>
                <h1 class="fw-bold text-white mb-2 fnt-40"><?php the_title(); ?></h1>
                <div class="breadcrumbs text-white">
                    <a class="text-white fw-normal me-1 d-inline" href="#">Home</a>/
                    <a class="text-white fw-normal mr-1 d-inline" href="#">Case Studies</a>/
                    <a class="text-white fw-normal mr-1 d-inline" href="#"><?php echo custom_excerpt(get_the_title(),13); ?></a>
                </div>
            </div> 
        </div>
    </div>   
</section>
<section class="single-case-page section">
    <div class="container mt-5 pt-5">
        <div class="row">
            <div class="col-6 project-fulldesc-left">
                <h1 class="">Info</h1>
                <div>
                    <div class="mb-2"><span class="fw-bold m-wid-110">Category :</span>
                    <span class="d-inline ms-2"><?php echo get_field('category_info',get_the_ID()); ?></span></div>
                    <div class="mb-2"><span class="fw-bold m-wid-110">Date :</span>
                    <span class="d-inline ms-2"><?php echo get_field('date_info',get_the_ID()); ?></span></div>
                    <div class="mb-2"><span class="fw-bold m-wid-110">Client :</span>
                    <span class="d-inline ms-2"><?php echo get_field('client_info',get_the_ID()); ?></span></div>
                </div>
            </div>
             <div class="col-6 project-fulldesc-right">
                <img alt="Project Image" src="<?php echo get_field('image_info',get_the_ID()); ?>" />
            </div>
        </div>
        <div class="row mt-5 detailcontent mb-5 pb-5">
            <h2>Project Brief:</h2>
            <?php echo get_field('content_brief_info',get_the_ID()); ?>
        </div>
    </div>
</section>
<style>
.detailcontent ul
{
    display: flex;
    flex-wrap: wrap;
}    
.detailcontent ul li
{
    padding-left: 7px;
    width: 30%;
}
.detailcontent ul li:before
{
    content: "\f00c";
    font-family: "FontAwesome";
    font-weight: 600;
    position: relative;
    right: 7px;
    color: #4054B2;
}
</style>
<?php
get_footer();
?>