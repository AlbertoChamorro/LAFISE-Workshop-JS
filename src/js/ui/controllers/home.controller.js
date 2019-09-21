import usersServices from '../../services/users.services'
import {paginate} from '../../utils/pagination'

export default class HomeController {

    constructor($scope) {
        this.$scope = $scope
        this.$scope.selectAllCheckbox = true
        this.$scope.selectUsersCheckbox = false
        this.$scope.selectOrganizationsCheckbox = false
        this.$scope.search = ''
        this.$scope.count = 0
        this.$scope.users = []
        this.$scope.filterUsers = this.filterUsers
        this.$scope.pagination = {
            pageSize: 10,
            page: 1,
            records: []
        }
    }

    searchUser(){
        usersServices.getUsers(this.$scope.search)
            .then(response => {
                let data = response
                this.$scope.pagination.records = paginate(data, this.$scope.pagination.pageSize, this.$scope.pagination.page)
                console.log(this.$scope.pagination)
            }).catch(error => {
                console.log(error)
            })
    }

    filterUsers = () => {
        console.log("Change filters")
    }

    $onInit() {
       this.searchUser()
    }
}

HomeController.$inject = ['$scope'];