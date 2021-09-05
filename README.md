# ago-wp-theme

[![test & deploy](https://github.com/posaune0423/ago-wp-theme/actions/workflows/deploy.yml/badge.svg)](https://github.com/posaune0423/ago-wp-theme/actions/workflows/deploy.yml)

This is Vue.js theme made for [Aoyama Gakuin Orchestra](https://aoyamaorchestra.com/)

I really respect settings below

-   [wp-docker](https://github.com/viralpatel/wp-docker) created by [Viral Patel](https://github.com/viralpatel)
-   [Aetherium](https://github.com/torounit/Aetherium) created by [Hiroshi Urabe](https://github.com/torounit)
-   [vuejs-wordpress-theme-starter](https://github.com/EvanAgee/vuejs-wordpress-theme-starter) created by [EvanAgee](https://github.com/EvanAgee)

Also, in this environment upload_max_filesize in php.ini is configured by upload.ini for uploading files or folders which exceed default upload_max_filesize.

## Prerequisites

-   [Docker](https://www.docker.com/)

## How to use

### 1. Build docker image and start the server

```bash
$ git clone https://github.com/posaune0423/ago-wp-theme.git

$ cd ago-wp-theme

$ docker compose up -d --build
```

then automatically apache web server start on http://localhost:8000

## 2. Inside the container, build files by webpack

```bash
$ cp -pr .env.sample .env
$ docker compose exec wordpress bash -c "cd wp-content/themes/ago-theme && yarn build:dev"
# Or just in your host OS
$ yarn build:dev
```

#### Now, you are get ready for developing your own awesome theme !

### Reference

https://developer.wordpress.org/rest-api/reference/

### If you got stuck with enable WP REST API

please try this out

-   Browse to http://yoursitename.wpengine.com/wp-json/wp/v2/posts
    -   get 404
-   Go to admin, settings, permalinks, choose "Post Name"
    -   Click "Save Changes"
-   Browse to http://yoursitename.wpengine.com/wp-json/wp/v2/posts
    -   success. page displays JSON response


### How to get static page
https://developer.wordpress.org/rest-api/reference/pages/#definition-example-request


### Set up PHP Mailer
#### In local development
I addded the container for SMTP server in docker-compose.yml so we can use it.
First, you have to install Plugin named [WP Mail SMTP](https://wpmailsmtp.com/)
and in the settings, please fill in the information below

| Key            | Value |
| -------------- | ----- |
| SMTP Host      | smtp  |
| Encryption     | None  | 
| SSL            | TLS   |
| SMTP Port      | 1025  |
| Auto TLS       | ON    |
| Authentication | OFF   |
