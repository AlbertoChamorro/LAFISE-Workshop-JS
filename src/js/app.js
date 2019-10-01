// Prototypes
import "../js/utils/objectHelper"

// TODO: added "".toInt()

// styles
import "../styles/main.css"

import angular from "angular"
import HomeController from "./ui/controllers/home.controller"
import ScoreStarDirective from "./ui/directives/score-star.directive"
import ScoreStarFilter from "./ui/filters/score-star.filter"
import CapitalizeFilter from "./ui/filters/capitalize.filter"

angular.module("GithubApp", [])
        .controller("HomeController", HomeController)
        .directive("scoreStar", () => new ScoreStarDirective)
        .filter("scoreStar", ScoreStarFilter)
        .filter("capitalize", CapitalizeFilter)