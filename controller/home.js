function Home($scope, $http, $window) {
    const productApi = 'http://localhost:3000/products'

    $http.get(productApi)
        .then(res => {
            $scope.listproducts = res.data
        })
    $scope.thisAccount = $window.location.href.split("?")[1].split("=")[1]

}