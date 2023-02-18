function addcategory($scope, $http){
    const categoryApi = 'http://localhost:3000/categories'

    $scope.updateIndex = -1;
    $http.get(categoryApi)
        .then((res) => {
            $scope.listCategories = res.data;
        })

    $scope.category = {
        id : 0,
        name : ''
    }

    $scope.submit = (e) => {
        e.preventDefault();
        $scope.insert()
        // $scope.update()
    }

    $scope.insert = () => {
        $http.post(categoryApi,$scope.category,JSON.stringify($scope.category))
            .then(res => {
                console.dir(res);
            })
        $http.get(categoryApi)
            .then((res) => {
                $scope.listCategories = res.data;
            })
        $scope.category = {
            id : 0,
            name : ''
        }

        $scope.update = () => {
            $http.patch(categoryApi.concat(`/${$scope.updateIndex}`),$scope.category,JSON.stringify($scope.category))
                .then(res => {
                    console.dir(res);
                })
            $http.get(categoryApi)
                .then((res) => {
                    $scope.listCategories = res.data;
                })
            $scope.updateIndex = -1;
        }

        $scope.category= {
            id : 0,
            name : '',
        }

        $scope.handleUpdate = (e, id) => {
            console.log(id);
            e.preventDefault();
            $scope.updateIndex = id;
            $scope.listCategories.map(cat => {
                if(cat.id === id){
                    $scope.category = cat;
                    return ;
                }
            })
        }
    }
}