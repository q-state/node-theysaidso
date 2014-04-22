function TheySaidSoDefinition() {

    var url = require('url');

    this.buildUrl = function(query) {
        return url.format({
            protocol: 'http',
            host: 'api.theysaidso.com',
            pathname: 'qod',
            query: query
        });
    };
};

TheySaidSoDefinition.prototype.getQuoteOfTheDay = function () {
    var Q = require('q');
    var jpath = require('node-jpath');
    var request = require('request');

    var fqUrl = this.buildUrl({ });

    console.log('calling ', fqUrl);

    var deferred = Q.defer();

    request(fqUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body),
                match = result;

            deferred.resolve(match);
        }
        else
            deferred.reject(error);
    });

    return deferred.promise;
};

module.exports = exports = new TheySaidSoDefinition();