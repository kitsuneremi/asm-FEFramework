function cart($scope, $http) {
    const productApi = 'http://localhost:3000/products'
    const cartApi = 'http://localhost:3000/carts'
    const categoryApi = 'http://localhost:3000/categories'

    $scope.item = {
        "id": 0,
        "idpro": 1,
        "quantity": 1
    }

    $scope.carts = []
    $http.get(cartApi)
        .then(res => {
            $scope.carts = res.data;
            $scope.carts.map(item => { console.log(item); })
        })

    $scope.category = {
        "id": 0,
        "name": ""
    }

    $scope.categories = []
    $http.get(categoryApi)
        .then(res => {
            $scope.categories = res.data
            $scope.categories.map(cat => { console.log(cat); })
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
    $scope.handleDelete = (e, id) => {
        e.preventDefault();
        $http.delete(`${cartApi}/${id}`)
        $http.get(categoryApi)
            .then(res => {
                $scope.categories = res.data
                $scope.categories.map(cat => { console.log(cat); })
            })
    }

}