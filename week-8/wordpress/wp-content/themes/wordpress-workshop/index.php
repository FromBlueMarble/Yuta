<?php get_header(); ?>

<?php

$slider = new WP_Query(array(
    'post_type' => 'slider',
    'posts_per_page' => -1,
    'post__status' => 'published',
));

?>

<?php while ($slider->have_posts()) : $slider->the_post(); ?>

                <?
                $image = get_field('image');
                ?>

                <div class="carousel-item active" style="background-image: url(<?php echo $image['url']; ?>)">
                    <div class="carousel-caption d-none d-md-block">
                        <h3><?php the_field('title'); ?></h3>
                        <p><?php the_field('description'); ?></p>
                    </div>
                </div>

            <?php endwhile; ?>
            <?php wp_reset_query(); ?>




<header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
        <?php while ($slider->have_posts()) : $slider->the_post(); ?>

                <?php
                $image = get_field('image');
                ?>

                <div class="carousel-item active" style="background-image: url(<?php echo $image['url']; ?>)">
                    <div class="carousel-caption d-none d-md-block">
                        <h3><?php the_field('title'); ?></h3>
                        <p><?php the_field('description'); ?></p>
                    </div>
                </div>

            <?php endwhile; ?>
            <?php wp_reset_query(); ?>


        
</header>

<!-- Page Content -->
<div class="container">

    <h1 class="my-4">Welcome to Modern Business</h1>

    <!-- Marketing Icons Section -->
    <div class="row">
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <h4 class="card-header">Service 1</h4>
                <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <h4 class="card-header">Service 2</h4>
                <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <h4 class="card-header">Service 3</h4>
                <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->

    <!-- Portfolio Section -->
    <h2>Portfolio Heading</h2>

    <div class="row">
        <div class="col-lg-4 col-sm-6 portfolio-item">
            <div class="card h-100">
                <img class="card-img-top" src="http://placehold.it/700x400" alt="">
                <div class="card-body">
                    <h4 class="card-title">
                        Project One
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
            <div class="card h-100">
                <img class="card-img-top" src="http://placehold.it/700x400" alt="">
                <div class="card-body">
                    <h4 class="card-title">
                        Project Two
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
            <div class="card h-100">
                <img class="card-img-top" src="http://placehold.it/700x400" alt="">
                <div class="card-body">
                    <h4 class="card-title">
                        Project Three
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
                </div>
            </div>
        </div>
    </div>
    <!-- /.row -->

</div>
<!-- /.container -->

<?php get_footer(); ?>