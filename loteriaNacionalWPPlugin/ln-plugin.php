<?php
//https://www.smashingmagazine.com/2012/11/complete-guide-custom-post-types/
//https://www.tychesoftwares.com/how-to-create-unique-coupon-codes-in-woocommerce-programmatically/
//
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://tecnobunker.net
 * @since             1.0.0
 * @package           LN_Plugin
 *
 * @wordpress-plugin
 * Plugin Name:       LN Plugin
 * Plugin URI:        https://tecnobunker.net
 * Description:       Integra mercadopago dentro de tu pluginplace.
 * Version:           1.3.0
 * Author:            Tecnobunker
 * Author URI:        https://tecnobunker.net
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ln-plugin
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('LN_PLUGIN_VERSION', '1.3.0');

define('LN_PLUGIN_PLUGIN_DIR', plugin_dir_path(__FILE__));

if (in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {

	/**
	 * The code that runs during plugin activation.
	 * This action is documented in includes/class-ln-plugin-activator.php
	 */
	function activate_ln_plugin()
	{
		require_once LN_PLUGIN_PLUGIN_DIR . 'includes/class-ln-plugin-activator.php';
		LN_Plugin_Activator::activate();
	}

	/**
	 * The code that runs during plugin deactivation.
	 * This action is documented in includes/class-ln-plugin-deactivator.php
	 */
	function deactivate_ln_plugin()
	{
		require_once LN_PLUGIN_PLUGIN_DIR . 'includes/class-ln-plugin-deactivator.php';
		LN_Plugin_Deactivator::deactivate();
	}

	register_activation_hook(__FILE__, 'activate_ln_plugin');
	register_deactivation_hook(__FILE__, 'deactivate_ln_plugin');

	/**
	 * The core plugin class that is used to define internationalization,
	 * admin-specific hooks, and public-facing site hooks.
	 */
	require LN_PLUGIN_PLUGIN_DIR . 'includes/class-ln-plugin.php';

	/**
	 * Begins execution of the plugin.
	 *
	 * Since everything within the plugin is registered via hooks,
	 * then kicking off the plugin from this point in the file does
	 * not affect the page life cycle.
	 *
	 * @since    1.0.0
	 */



	add_action('wp_ajax_nopriv_uploadBoletines', 'uploadBoletines');
	add_action('wp_ajax_uploadBoletines', 'uploadBoletines');

	function uploadBoletines()
	{
		$home = get_home_url();

		$boletinesUploadFolder = '/wp-content/uploads/boletines/';
		$boletosUploadFolder = '/wp-content/uploads/boletos/';
		$boletinesPath = $_SERVER['DOCUMENT_ROOT'] . $boletinesUploadFolder;
		$boletosPath = $_SERVER['DOCUMENT_ROOT'] . $boletosUploadFolder;
		if (!file_exists($boletinesPath)) {
			mkdir($boletinesPath, 0755, true);
		}
		if (!file_exists($boletosPath)) {
			mkdir($boletosPath, 0755, true);
		}
		if (isset($_REQUEST) && isset($_FILES)) {
			foreach ($_FILES as $f => $file) {
				$filename = basename($file['name']);

				$tipoImagen = $filename[0];
				$tipoLoteria = $filename[1];
				if ($tipoImagen == "T") {
					$documentFolder = $boletinesPath;
				} else if ($tipoImagen == "B") {
					$documentFolder = $boletosPath;
				}
				$targetFile = $documentFolder . $filename;
				move_uploaded_file($file["tmp_name"], $targetFile);
			}
		}


		$response = array(
			'status' => true,
		);

		echo json_encode($response);

		wp_die();
	}


	add_action('admin_menu', 'ln_plugin_menu');

	function ln_plugin_menu()
	{
		add_menu_page(
			'Carga de boletines y boletos',
			'Boletines y boletos',
			'edit_users',
			'ln_plugin_menu',
			'ln_plugin_menu_content',
			'',
			10
		);
	}

	function ln_plugin_menu_content()
	{
		require_once LN_PLUGIN_PLUGIN_DIR . 'ln-templates/ln-plugin-uploader.php';
	}

	function run_ln_plugin()
	{

		$plugin = new LN_Plugin();
		$plugin->run();
	}
	run_ln_plugin();
}