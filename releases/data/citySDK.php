<?php
require_once ( '/vs/www/php-bin/app-config/citySDK/bootstrap.inc.php' );
require_once ( 'CitySDK.class.php' );

define('DEBUG_MODE', false);

CBDB::connect( $db );
echo new CitySDK();
        