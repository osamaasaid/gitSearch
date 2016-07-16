
(function() {
	// code here
	console.log('I am running :)');
	var url = 'https://api.github.com/users/';
	var username = document.getElementById('name').value;
	// create xhr object
	var xhr = new XMLHttpRequest();
	// send the xhr to fetch url
	xhr.open('GET', url + username, true);

	xhr.onload = function() {
		if(xhr.status >= 200 && xhr.status < 400) {
			// ok, connections established
			var data = JSON.parse(xhr.responseText);
			console.log(data);
		} else {
			console.log('connection failed!');
		}
	}

	xhr.send();

})();