function AddProduct($scope, $http) {
    const productApi = 'http://localhost:3000/products'
    const categoryApi = 'http://localhost:3000/categories'

    $scope.file = null;
    $scope.fileLink = "";

    $scope.updateIndex = -1;

    $scope.id = 0;
    $scope.name = "";
    $scope.price = 0;
    $scope.category = 0;
    $scope.img = "";
    $scope.description = "";

    $scope.product = {
        id: 0,
        name: '',
        price: 0,
        category: 0,
        img: '',
        description: ""
    }

    $scope.submit = (e) => {
        e.preventDefault();
        if ($scope.updateIndex == -1) {
            $scope.insert()
        } else {
            $scope.update()
        }

    }

    $scope.insert = () => {
        $scope.product.id = $scope.id
        $scope.product.name = $scope.name
        $scope.product.price = $scope.price
        $scope.product.category = $scope.category
        $scope.product.img = $scope.img
        $scope.product.description = $scope.description

        $http.post(productApi, $scope.product)
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
        $http.get(productApi)
            .then((res) => {
                $scope.listProducts = res.data;
            })
    }

    $scope.update = () => {
        $scope.product.id = $scope.id
        $scope.product.name = $scope.name
        $scope.product.price = $scope.price
        $scope.product.category = $scope.category
        $scope.product.img = $scope.img
        $scope.product.description = $scope.description
        console.log($scope.name);

        $http.put(`${productApi}/${$scope.updateIndex}`, $scope.product)
        $http.get(productApi)
            .then((res) => {
                $scope.listProducts = res.data;
            })
        $scope.updateIndex = -1;
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
        e.preventDefault();
        $scope.updateIndex = id;
        $scope.listProducts.map((pro) => {
            if (pro.id === id) {
                $scope.id = pro.id
                $scope.name = pro.name
                $scope.price = pro.price
                $scope.category = pro.category
                $scope.img = pro.img
                $scope.description = pro.description
            }
        })
    }



    $scope.$watch('file', (newVal) => {
        if (newVal) {
            $scope.img = `../img/${newVal.name}`
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