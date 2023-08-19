<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <?php get_header(); ?>
</head>

<body <?php body_class(); ?>>

    <?php get_template_part('includes/nav'); ?>


    <main class="section-main">

        <div class="section-wrap">

            <?php if (have_posts()): ?>
                <?php while (have_posts()): the_post(); ?>

                <h1 class="section-title"><?php the_title(); ?></h1>

                <?php the_content(); ?>

            <?php endwhile; ?>
            <?php endif; ?>

        </div>

        <h1 class="top-h1"><?php bloginfo('name'); ?></h1>

    </main>

    <?php get_footer(); ?>

</body>

</html>