'use strict';

app
    .factory('Todo', function ($resource, $filter) {
        return $resource('https://nameless-inlet-8712.herokuapp.com/resources/todos/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' },
            'save': { method:'POST' }
        });
    });
