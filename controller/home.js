function Home($scope, $http, $window) {
    const productApi = 'http://localhost:3000/products'

    $http.get(productApi)
        .then(res => {
            $scope.listproducts = res.data
        })
        try {
            $scope.thisAccount = $window.location.href.split("?")[1].split("=")[1].split("&")[0]
            $scope.$parent.user = $scope.thisAccount
        } catch (error) {
            $scope.thisAccount = "undefine"
        }
    
    $scope.handleClick = (e,id) => {
        $window.location.href = `#detailproduct?productid=${id}`
    }
}