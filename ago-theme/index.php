<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <meta name="theme-color" content="#42b983">
    <?php if (is_front_page()) : ?>
        <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php endif; ?>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div id="app"></div>
    <?php wp_footer(); ?>
</body>

</html>
