function addcategory($scope, $http) {
    const categoryApi = 'http://localhost:3000/categories'

    $scope.updateIndex = -1;
    $http.get(categoryApi)
        .then((res) => {
            $scope.listCategories = res.data;
        })

    $scope.category = {
        id: 0,
        name: ''
    }

    $scope.submit = (e) => {
        e.preventDefault();
        if ($scope.updateIndex == -1) {
            $scope.insert()
        } else {
            $scope.update()
        }
    }

    $scope.insert = () => {
        $scope.category.name = $scope.categoryname
        $http.post(categoryApi, $scope.category)
        $http.get(categoryApi)
            .then((res) => {
                $scope.listCategories = res.data;
            })
        $scope.$categoryname = ""
        $scope.category = {
            id: 0,
            name: ''
        }
    }


    $scope.categoryname = ""

    $scope.update = () => {
        $scope.category.name = $scope.categoryname
        $http.patch(`${categoryApi}/${$scope.updateIndex}`,$scope.category)
        $http.get(categoryApi)
            .then((res) => {
                $scope.listCategories = res.data;
            })
        $scope.updateIndex = -1;
        $scope.category = {
            id: 0,
            name: ''
        }
    }

    $scope.category = {
        id: 0,
        name: ''
    }

    $scope.handleUpdate = (e, id) => {
        e.preventDefault();
        $scope.updateIndex = id;
        $scope.listCategories.map(cat => {
            if (cat.id === id) {
                $scope.categoryname = cat.name
                return;
            }
        })
    }
}