// import template from './test.directive.html'
import category from '../category'

export default class ScoreStarDirective {

    constructor() {
        // templateUrl
        this.template = `
            <small class="text-muted">
                Score
            </small>
        `
        this.restrict = 'E'
        this.scope = {
            value: '@'
        }

        this.controller = ScoreStarController
        this.controllerAs = 'ctrl'
        this.transluce = true
        this.bindToController = true
    }

    link(scope, element, attrs){
        let value = parseInt(attrs.value), stars = 0
        switch(true) {
            case value < category.BEGINNER1.range[1]:
                stars = category.BEGINNER1.star
                // console.info(category.BEGINNER1.name)
                break
            case value < category.BEGINNER2.range[1]:
                stars = category.BEGINNER2.star
                // console.info(category.BEGINNER2.name)
                break
            case value < category.STANDARD1.range[1]:
                stars = category.STANDARD1.star
                // console.info(category.STANDARD1.name)
                break
            case value < category.STANDARD2.range[1]:
                stars = category.STANDARD2.star
                // console.info(category.STANDARD2.name)
                break
            case value < category.PRO.range[1]:
                stars = category.PRO.star
                // console.info(category.PRO.name)
                break
            default:
                break
        }
        let array = new Number(5).toArray()
        let scoreTmpl = ""
        for (let number in array) {
            if (number <= stars)
                scoreTmpl += `<em class="text-muted"><i class="fa fa-star score-start"></i></em>`
            else
                scoreTmpl += `<em class="text-muted"><i class="fa fa-star"></i></em>`
        }
        // console.log(scope)
        // console.log(element)
        // console.log(attrs)
        element.parent().append(scoreTmpl)
    }
}

class ScoreStarController {
    constructor() {
    }
        
    rankScore() {
    }

    $onInit() {
        // console.log(this.value)
    }
}

ScoreStarDirective.$inject = []