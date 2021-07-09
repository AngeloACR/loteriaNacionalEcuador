<?php
//require VMC_MARKET_PLUGIN_DIR . 'includes/class-vmc-market-template-loader.php';

function mockUp()
{
    $templates = new LN_Plugin_Template_Loader;

    ob_start();
    $templates->get_template_part('vmc-market-auth-handler');
    return ob_get_clean();
}
