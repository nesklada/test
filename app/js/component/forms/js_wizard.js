import { cleanupForm } from "../config/jquery.validation-default";
import { ACTIVE, COMPLETED, LOADING } from "../config/stateClasses";

const target = '.js_wizard';

export default function wizard() {
    const $forms = $('.js_formQuiz');

    $forms.submit(function (e) {
        e.preventDefault();

        const $toggler = $forms.find('[type=submit]');
        const $form = $(this);

        if (!$form.valid()) return;

        $toggler.addClass(LOADING);

        setTimeout(function () {
            alert('Request submited');

            cleanupForm($forms);
            $toggler.removeClass(LOADING);
        }, 2000)
    });

    wiz();
}

function wiz() {
    const $wizards = $(target);

    if (!$wizards.length) return

    const $next = $wizards.find('.js_next');

    $next.click(function (e) {
        e.preventDefault();

        const $form = $(this).closest('form');

        if (!$form.valid()) return

        const $nextWiz = $(`${target}:not(.${COMPLETED}):not(.${ACTIVE})`);

        if (!$nextWiz.length) {

            $form.submit();

            return
        }

        $(`${target}.${ACTIVE}`).removeClass(ACTIVE).addClass(COMPLETED);
        $nextWiz.addClass(ACTIVE);
    });
}