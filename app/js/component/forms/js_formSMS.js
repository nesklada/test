import { cleanupForm, focusOnError } from "../config/jquery.validation-default";
import { LOADING } from "../config/stateClasses";

export default function formSMS() {
    const $forms = $('.js_formSMS');

    if (!$forms.length) return;

    const SUCCESS_MESSAGE = 'You have successfully subscribed to receive SMS messages from Way Out.';

    $forms.submit((e) => {
        e.preventDefault();

        const $form = $(e.target);

        if (!$form.valid()) {
            focusOnError($form);

            return
        };

        const $toggler = $form.find('[type=submit]');

        $toggler.addClass(LOADING);

        setTimeout(function () {
            alert(SUCCESS_MESSAGE);

            cleanupForm($form);
            $toggler.removeClass(LOADING);
        }, 2000);
    });
}