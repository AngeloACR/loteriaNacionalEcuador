<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb8dfbd803e471b1d50bdb6699a8cd6ff
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Gamajo_Template_Loader' => __DIR__ . '/..' . '/gamajo/template-loader/class-gamajo-template-loader.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitb8dfbd803e471b1d50bdb6699a8cd6ff::$classMap;

        }, null, ClassLoader::class);
    }
}
