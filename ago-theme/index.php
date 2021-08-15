<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <title>青山学院管弦楽団</title>
    <link rel="icon" href="/wp-content/themes/ago-theme/static/logo.png">
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Open+Sans:wght@400;600;700&display=swap" as="style" onload="this.rel='stylesheet'">
    <link rel="preload" href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" as="style" onload="this.rel='stylesheet'">
    <link rel="preload" href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" as="style" onload="this.rel='stylesheet'">
    <link rel="preload" href="/wp-content/themes/ago-theme/dist/css/style.css" as="style" onload="this.rel='stylesheet'">
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php if (is_front_page()) : ?>
        <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php endif; ?>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div id="app"></div>
    <?php get_footer(); ?>


    <!-- CDN Vue related library so that reduce bundle file -->
    <script defer src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
    <script defer type="text/javascript" src="/wp-content/themes/ago-theme/dist/js/bundle.js"></script>
</body>

</html>
