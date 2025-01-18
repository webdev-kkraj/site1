<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'site1' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'admin@123' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.ZoN%3JaBdp~/+Ely}/i*Z@>/2y^tZZ@X%0f}R_etzIl QtFfoRe#zn/5[GXR;-Z' );
define( 'SECURE_AUTH_KEY',  '2,o1WP7p(b/@kr(+pk0)R[MsRfTnb<U)M4<9B+ej9v,Ca8>1o$J)@j@#ZFSvK6M6' );
define( 'LOGGED_IN_KEY',    '^nH%uq^!v-Bsk97W,uwD9<pcav4=NV7qhe.?*<PG]?PlE?kz|#0=k+58+c-G.-~>' );
define( 'NONCE_KEY',        'uRamh#-``imx)G2RC%a{f I9WtvwjU;DM0;Fn|6~3/=y}Hy{ ny>2`]4k.f,vy G' );
define( 'AUTH_SALT',        '-tz[]f,$CB+0wzJ;ANb[`a.7~8b[WsIzu|tR=gf]j>OAT(B2xmAKJD[b?0Xrkh13' );
define( 'SECURE_AUTH_SALT', '!VzdGPy73lcJX|8XP}V> SVzWu)7}-z=V|%kzn:+,.O4CQTp0on(H>wvh:flA 2c' );
define( 'LOGGED_IN_SALT',   'CRK:AE$_<t}F%Z#doBN^sWK)&2;4=:~kW@AvE|1X|B*c?TLKLN;[E7(S}pz>bN7Q' );
define( 'NONCE_SALT',       'xUCf?_/n4MVbucCx%h~B<*?*MA:n-$/,}=V}u=;|_1o}&7i#:TB}FpbRf9P<$&_c' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
