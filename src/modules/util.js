;(function () {

    class Http {
        constructor() {
        }

        static FetchGet(address) {
            return fetch(address, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json'
                }
            })
                .then( (response) => {
                    return response.json();
                });
        }

        static FetchPost (address, body) {
            return fetch(address, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json'
                }
            })
                .then(function(response) {
                    return  response;
                });
        }
    }

    window.windowHttp = Http;

}());
