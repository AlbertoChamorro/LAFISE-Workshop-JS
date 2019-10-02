import category from '../category'

export default function ScoreStarFilter() {

    return (input) => {
            switch (true) {
                case input < category.BEGINNER1.range[1]:
                    return category.BEGINNER1.name
                case input < category.BEGINNER2.range[1]:
                    return category.BEGINNER2.name
                case input < category.STANDARD1.range[1]:
                    return category.STANDARD1.name
                case input < category.STANDARD2.range[1]:
                    return category.STANDARD2.name
                case input < category.PRO.range[1]:
                    return category.PRO.name
                default:
                        return "-"
        }
    }
}