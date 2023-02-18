function detailproduct($scope, $http){
    const productApi = "http://localhost:3000/products"
    const cartsApi = "http://localhost:3000/carts"
    $scope.index = 1
    $scope.src = [
        {index: 1,src: "../img/kiana.png"},
        {index: 2,src: "../img/DetailProduct1.png"},
        {index: 3,src: "../img/ys.jpg"},
    ]
    $scope.quantity = 1;
    $http.get(productApi)
        .then( res => $scope.listProducts = res.data)


    $scope.handleChangeImg = (e, index) => {
        e.preventDefault();
        $scope.index = index
        console.log($scope.index)
    }
    $scope.handleAdd = (e) => {
        $http.post(cartsApi,{
            "idpro": $scope.index,
            "quantity" : $scope.quantity
        })
    }
}