document.addEventListener('DOMContentLoaded', function () {
    var chinese = document.querySelector('.ch_click'),
        english = document.querySelector('.en_click'),
        ch_txt = document.querySelectorAll('.ch'),
        en_txt = document.querySelectorAll('.en'),
        nb_ch = ch_txt.length,
        nb_en = en_txt.length;

    chinese.addEventListener('click', function () {
        langue(chinese, english);
    });

    english.addEventListener('click', function () {
        langue(english, chinese);
    });

    function langue(langueOn, langueOff) {
        if (!langueOn.classList.contains('current_lang')) {
            langueOn.classList.add('current_lang');
            langueOff.classList.remove('current_lang');
        }
        if (langueOn.innerHTML === 'ch') {
            show(ch_txt, nb_ch);
            hide(en_txt, nb_en);
        } else if (langueOn.innerHTML === 'En') {
            show(en_txt, nb_en);
            hide(ch_txt, nb_ch);
        }
    }

    function show(txt, nb) {
        for (var i = 0; i < nb; i++) {
            txt[i].style.display = 'block';
        }
    }

    function hide(txt, nb) {
        for (var i = 0; i < nb; i++) {
            txt[i].style.display = 'none';
        }
    }

    function init() {
        langue(english, chinese);
    }

    init();
});
