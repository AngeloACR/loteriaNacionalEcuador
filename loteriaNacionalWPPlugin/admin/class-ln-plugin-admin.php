<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://tecnobunker.net
 * @since      1.0.0
 *
 * @package    Geo_Target
 * @subpackage Geo_Target/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Geo_Target
 * @subpackage Geo_Target/admin
 * @author     Tecnobunker <info@tecnobunker.net>
 */
class Geo_Target_Admin
{

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version)
	{

		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Geo_Target_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Geo_Target_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/geo-target-admin.css', array(), $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Geo_Target_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Geo_Target_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		registerAdminGoogleMapsScript();

		wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/geo-target-admin.js', array('jquery'), $this->version, false);
	}


	public function registerAdminGoogleMapsScript()
	{
		$isScript = getGoogleMapsScripts();
		if (!$isScript) {
			$googleMapsKey = get_option('google_maps_api_key');
			wp_register_script('googlemaps', 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=' . $googleMapsKey, array(), NULL, false);
			wp_enqueue_script('googlemaps');
		}
	}

	public function getAdminGoogleMapsScripts()
	{

		$scripts = getAadminScripts();
		$googleMaps = preg_grep('/^https:\/\/maps.googleapis.com\/maps\/api\/\s.*/', $scripts);
		if (empty($googleMaps)) {
			return false;
		} else {
			return true;
		}
	}

	function getAdminScripts()
	{

		$result = [];

		// Print all loaded Scripts
		global $admin_scripts;
		foreach ($admin_scripts->queue as $script) :
			$result[] =  $admin_scripts->registered[$script]->src;
		endforeach;

		return $result;
	}



	public function registerSettings()
	{

		register_setting('geo_target_options', 'google_maps_api_key');
	}

	public function setRestaurantCPT()
	{
		$labels = array(
			'name'               => _x('Restaurantes', 'Nombre general'),
			'singular_name'      => _x('Restaurante', 'Nombre simple'),
			'add_new'            => _x('Agregar nuevo', 'Georest'),
			'add_new_item'       => __('Agregar nuevo restaurante'),
			'edit_item'          => __('Editar Restaurante'),
			'new_item'           => __('Nuevo Restaurante'),
			'all_items'          => __('Todos los Restaurantes'),
			'view_item'          => __('Ver Restaurante'),
			'search_items'       => __('Buscar Restaurantes'),
			'not_found'          => __('No se encontraron Restaurantes'),
			'not_found_in_trash' => __('No se encontraron Restaurantes en la basura'),
			'parent_item_colon'  => '’',
			'menu_name'          => 'Restaurantes'
		);
		$args = array(
			'labels'        => $labels,
			'description'   => 'Contiene la información de los Restaurantes',
			'public'        => true,
			'menu_position' => 5,
			'supports'      => array('title', 'thumbnail'),
			'has_archive'   => true,
		);
		$name = 'geo-restaurant';
		register_post_type($name, $args);
	}

	public function my_updated_messages($messages)
	{
		global $post, $post_ID;
		$messages['geo-restaurant'] = array(
			0 => '’',
			1 => sprintf(__('Restaurante actualizado. <a href="%s">Ver restaurante</a>'), esc_url(get_permalink($post_ID))),
			2 => __('Información actualizada.'),
			3 => __('Información borrada.'),
			4 => __('Restaurante actualizado.'),
			5 => isset($_GET['revision']) ? sprintf(__('Restaurante puesto para revisión desde %s'), wp_post_revision_title((int) $_GET['revision'], false)) : false,
			6 => sprintf(__('Restaurante publicado. <a href="%s">Ver restaurante</a>'), esc_url(get_permalink($post_ID))),
			7 => __('Restaurante guardado.'),
			8 => sprintf(__('Restaurante subido. <a target="_blank" href="%s">Previsualizar</a>'), esc_url(add_query_arg('preview', 'true', get_permalink($post_ID)))),
			9 => sprintf(__('Restaurante programado para: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Previsualizar restaurante</a>'), date_i18n(__('M j, Y @ G:i'), strtotime($post->post_date)), esc_url(get_permalink($post_ID))),
			10 => sprintf(__('Borrador de restaurante actualizado. <a target="_blank" href="%s">Previsualizar restaurante</a>'), esc_url(add_query_arg('preview', 'true', get_permalink($post_ID)))),
		);
		return $messages;
	}

	/**
	 *  Add a custom email to the list of emails WooCommerce should load
	 *
	 * @since 0.1
	 * @param array $email_classes available email classes
	 * @return array filtered available email classes
	 */
	public function addGeoTargetEmail($email_classes)
	{

		// include our custom email class
		require(WP_PLUGIN_DIR . '/geo-target/includes/class-geo-target-email.php');

		// add the email class to the list of email classes that WooCommerce loads
		$email_classes['Geo_Target_Email'] = new Geo_Target_Email();

		return $email_classes;
	}

	public function my_contextual_help($contextual_help, $screen_id, $screen)
	{
		if ('geo-restaurant' == $screen->id) {

			$contextual_help = '<h2>Restaurantes</h2>
		  <p>Aquí se muestra la información de los restaurantes incluidos en el sistema de geolocalización y geolimitación.</p> 
		  <p>Puede ver/editar la información de cada restaurante haciendo click en su nombre, o puede ejecutar acciones en masa usando el menú desplegable y selecciónando varios elementos.</p>';
		} elseif ('edit-product' == $screen->id) {

			$contextual_help = '<h2>Edición de restaurantes</h2>
		  <p>Esta página le permite ver o modificar la información del restaurante. Asegúrese de llenar todos los campos disponibles con sus respectivos datos.</p>';
		}
		return $contextual_help;
	}


	public function geo_restaurant_name()
	{
		add_meta_box(
			'geo_restaurant_name',
			__('Nombre del restaurante', 'geo-target'),
			'geo_restaurant_name_content',
			'geo-restaurant',
			'normal',
			'high'
		);
	}

	public function geo_restaurant_name_content($post)
	{
		wp_nonce_field(plugin_basename(__FILE__), 'geo_restaurant_name_content_nonce');
		echo '<label for="geo_restaurant_name">Ingrese el nombre del restaurante</label>';
		echo '<input type="text" id="restaurantName" name="geo_restaurant_name" placeholder="Ingrese el nombre del restaurante" />';
	}
	public function geo_restaurant_name_save($post_id)
	{

		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
			return;

		if (!wp_verify_nonce($_POST['geo_restaurant_content_nonce'], plugin_basename(__FILE__)))
			return;

		if ('page' == $_POST['post_type']) {
			if (!current_user_can('edit_page', $post_id))
				return;
		} else {
			if (!current_user_can('edit_post', $post_id))
				return;
		}
		$name = $_POST['geo_restaurant_name'];
		update_post_meta($post_id, 'geo_restaurant_name', $name);
	}

	public function geo_restaurant_max_distance()
	{
		add_meta_box(
			'geo_restaurant_max_distance',
			__('Distancia máxima de delivery del restaurante', 'geo-target'),
			'geo_restaurant_max_distance_content',
			'geo-restaurant',
			'normal',
			'high'
		);
	}

	public function geo_restaurant_max_distance_content($post)
	{
		wp_nonce_field(plugin_basename(__FILE__), 'geo_restaurant__max_distance_content_nonce');
		echo '<label for="geo_restaurant_max_distance">Ingrese la distancia máxima del restaurante</label>';
		echo '<input type="number" step="0.1" id="restaurantMaxDistance" name="geo_restaurant_max_distance" />';
	}
	public function geo_restaurant_max_distance_save($post_id)
	{

		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
			return;

		if (!wp_verify_nonce($_POST['geo_restaurant_content_nonce'], plugin_basename(__FILE__)))
			return;

		if ('page' == $_POST['post_type']) {
			if (!current_user_can('edit_page', $post_id))
				return;
		} else {
			if (!current_user_can('edit_post', $post_id))
				return;
		}
		$name = $_POST['geo_restaurant_max_distance'];
		update_post_meta($post_id, 'geo_restaurant_max_distance', $name);
	}



	public function geo_restaurant_address()
	{
		add_meta_box(
			'geo_restaurant_address',
			__('Dirección del restaurante', 'geo-target'),
			'geo_restaurant_address_content',
			'geo-restaurant',
			'normal',
			'high'
		);
	}

	public function geo_restaurant_address_content($post)
	{
		wp_nonce_field(plugin_basename(__FILE__), 'geo_restaurant_address_content_nonce');
		echo '<label for="geo_restaurant_address">Ingrese la dirección del restaurante</label>';
		echo '<input type="text" id="restaurantAddress" name="geo_restaurant_address" placeholder="Ingrese la dirección del restaurante" />';
	}
	public function geo_restaurant_address_save($post_id)
	{

		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
			return;

		if (!wp_verify_nonce($_POST['geo_restaurant_content_nonce'], plugin_basename(__FILE__)))
			return;

		if ('page' == $_POST['post_type']) {
			if (!current_user_can('edit_page', $post_id))
				return;
		} else {
			if (!current_user_can('edit_post', $post_id))
				return;
		}
		$name = $_POST['geo_restaurant_address'];
		update_post_meta($post_id, 'geo_restaurant_address', $name);
	}
}
