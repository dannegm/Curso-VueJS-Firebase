export default {
    orderedPostByDate (state) {
        return state.posts.sort((postA, postB) => {
            const dateA = new Date (postA.date)
            const dateB = new Date (postB.date)
            return dateB.getTime() - dateA.getTime()
        })
    }
}
