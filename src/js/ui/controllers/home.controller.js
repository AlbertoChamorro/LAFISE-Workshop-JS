import usersServices from '../../services/users.services'
import { paginate } from '../../utils/pagination'

export default class HomeController {

    constructor($scope) {
        this.$scope = $scope

        this.$scope.isLoading = false
        this.$scope.selectAllCheckbox = true
        this.$scope.selectUsersCheckbox = true
        this.$scope.selectOrganizationsCheckbox = true
        this.$scope.search = ''
        this.$scope.count = 0
        this.$scope.users = []

        this.$scope.filterAll = this.filterAll
        this.$scope.filterUsers = this.filterUsers
        this.$scope.filterOrganizations = this.filterOrganizations
        this.$scope.searchUsers = this.searchUsers

        this.$scope.data = {
            pageSize: 10,
            page: 1,
            records: []
        }
    }

    filterAll = () => {
        this.$scope.selectUsersCheckbox = this.$scope.selectAllCheckbox
        this.$scope.selectOrganizationsCheckbox = this.$scope.selectAllCheckbox
        this.searchUsers()
    }

    filterUsers = () => {
        this.$scope.selectAllCheckbox = this.$scope.selectUsersCheckbox && this.$scope.selectOrganizationsCheckbox
        this.searchUsers()
    }

    filterOrganizations = () => {
        this.$scope.selectAllCheckbox = this.$scope.selectUsersCheckbox && this.$scope.selectOrganizationsCheckbox
        this.searchUsers()
    }

    searchUsers = () => {
        this.$scope.isLoading = true
        usersServices.getUsers(this.$scope.search)
            .then(response => {
                this.applyTransformations(response)
            }).catch(error => {
                console.log(error)
                this.$scope.isLoading = false
                this.$scope.$apply()
            })
    }

    applyTransformations = (data) => {
        data = this.$scope.search.trim() ? data.items : data
        this.$scope.data.records = data.filter(user => {
            if (!this.$scope.selectAllCheckbox && this.$scope.selectOrganizationsCheckbox){
                return user.type == "Organization"
            }

            if (!this.$scope.selectAllCheckbox && this.$scope.selectUsersCheckbox) {
                return user.type == "User"
            }

            return user
        }).map(user => {
            user.profile_url = "https://rrbus.com/img/app/background/user-center/bg1.png"
            return user
        })

        this.$scope.count = this.$scope.data.records.length
        //this.$scope.data.records = paginate(data, this.$scope.data.pageSize, this.$scope.data.page)
        console.log(this.$scope.data)
        this.$scope.isLoading = false
        this.$scope.$apply()
    }

    $onInit() {
       this.searchUsers()
    }
}

HomeController.$inject = ['$scope'];