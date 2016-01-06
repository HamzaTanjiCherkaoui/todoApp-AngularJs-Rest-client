'use strict';

app
    .controller('TodoController', function ($scope, $stateParams, Todo) {
        console.log("Testing the rest API");
        
        $scope.todos = Todo.query();

        $scope.loadAll=function  () {
        	$scope.todos = Todo.query();
        }

        $scope.addTodo=function() {
        	$scope.todo.state="false";
        	$scope.todo.id=Math.floor((Math.random() * 100) + 1);
        	Todo.save($scope.todo,function()
        		{
        			$scope.loadAll();
        		});
        }

        $scope.showEditTodo = function(todo) {
        	console.log("edit modal...");
        	Todo.get({id:todo.id}, function(result) {
                $scope.currentTodo = result;
                
                $('#editModal').modal('show');
            });
        };

        $scope.EditTodo = function() {
        	console.log("edit modal2...");
        	console.log($scope.currentTodo.task);
        	 Todo.update({id: $scope.currentTodo.id},$scope.currentTodo , function(){
        	 $scope.loadAll();
        	$('#editModal').modal('hide'); 	
        	 });
        	
            
        };

        $scope.deleteTodo=function  (todo) {
        	  Todo.delete({id: todo.id},
                function () {
                    $scope.loadAll();
                });
        }
        
        
         
    });
