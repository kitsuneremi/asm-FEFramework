function allproducts($scope, $http, $window){
    const productApi = 'http://localhost:3000/products'

    $http.get(productApi)
        .then(res => {
            $scope.listproducts = res.data
        })    
    $scope.handleClick = (e,id) => {
        console.log("x");
        $window.location.href = `#detailproduct?productid=${id}`
    }
}