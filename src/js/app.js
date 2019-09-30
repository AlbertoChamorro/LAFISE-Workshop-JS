// Prototypes
import "../js/utils/objectHelper"
// styles
import "../styles/main.css"

import angular from "angular"
import HomeController from "./ui/controllers/home.controller"
import ScoreStarDirective from "./ui/directives/score-star.directive"

angular.module("GithubApp", [])
        .controller("HomeController", HomeController)
        .directive("scoreStar", () => new ScoreStarDirective)