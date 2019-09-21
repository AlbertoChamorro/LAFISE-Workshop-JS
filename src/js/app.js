// styles
import "../styles/main.css"

import angular from "angular"
import HomeController from "./ui/controllers/home.controller"

angular.module("GithubApp", [])
        .controller("HomeController", HomeController)