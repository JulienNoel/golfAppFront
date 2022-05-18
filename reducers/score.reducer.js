export default function (score = [], action) {
        if (action.type == 'onSubmitScore') {
                return action.score;
        } else {
                return score
        }
}