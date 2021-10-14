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
 * Description:       Integración para loteria nacional.
 * Version:           1.4.0
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
define('LN_PLUGIN_VERSION', '1.4.0');

define('LN_PLUGIN_PLUGIN_DIR', plugin_dir_path(__FILE__));


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
	$boletinesPath = $_SERVER['DOCUMENT_ROOT'] . $boletinesUploadFolder;
	if (!file_exists($boletinesPath)) {
		mkdir($boletinesPath, 0755, true);
	}
	if (isset($_REQUEST) && isset($_FILES)) {
		foreach ($_FILES as $f => $file) {
			$filename = basename($file['name']);

			$tipoImagen = $filename[0];
			$tipoLoteria = $filename[1];
			if ($tipoImagen == "T") {
				$documentFolder = $boletinesPath;
			} else {
				$response = array(
					'status' => false,
					'message' => 'El nombre del archivo no sigue el formato descrito'
				);

				break;
			}
			if ($tipoLoteria != "1" && $tipoLoteria != "2" && $tipoLoteria != "5") {
				$response = array(
					'status' => false,
					'message' => 'El tipo de lotería indicado no coincide con ninguno de los de Loteria Nacional'
				);

				break;
			}
			$targetFile = $documentFolder . $filename;
			move_uploaded_file($file["tmp_name"], $targetFile);
			$host = "ventas.loteria.com.ec";
			$port = 2224;
			$timeout = 360;
			$user = "loterianacional";
			$pass = "\$lnftp123..$";
			$ftp = ftp_ssl_connect($host, $port, $timeout);
			$ftpLogin = ftp_login($ftp, $user, $pass);

			$fileList = ftp_nlist($ftp, $filename); //Returns an array of filenames from the specified directory on success or FALSE on error. 

			// Test if file is in the ftp_nlist array
			if (in_array($filename, $fileList)) {
				ftp_delete($ftp, $filename);
			}
			$ret = ftp_nb_put($ftp, $filename, $targetFile, FTP_BINARY, FTP_AUTORESUME);

			while (FTP_MOREDATA == $ret) {
				// display progress bar, or something
				$ret = ftp_nb_continue($ftp);
			}

			ftp_close($ftp);
			$ftpDone = true;
		}
	}

	if ($ftpDone) {

		$response = array(
			'status' => true,
			'message' => 'Archivos cargados exitosamente'
		);
	}

	echo json_encode($response);

	wp_die();
}


add_action('admin_menu', 'ln_plugin_boletin_menu');

function ln_plugin_boletin_menu()
{
	add_menu_page(
		'Carga de boletines',
		'Boletines',
		'edit_posts',
		'ln_plugin_boletin_menu',
		'ln_plugin_boletin_menu_content',
		'',
		2
	);
}

function ln_plugin_boletin_menu_content()
{
	require_once LN_PLUGIN_PLUGIN_DIR . 'ln-templates/ln-plugin-uploader.php';
}

add_action('wp_ajax_nopriv_uploadBoletos', 'uploadBoletos');
add_action('wp_ajax_uploadBoletos', 'uploadBoletos');

function uploadBoletos()
{
	$home = get_home_url();

	$boletosUploadFolder = '/wp-content/uploads/boletos/';
	$boletosPath = $_SERVER['DOCUMENT_ROOT'] . $boletosUploadFolder;
	if (!file_exists($boletosPath)) {
		mkdir($boletosPath, 0755, true);
	}
	if (isset($_REQUEST) && isset($_FILES)) {
		foreach ($_FILES as $f => $file) {
			$filename = basename($file['name']);

			$tipoImagen = $filename[0];
			$tipoLoteria = $filename[1];
			if ($tipoImagen == "B") {
				$documentFolder = $boletosPath;
			} else {
				$response = array(
					'status' => false,
					'message' => 'El nombre del archivo no sigue el formato descrito'
				);

				break;
			}
			if ($tipoLoteria != "1" && $tipoLoteria != "2" && $tipoLoteria != "5") {
				$response = array(
					'status' => false,
					'message' => 'El tipo de lotería indicado no coincide con ninguno de los de Loteria Nacional'
				);

				break;
			}
			$targetFile = $documentFolder . $filename;
			move_uploaded_file($file["tmp_name"], $targetFile);
			//$host = "ventas-prueba.loteria.com.ec";
			$host = "ventas.loteria.com.ec";
			$port = 2226;
			$timeout = 360;
			$user = "loterianacional";
			$pass = "\$lnftp123..$";
			$ftp = ftp_ssl_connect($host, $port, $timeout);
			$ftpLogin = ftp_login($ftp, $user, $pass);

			$fileList = ftp_nlist($ftp, $filename); //Returns an array of filenames from the specified directory on success or FALSE on error. 

			// Test if file is in the ftp_nlist array
			if (in_array($filename, $fileList)) {
				ftp_delete($ftp, $filename);
			}
			$ret = ftp_nb_put($ftp, $filename, $targetFile, FTP_BINARY, FTP_AUTORESUME);

			while (FTP_MOREDATA == $ret) {
				// display progress bar, or something
				$ret = ftp_nb_continue($ftp);
			}

			ftp_close($ftp);
			$ftpDone = true;
		}
	}

	if ($ftpDone) {

		$response = array(
			'status' => true,
			'message' => 'Archivos cargados exitosamente'
		);
	}

	echo json_encode($response);

	wp_die();
}


add_action('admin_menu', 'ln_plugin_boleto_menu');

function ln_plugin_boleto_menu()
{
	add_menu_page(
		'Carga de boletos',
		'Boletos',
		'edit_posts',
		'ln_plugin_boleto_menu',
		'ln_plugin_boleto_menu_content',
		'',
		3
	);
}

function ln_plugin_boleto_menu_content()
{
	require_once LN_PLUGIN_PLUGIN_DIR . 'ln-templates/ln-plugin-boletos-uploader.php';
}

function run_ln_plugin()
{

	$plugin = new LN_Plugin();
	$plugin->run();
}
run_ln_plugin();
