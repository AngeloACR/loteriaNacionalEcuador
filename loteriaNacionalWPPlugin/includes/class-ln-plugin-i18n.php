<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://tecnobunker.net
 * @since      1.0.0
 *
 * @package    Geo_Target
 * @subpackage Geo_Target/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Geo_Target
 * @subpackage Geo_Target/includes
 * @author     Tecnobunker <info@tecnobunker.net>
 */
class Geo_Target_i18n
{


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain()
	{

		load_plugin_textdomain(
			'synapsis-payment',
			false,
			dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
		);
	}
}
