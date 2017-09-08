<?php
class WFTypekitPluginConfig {
    
    public static function getConfig(&$settings) {
        $wf = WFEditor::getInstance();
        $settings['typekit_kitid'] = $wf->getParam('typekit.kitid');
    }
}
