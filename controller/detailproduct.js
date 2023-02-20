function detailproduct($scope, $http, $window){
    const productApi = "http://localhost:3000/products"
    const cartsApi = "http://localhost:3000/carts"
    $scope.index = 1
    try {
        $scope.index = $window.location.href.split("?")[1].split("=")[1].split("&")[0]
    } catch (error) {
        $scope.index = 1
    }
    $scope.quantity = 1;
    $http.get(productApi)
        .then( res => $scope.listProducts = res.data)


    $scope.handleChangeImg = (e, index) => {
        e.preventDefault();
        $scope.index = index
        console.log($scope.index)
    }
    $scope.handleAdd = (e) => {
        e.preventDefault();
        $http.post(cartsApi,{
            "idpro": $scope.index - 1,
            "quantity" : $scope.quantity
        })
    }
}