export default {
    orderedPostByDate(state) {
        const copy = [...state.posts];
        return copy.sort((postA, postB) => {
            const dateA = new Date(postA.date);
            const dateB = new Date(postB.date);
            return dateB.getTime() - dateA.getTime();
        });
    },
};
