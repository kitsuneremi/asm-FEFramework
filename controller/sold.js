function sold($scope, $http) {
    const productApi = 'http://localhost:3000/products'
    const soldApi = `http://localhost:3000/sold?username=${$scope.$parent.user}`
    const categoryApi = 'http://localhost:3000/categories'

    $scope.item = {
        "id": 0,
        "idpro": 1,
        "quantity": 1,
        "idacc": 0,
        "total": 0
    }

    $scope.listSold = []
    $http.get(soldApi)
        .then(res => {
            $scope.listSold = res.data;
            $scope.listSold.map(item => { console.log(item); })
        })

    $scope.category = {
        "id": 0,
        "name": ""
    }

    $scope.categories = []
    $http.get(categoryApi)
        .then(res => {
            $scope.categories = res.data
        })
    $scope.product = {
        id: 0,
        name: '',
        price: 0,
        category: 0,
        img: ''
    }

    $http.get(productApi)
        .then((res) => {
            $scope.listProducts = res.data;
        })
}