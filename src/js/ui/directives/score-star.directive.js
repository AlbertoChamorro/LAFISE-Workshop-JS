// import template from './test.directive.html'
import category from '../category'

export default class ScoreStarDirective {

    constructor() {
        // this.templateUrl = template
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
        let value = attrs.value.toInt(), stars = 0
        switch(true) {
            case value < category.BEGINNER1.range[1]:
                stars = category.BEGINNER1.star
                break
            case value < category.BEGINNER2.range[1]:
                stars = category.BEGINNER2.star
                break
            case value < category.STANDARD1.range[1]:
                stars = category.STANDARD1.star
                break
            case value < category.STANDARD2.range[1]:
                stars = category.STANDARD2.star
                break
            case value < category.PRO.range[1]:
                stars = category.PRO.star
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
        element.parent().append(scoreTmpl)
    }
}

class ScoreStarController {
    constructor() {
    }
        
    rankScore() {
    }

    $onInit() {
    }
}

ScoreStarDirective.$inject = []