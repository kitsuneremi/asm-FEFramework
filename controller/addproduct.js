function addproduct($scope, $http){
    const productApi = 'http://localhost:3000/products'
    const categoryApi = 'http://localhost:3000/categories'

    $scope.file = null;
    $scope.fileLink = "";

    $scope.updateIndex = -1;

    $scope.submit = (e) => {
        e.preventDefault();
        // $scope.insert()
        $scope.update()
    }

    $scope.insert = () => {
        $http.post(productApi, $scope.product, JSON.stringify($scope.product))
            .then(res => {
                console.dir(res);
            })
        $http.get(productApi)
            .then((res) => {
                $scope.listProducts = res.data;
            })
        $scope.product = {
            id: 0,
            name: '',
            price: 0,
            category: 0,
            img: ''
        }
    }

    $scope.update = () => {
        $http.patch(productApi.concat(`/${$scope.updateIndex}`), $scope.product, JSON.stringify($scope.product))
            .then(res => {
                console.dir(res);
            })
        $http.get(productApi)
            .then((res) => {
                $scope.listProducts = res.data;
            })
        $scope.updateIndex = -1;
    }

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
            $scope.listProducts.map(pro => {
                console.log(pro);
            })
        })

    $http.get(categoryApi)
        .then((res) => {
            $scope.listCategory = res.data;
        })

    $scope.handleUpdate = (e, id) => {
        $scope.updateIndex = id;
        $scope.listProducts.map((pro) => {
            if (pro.id === id) {
                // $scope.updateProduct = pro;
                $scope.product = pro;
                return;
            }
        })
    }

    $scope.$watch('file', (newVal) => { 
        if (newVal) {
            console.log(newVal);
        }
    })

    $scope.handleFile = e => {
        console.dir(e)
    }

    $scope.handleDelete = (e, id) => {
        e.preventDefault()
        $http.delete(productApi.concat(`/${id}`))
        $http.get(productApi)
            .then((res) => {
                $scope.listProducts = res.data;
            })
    }
}