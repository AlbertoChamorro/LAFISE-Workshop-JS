//  import template from './test.directive.html';

export default class ScoreStarDirective {

    constructor($compile) {
        // templateUrl
        this.$compile = $compile
        this.template = `
            <small class="text-muted">
                Score
                <em><i class="fa fa-star score-start"></i></em>
                <em><i class="fa fa-star"></i></em>
                <em><i class="fa fa-star"></i></em>
                <em><i class="fa fa-star"></i></em>
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
        let value = ''// attrs.value
        let scoreTmpl = `<small class="text-muted"><em><i class="fa fa-star">${value}</i></em> </small>`
        console.log(scope)
        console.log(element)
        console.log(attrs)
        element.parent().append(scoreTmpl)
    }
}

class ScoreStarController {
    constructor() {
        this.name = 'David';
    }
}

ScoreStarDirective.$inject = ['$compile'];