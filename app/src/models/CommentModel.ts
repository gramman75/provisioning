export default interface CommentModel {
    comments: Array<CommentModel>,
    comments_count: number,
    content: string,
    id: number,
    level: number,
    time: number,
    time_ago: string,
    type: string,
    url: string,
    user: string
}