<?php

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects()
{
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');


// Enable Featured Image
add_theme_support('post-thumbnails');


function add_thumbnail_to_JSON()
{
    //Add featured image
    register_rest_field(
        'post',
        'featured_image', //NAME OF THE NEW FIELD TO BE ADDED - you can call this anything
        array(
            'get_callback' => 'get_image',
            'update_callback' => null,
            'schema' => null,
        )
    );
    register_rest_field(
        'concerts',
        'featured_image', //NAME OF THE NEW FIELD TO BE ADDED - you can call this anything
        array(
            'get_callback' => 'get_image',
            'update_callback' => null,
            'schema' => null,
        )
    );
}
function get_image($object, $field_name, $request)
{
    $feat_img_array = wp_get_attachment_image_src($object['featured_media'], 'large', true);
    return [
        'src' => $feat_img_array[0],
        'width' => $feat_img_array[1],
        'height' => $feat_img_array[2],
    ];
}
add_action('rest_api_init', 'add_thumbnail_to_JSON');


// Add List of Category name
// category_name: [
//     "Defi",
//     "Uncategorized",
//     "Category 1",
//     "Category 2"
//     ],
if (!function_exists('register_rest_category_name')) {
    function register_rest_category_name()
    {
        register_rest_field(
            'post',
            'category_name',
            array(
                'get_callback' => 'get_category_name'
            )
        );
    }
    function get_category_name($object)
    {
        if (!empty($object['categories'])) {
            return array_column(get_the_category($object['id']), 'name');
        } else {
            return null;
        }
    }
}
add_action('rest_api_init', 'register_rest_category_name');


// Custom Excerpt
if (!function_exists('modify_excerpt')) {
    function modify_excerpt()
    {
        register_rest_field(
            'post',
            'excerpt',
            array(
                'get_callback' => 'get_modified_excerpt'
            )
        );
    }
    function get_modified_excerpt($object)
    {
        $max_length = 30;
        if (!empty($object['excerpt'])) {
            return mb_substr(strip_tags($object['excerpt']['rendered']), 0, $max_length) . '...';
        } else {
            return null;
        }
    }
}
add_action('rest_api_init', 'modify_excerpt');


// // Custom Title
// if (!function_exists('modify_title')) {
//     function modify_title()
//     {
//         register_rest_field(
//             'post',
//             'title',
//             array(
//                 'get_callback' => 'get_modified_title'
//             )
//         );
//     }
//     function get_modified_title($object)
//     {
//         if (!empty($object['title'])) {
//             return $object['title']['rendered'];
//         } else {
//             return null;
//         }
//     }
// }
// add_action('rest_api_init', 'modify_title');

// // Custom Content
// if (!function_exists('modify_content')) {
//     function modify_content()
//     {
//         register_rest_field(
//             'post',
//             'content',
//             array(
//                 'get_callback' => 'get_modified_content'
//             )
//         );
//     }
//     function get_modified_content($object)
//     {
//         if (!empty($object['content'])) {
//             return $object['content']['rendered'];
//         } else {
//             return null;
//         }
//     }
// }
// add_action('rest_api_init', 'modify_content');


// Format Date
// Default : date: "2021-07-16T17:48:46",
// Changed to : date: "July 16, 2021",
if (!function_exists('register_rest_format_date')) {
    function register_rest_format_date()
    {
        register_rest_field(
            'post',
            'date',
            array(
                'get_callback' => 'get_format_date'
            )
        );
        register_rest_field(
            'concerts',
            'date',
            array(
                'get_callback' => 'get_format_date'
            )
        );
    }
    function get_format_date($object)
    {
        $date = get_the_date('Y年n月d日', $object['id']);
        return $date;
    }
}
add_action('rest_api_init', 'register_rest_format_date');


// Create Custom Pot type
function create_concert()
{
    $concertSupports = [
        'title',
        'editor',
        'thumbnail',
        'revisions'
    ];

    // add post type
    register_post_type(
        'concerts',
        array(
            'label' => 'Concerts',
            'public' => true,
            'has_archive' => true,
            'menu_position' => 5,
            'menu_icon' => 'dashicons-welcome-write-blog',
            'show_in_rest' => true,
            'rest_base' => 'concerts',
            'supports' => $concertSupports
        )
    );

    // add taxonomy
    register_taxonomy(
        'concert_taxonomy',
        'category',
        array(
            'label' => 'category',
            'labels' => array(
                'all_items' => 'categories',
                'add_new_item' => 'Add New Category'
            ),
            'hierarchical' => true
        )
    );
}

add_action('init', 'create_concert');



// Create Custom Pot type
function create_instructor()
{
    $instructorSupports = [
        'title',
        'editor',
        'thumbnail',
        'revisions'
    ];

    // add post type
    register_post_type(
        'instructors',
        array(
            'label' => 'Instructors',
            'public' => true,
            'has_archive' => true,
            'menu_position' => 6,
            'menu_icon'       => 'dashicons-admin-users',
            'show_in_rest' => true,
            'rest_base' => 'instructors',
            'supports' => $instructorSupports
        )
    );
}

add_action('init', 'create_instructor');
