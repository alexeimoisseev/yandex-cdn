var angularVersions = ['1.2.0', '1.2.1', '1.2.2', '1.2.3', '1.2.4', '1.2.5', '1.2.6', '1.2.7', '1.2.8', '1.2.9', '1.2.10', '1.2.11', '1.2.12', '1.2.13', '1.2.14', '1.2.15', '1.2.16', '1.2.17'];

var yandexCdn = {
    angular: {
        versions: angularVersions,
        url: function(version) {
            return '//yandex.st/angularjs/' + version + '/angular.min.js';
        }
    },
    'angular-resource': {
        versions: angularVersions,
        url: function(version) {
            return '//yandex.st/angularjs/' + version + '/angular-resource.min.js';
        }
    },
    'angular-animate': {
        versions: angularVersions,
        url: function(version) {
            return '//yandex.st/angularjs/' + version + '/angular-animate.min.js';
        }
    },
    'angular-cookies': {
        versions: angularVersions,
        url: function(version) {
            return '//yandex.st/angularjs/' + version + '/angular-cookies.min.js';
        }
    },
    'angular-loader': {
        versions: angularVersions,
        url: function(version) {
            return '//yandex.st/angularjs/' + version + '/angular-loader.min.js';
        }
    },
    'angular-route': {
        versions: angularVersions,
        url: function(version) {
            return '//yandex.st/angularjs/' + version + '/angular-route.min.js';
        }
    },
    'angular-sanitize': {
        versions: angularVersions,
        url: function(version) {
            return '//yandex.st/angularjs/' + version + '/angular-sanitize.min.js';
        }
    },
    'angular-touch': {
        versions: angularVersions,
        url: function(version) {
            return '//yandex.st/angularjs/' + version + '/angular-touch.min.js';
        }
    },
    backbone: {
        versions: ['1.0.0', '1.1.0', '1.1.1', '1.1'],
        url: function(version) {
            return '//yandex.st/backbone/' + version + '/backbone-min.js';
        }
    },
    dojo: {
        versions: ['1.9.1', '1.9.0', '1.8.5', '1.8.4', '1.8.3', '1.8.2', '1.8.1', '1.8.0', '1.7.5', '1.7.4', '1.7.3', '1.7.2', '1.7.1', '1.7.0', '1.6.1', '1.6.0', '1.5.2', '1.5.1', '1.5.0', '1.4.4', '1.4.0', '1.3.2', '1.2.3'],
        url: function(version) {
            return '//yandex.st/dojo/' + version + '/dojo/dojo.js';
        }
    },
    jquery: {
        versions: ['2.1.0', '2.0.3', '2.0.2', '2.0.1', '2.0.0', '1.11.0', '1.10.2', '1.10.1', '1.10.0', '1.9.1', '1.9.0', '1.8.3', '1.8.2', '1.8.1', '1.8.0', '1.7.2', '1.7.1', '1.7.0', '1.6.4', '1.6.3', '1.6.2', '1.6.1', '1.6.0', '1.5.2', '1.5.1', '1.5.0', '1.4.4', '1.4.3', '1.4.2', '1.4.1', '1.4.0', '1.3.2', '1.3.1', '1.3.0', '1.2.6'],
        url: function(version) {
            return '//yandex.st/jquery/' + version + '/jquery.min.js';
        }
    },
    modernizr: {
        versions: ['2.7.1', '2.6.2', '2.6.1', '2.5.3', '2.0.6', '2.0', '1.7', '1.6'],
        url: function(version) {
            return '//yandex.st/modernizr/' + version + '/modernizr.min.js';
        }
    },
    underscore: {
        versions: ['1.6.0', '1.5.1', '1.5.2'],
        url: function(version) {
            return '//yandex.st/underscore/' + version + '/underscore-min.js';
        }
    },
    lodash: {
        versions: ['2.4.0', '2.4.1'],
        url: function(version) {
            return '//yandex.st/lodash/' + version + '/lodash.compat.min.js';
        }
    }
}

module.exports = yandexCdn;
