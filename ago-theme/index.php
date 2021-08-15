<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <title>青山学院管弦楽団</title>
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="icon" href="/wp-content/themes/ago-theme/static/logo.png">
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#42b983">
    <?php if (is_front_page()) : ?>
        <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php endif; ?>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div id="app"></div>
    <?php get_footer(); ?>
</body>

</html>
