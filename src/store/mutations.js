import * as types from './mutation-types'

export default {
    [types.ADD_TOTAL_TIME] (state, time) {
        state.totalTime = state.totalTime + time
    },
    [types.DEC_TOTAL_TIME] (state, time) {
        state.totalTime = state.totalTime - time
    },
    [types.SAVE_PLAN] (state, plan) {
        const avatar = 'http://pic.qiantucdn.com/58pic/11/55/89/80U58PIC8m2.jpg';

        state.list.push(
            Object.assign({name: '瓶子', avatar: avatar}, plan)
        )
    },
    [types.DELETE_PLAN] (state, idx) {
        state.list.splice(idx, 1);
    },
    [types.TOGGLE_PROGRESS] (state, idx) {
        if(state.list[idx].progress == '未完成') {
            state.list[idx].progress = '已完成';
            state.totalTime -= state.list[idx].totalTime;
        }else {
            state.list[idx].progress = '未完成';
            state.totalTime += parseFloat(state.list[idx].totalTime);
        }


    }
}