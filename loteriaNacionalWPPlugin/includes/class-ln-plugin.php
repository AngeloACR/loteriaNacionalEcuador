<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://tecnobunker.net
 * @since      1.0.0
 *
 * @package    Geo_Target
 * @subpackage Geo_Target/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Geo_Target
 * @subpackage Geo_Target/includes
 * @author     Tecnobunker <info@tecnobunker.net>
 */
class Geo_Target
{

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Geo_Target_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct()
	{
		if (defined('GEO_TARGET_VERSION')) {
			$this->version = GEO_TARGET_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'geo-target';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Geo_Target_Loader. Orchestrates the hooks of the plugin.
	 * - Geo_Target_i18n. Defines internationalization functionality.
	 * - Geo_Target_Admin. Defines all hooks for the admin area.
	 * - Geo_Target_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies()
	{

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-geo-target-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-geo-target-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path(dirname(__FILE__)) . 'admin/class-geo-target-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path(dirname(__FILE__)) . 'public/class-geo-target-public.php';


		$this->loader = new Geo_Target_Loader();
	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Geo_Target_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale()
	{

		$plugin_i18n = new Geo_Target_i18n();

		$this->loader->add_action('plugins_loaded', $plugin_i18n, 'load_plugin_textdomain');
	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks()
	{

		$plugin_admin = new Geo_Target_Admin($this->get_plugin_name(), $this->get_version());

		$this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
		$this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');
		$this->loader->add_action('admin_init', $plugin_admin, 'registerSettings');
		$this->loader->add_filter('woocommerce_email_classes', $plugin_admin, 'addGeoTargetEmail');

		/* 		$this->loader->add_action('init', $plugin_admin, 'setRestaurantCPT');
		$this->loader->add_action('contextual_help', $plugin_admin, 'my_contextual_help', 0, 3);
		$this->loader->add_action('add_meta_boxes', $plugin_admin, 'geo_restaurant_name');
		$this->loader->add_action('save_post', $plugin_admin, 'geo_restaurant_name_save');
		$this->loader->add_action('add_meta_boxes', $plugin_admin, 'geo_restaurant_max_distance');
		$this->loader->add_action('save_post', $plugin_admin, 'geo_restaurant_max_distance_save');

		$this->loader->add_action('add_meta_boxes', $plugin_admin, 'geo_restaurant_address');
		$this->loader->add_action('save_post', $plugin_admin, 'geo_restaurant_address_save');
		$this->loader->add_filter('post_updated_messages', $plugin_admin, 'my_updated_messages'); */
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks()
	{

		$plugin_public = new Geo_Target_Public($this->get_plugin_name(), $this->get_version());

		$this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_styles');
		$this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
		$this->loader->add_action('woocommerce_checkout_process',   $plugin_public, 'validate_checkout_fields');
		$this->loader->add_action('woocommerce_checkout_update_order_meta', $plugin_public, 'save_restaurant_email_checkout_hidden_field');

		//$this->loader->add_action('rest_api_init',   $plugin_public, 'notifyApi');
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */


	public function run()
	{
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name()
	{
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Geo_Target_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader()
	{
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version()
	{
		return $this->version;
	}
}
