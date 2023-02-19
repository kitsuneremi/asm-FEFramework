function Home($scope, $http) {
    const productApi = 'http://localhost:3000/products'

    $http.get(productApi)
        .then(res => {
            $scope.listproducts = res.data
        })
    
}