#!/bin/bash


ssh -i ~/.ssh/id_rsa xs098000@xs098000.xsrv.jp -p 10022
cd /home/xs098000/aoyamaorchestra.com/public_html/wp-content/themes
touch test.txt

# rm -r ago-theme
# git clone https://github.com/posaune0423/ago-wp-theme.git
# mv ago-wp-theme/ago-theme .
# rm -rf ago-wp-theme
# cd ago-theme
# cp -pr .env.sample .env
# yarn install
# yarn build
