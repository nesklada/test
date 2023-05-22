const holder = ".js_formGroup";
const error = "has-error";
const valid = "has-valid";

export default function () {
    const valid_message = "Please enter a valid";
    const provide_message = "Please provide a valid";

    jQuery.validator.setDefaults({
        errorElement: "label",
        errorClass: "error",
        focusInvalid: false,

        errorPlacement: function (error, element) {
            $(element).closest(holder).append(error);
        },

        highlight: function (element, errorClass, validClass) {
            let fieldWrap = $(element).closest(holder);

            fieldWrap.addClass(error).removeClass(valid);
            $(element).addClass(errorClass);
        },

        unhighlight: function (element, errorClass, validClass) {
            let fieldWrap = $(element).closest(holder);

            fieldWrap.removeClass(error).addClass(valid);
            $(element).removeClass(errorClass);
        },

        rules: {
            first_name: {
                required: true,
                minlength: 2
            },

            last_name: {
                required: true,
                minlength: 2
            },

            email_address: {
                required: true,
                email: true
            },

            phone_home: {
                required: true,
                minlength: 17
            },

            optCheck: {
                required: true
            },

            //wizard fields:
            firstname: {
                required: true,
                minlength: 2
            },

            lastname: {
                required: true,
                minlength: 2
            },

            email: {
                required: true,
                email: true
            },

            phone: {
                required: true,
                minlength: 17
            },

            state: {
                required: true
            },

            optCheck0: {
                required: true
            }
        },
        messages: {
            first_name: {
                minlength: valid_message + ' first name.'
            },

            last_name: {
                minlength: valid_message + ' last name.'
            },

            phone_home: {
                minlength: provide_message + ' phone number.'
            },

            //wizard fields:

            firstname: {
                minlength: valid_message + ' first name.'
            },

            lastname: {
                minlength: valid_message + ' last name.'
            },

            phone: {
                minlength: provide_message + ' phone number.'
            },
        }
    });
}

export function cleanupForm($form) {
    const $inputs = $form.find('input');
    const $selects = $form.find('select');

    $inputs.each(function (i, input) {
        const $input = $(input);

        if ($input.is('[type=checkbox]') || $input.is('[type=radio]')) {
            $input.prop('checked', false);

            return
        }

        $input.val('');
    });

    $selects.val('');

    $form.find('.js_formGroup').removeClass(valid);
}
