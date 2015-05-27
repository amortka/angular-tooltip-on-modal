angular.module('app.pages.hello')
    .controller('HelloCtrl', function ($modal) {
        var vm = this;
        vm.name = 'World';

        vm.items = [];
        for (var i=0; i<100; i++) {
            vm.items.push(i);
        }

        vm.range = function(n) {
            return new Array(n);
        };


        vm.open = function (size) {

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return vm.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                vm.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });

        };

    });