/**
 * @authors leyth
 */

/**
 * @module
 * @param
 * @return {[function as value]}
 */
var app = (function() {
    /**
     * @member
     * 
     */
    var init = function() {
        const DONE = 4; // readyState 4 means request is ready
        const OK = 200; // status of 200 means a successful return
        var data; // parsed json data will be stored here

        // grab the user input
        var username = document.getElementById('name');

        var info1 = document.getElementById('info1');
        var info2 = document.getElementById('info2');
        var info3 = document.getElementById('info3');

        // user avatar
        var avatar = document.getElementById('avatar');

        // title of the page
        var header = document.getElementById('username');
        var userid = username.value;
        if (userid == '') {
            alert('Please type in the Github user account name');
        } else {
            // print id as test
            console.log(userid);
            // github url concat with username
            var url = 'https://api.github.com/users/' + userid;

            // Initialize the Http request.
            var xhr = new XMLHttpRequest();
            xhr.onload = function(e) {
                // track the status changes of the request
                if (xhr.readyState === DONE) {
                    if (xhr.status === OK) {
                        var data = JSON.parse(xhr.responseText);
                        avatar.src = data.avatar_url;
                        header.innerHTML = data.name;
                        info1.innerHTML = data.login;
                        info2.innerHTML = data.public_repos;
                        info3.innerHTML = data.url;
                        console.log(data);
                    } else {
                        // an ERROR has occured during request
                        console.log('connection failed' + xhr.status)
                    }
                }

            }

            xhr.open("GET", url);
            // send the request
            xhr.send();

            // clear input
            function reset() {
                username.value = null;
            }

            reset();
        }

    }
    return {
    	init: init
    }
})();


// TODO : 1. add avatar image, style css

