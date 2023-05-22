
import jq_validation_default from './component/config/jquery.validation-default';
import avifWebpBackground from './component/config/avifWebpBackground';
import masks from './component/config/masks';

import js_wizard from './component/forms/js_wizard';
import form_sms from './component/forms/js_formSMS';

(function ($, window, document) {

    $(function () {
        avifWebpBackground();
        jq_validation_default();
        masks();

        js_wizard();
        form_sms();

        $("body").css("opacity", 1);
    });

})(window.jQuery, window, document);
