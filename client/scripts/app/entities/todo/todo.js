'use strict';

app
    .config(function ($stateProvider) {
        $stateProvider
            .state('todo', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/todo/todo.html',
                        controller: 'TodoController'
                    }
                }
            });
            
    });
