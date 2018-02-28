;(function () {

    const DEFAULT_MSG = 'Press the button';
    const CLICK_MSG = 'Not bad';

    let msg = document.getElementsByClassName('message')[0];
    let flagClick = false;

    document.getElementsByClassName('button')[0].addEventListener('click', (event) => {

        msg.textContent = flagClick ? DEFAULT_MSG : CLICK_MSG;
        flagClick = !flagClick;

    }, true);

}());
