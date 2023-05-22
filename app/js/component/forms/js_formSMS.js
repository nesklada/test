import { cleanupForm } from "../config/jquery.validation-default";
import { LOADING } from "../config/stateClasses";

export default function formSMS() {
    const $forms = $('.js_formSMS');

    if (!$forms.length) return;

    $forms.submit((e) => {
        e.preventDefault();

        const $form = $(e.target);

        if (!$form.valid()) return;

        const $toggler = $form.find('[type=submit]');

        $toggler.addClass(LOADING);

        setTimeout(function () {
            alert('Request has been success sended!');

            cleanupForm($form);
            $toggler.removeClass(LOADING);
        }, 2000);
    });
}