;(function () {

    let getData = function () {
        return window.windowHttp.FetchGet('/req').then((res) => {
            let request = '';
            res.header.forEach(elem => {

                request += Object.entries(elem).reduce((res, elem) => {
                    res += elem[0] + ': ' + elem[1] + '\n';
                    return res;
                }, '\n');

            });
            return request ;
        });
    };


    let render = function (data) {
        console.clear();
        console.log(data);
    };


    document.getElementsByClassName('show_req')[0]
        .addEventListener('click', (event) => {

        getData().then(elem => render(elem));

    }, true);


    document.getElementsByClassName('clear_req')[0]
        .addEventListener('click', (event) => {

            window.windowHttp.FetchGet('/clear').then((res) => {});
            render('clear');

    }, true);


}());
