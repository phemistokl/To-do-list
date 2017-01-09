import { fromJS, List, Map } from 'immutable';

export default function undoable(reducer) {
    const initialState = fromJS({
        before: [],
        current: reducer(undefined, {}),
        after: []
    });

    return function (state = initialState, action) {
        switch (action.type) {
            case 'UNDO': {
                const after = state.get('after').push(state.get('current'));
                const before = state.get('before').pop();
                const current = state.get('before').last();

                return state
                    .set('after', after)
                    .set('current', current)
                    .set('before', before);
            }

            case 'REDO': {
                const after = state.get('after').shift();
                const before = state.get('before').push(state.get('current'));
                const current = state.get('after').first();

                return state
                    .set('after', after)
                    .set('current', current)
                    .set('before', before);
            }

            default: {
                const newCurrentState = reducer(state.get('current'), action);

                if (newCurrentState === state.get('current')) {
                    return state;
                }

                const before = state.get('before').push(state.get('current'));
                const after = new List();

                return state
                    .set('after', after)
                    .set('current', newCurrentState)
                    .set('before', before);
            }
        }
    }
}
