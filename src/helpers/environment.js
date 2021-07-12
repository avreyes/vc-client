let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3050';
        break;
    case 'avr-vibecheck-client.herokuapp.com':
        APIURL = 'https://avr-vibecheck-client.herokuapp.com'
}

export default APIURL;