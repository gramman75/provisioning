import CommentModel from "./CommentModel";

export default interface ItemModel {
    title: string,
    content: string,
    type: string,
    url: string,
    user: string,
    time: number,
    time_ago: string,
    points: number,
    id: number,
    comments_count: number,
    comments: Array<CommentModel>
}
