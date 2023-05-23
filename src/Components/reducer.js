export const initialState = {
    key: [],
    title: [],
    channel: [],
    views: [],
    timestamps: [],
    discription: [],
    mediaUrl: [],
    hyperLink: [],
    commentCount: [],
    pic: [],
};

const reducer = (state, action) => {
    switch(action.type){
        case 'PLAY_VIDEO':
            return {
                ...state,
                key: [action.item.key],
                title: [action.item.title],
                channel: [action.item.channel],
                views: [action.item.views],
                timestamps: [action.item.timestamps],
                discription: [action.item.discription],
                mediaUrl: [action.item.mediaUrl],
                hyperLink: [action.item.hyperLink],
                commentCount: [action.item.commentCount],
                pic: [action.item.pic]
            };

        default:
            return state;
    }
}

export default reducer;