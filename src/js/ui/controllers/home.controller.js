import usersServices from '../../services/users.services'
import { paginate } from '../../utils/pagination'
import { getRandomInt } from '../../utils/random'

// Controller
export default class HomeController {

    constructor($scope) {
        // (MVVM) vm = ViewModel, es el responsable de brindarle la informacion a mostrar a la vista, y el encargado de solicitar datos a servicios.
        this.vm = $scope

        this.vm.isLoading = false
        this.vm.selectAllCheckbox = true
        this.vm.selectUsersCheckbox = true
        this.vm.selectOrganizationsCheckbox = true
        this.vm.search = ''
        this.vm.users = []

        this.vm.filterUsers = this.filterUsers
        this.vm.searchUsers = this.searchUsers

        this.vm.data = {
            pageSize: 10,
            page: 1,
            records: [],
            totalCount: 0,
            count: 0
        }

        this.vm.pagination = {
            _numberPages: 0,
            _currentPage: 0,
            _previousPage: 0,
            _nextPage: 0,
            _onSelectPage: this.onSelectPage 
        }

        this.vm.$watch("data", (newValue, oldValue, vm) => {
            if (newValue != oldValue) {

                vm.pagination._numberPages = Math.ceil(newValue.totalCount / newValue.pageSize)
                vm.pagination._currentPage = this.vm.data.page     

                if (vm.pagination._numberPages == 1) {
                    vm.pagination._previousPage = 1
                    vm.pagination._nextPage = 1
                } else if (vm.pagination._numberPages >= vm.pagination._currentPage) {
                    vm.pagination._previousPage = (vm.pagination._currentPage == 1) 
                                                ? vm.pagination._currentPage
                                                : (vm.pagination._currentPage - 1)
                    vm.pagination._nextPage = (vm.pagination._numberPages == vm.pagination._currentPage) 
                                                ? vm.pagination._currentPage
                                                : (vm.pagination._currentPage + 1)
                }
                console.log(this.vm.pagination)
            }
        }, true)


        // Good practices, alternatly to enums
        this.vm.optionsFilters = {
            ALL: 1,
            USERS: 2,
            ORGANIZATIONS: 3
        }

        this.typeUsers = {
            USER: "User",
            ORGANIZATION: "Organization"
        }
    }

    onSelectPage = (page) => {
        if (this.vm.data.page != page) {
            this.vm.data.page = page
            this.vm.data.records = paginate(this.users, this.vm.data.pageSize, this.vm.data.page)
            console.log(this.vm.data)
        }
    }

    filterUsers = (option) => {
        if (this.vm.optionsFilters.ALL == option) {
            this.vm.selectUsersCheckbox = this.vm.selectAllCheckbox
            this.vm.selectOrganizationsCheckbox = this.vm.selectAllCheckbox
        } else {
            this.vm.selectAllCheckbox = this.vm.selectUsersCheckbox && this.vm.selectOrganizationsCheckbox
        }

        this.searchUsers()
    }

    searchUsers = () => {
        this.vm.isLoading = true
        usersServices.getUsers(this.vm.search)
            .then(response => {
                this.applyTransformations(response)
            }).catch(error => {
                console.log(error)
                this.vm.isLoading = false
                this.vm.$apply()
            })
    }

    applyTransformations = (response) => {
        response = this.vm.search.trim() ? response.items : response
        this.users = response.filter(user => {

            if (!this.vm.selectAllCheckbox && this.vm.selectUsersCheckbox) 
                return user.type == this.typeUsers.USER

            if (!this.vm.selectAllCheckbox && this.vm.selectOrganizationsCheckbox) 
                return user.type == this.typeUsers.ORGANIZATION

            return user
        }).map(user => {
            user.followers = getRandomInt(0, 1000)
            return user
        })

        this.vm.data.records = paginate(this.users, this.vm.data.pageSize, this.vm.data.page)
        this.vm.data.totalCount = response.length
        this.vm.data.count = this.vm.data.records.length
        console.log(this.vm.data)
        this.vm.isLoading = false
        this.vm.$apply()
    }

    $onInit() {
       this.searchUsers()
    }
}

HomeController.$inject = ['$scope'];