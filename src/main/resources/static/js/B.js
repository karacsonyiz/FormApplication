$(document).ready(() => {
    $('.bonus-question-td select').prop('disabled', true);
    hideEmptyHints();
    toggleRowOnAnswer();

    $('#AWU_1O_TF').prop('disabled', true);
    $('#AWU_1N_TF').prop('disabled', true);

    $('#AWU_1O_TF').on('change', () => {
        $('#AWU_1O_NUM').val($('#AWU_1O_TF').val());
    });

    $('#AWU_1N_TF').on('change', () => {
        $('#AWU_1N_NUM').val($('#AWU_1N_TF').val());
    });

    $('#AWU_1O_NUM').on('click', () => {
        $('#AWU_1O_TF').prop('disabled', false);
    });

    $('#AWU_1O_8').on('click', () => {
        $('#AWU_1O_TF').prop('disabled', true);
    });

    $('#AWU_1O_9').on('click', () => {
        $('#AWU_1O_TF').prop('disabled', true);
    });

    $('#AWU_1N_NUM').on('click', () => {
        $('#AWU_1N_TF').prop('disabled', false);
    });

    $('#AWU_1N_8').on('click', () => {
        $('#AWU_1N_TF').prop('disabled', true);
    });

    $('#AWU_1N_9').on('click', () => {
        $('#AWU_1N_TF').prop('disabled', true);
    });
});

const hideEmptyHints = () => {
    $('.question-hint').each((index, element) => {
        if ($(element).html() === "") {
            $(element).parent().css('display', 'none');
        }
    });
};

const toggleRowOnAnswer = () => {
    $('.basic-row-B9 td:nth-child(2)>select').on('change', (event) => {
        let $target = $(event.target);
        let $otherTwo = $($target.parent().nextAll()).children('select');
        // let $nextTwo = $target.parents('tr[class^="basic-row"]').nextAll().slice(0, 2);
        if ($target.val() === '1') {
            $otherTwo.prop('disabled', false);
        } else {
            $otherTwo.prop('selectedIndex', 0);
            $otherTwo.prop('disabled', true);
        }
    });
};