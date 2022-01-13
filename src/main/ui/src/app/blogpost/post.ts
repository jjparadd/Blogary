export interface IPost
{

}

export class PostInfo
{
    constructor(
        public author: Author, 
        public date: string, 
        public comments: string
    ) { }
}

export class Author {
    constructor(
        public username : string = "",
    ){}
}

export class Comment {
    constructor(
        public author : Author = new Author(),
        public date : string = "",
        public content : string = "",
        public post : Post = new Post()
    ){}
}

export class Post
{
    // public title: string
    // public category: string
    // public description: string
    // public postInfo: PostInfo
    // public image: string

    constructor(
        public title: string = "",
        public description: string = "",
        public category: string = "",
        public postInfo: PostInfo = new PostInfo(new Author(), "", ""),
        public imagePath: string = "",
        public postDetailUrl : string = "",
        public postContent : string = "",
        public tags : string[] = [],
        public comments : Comment[] = []
        )
    {
        // this.title = title;
        // this.description = description;
        // this.category = category;
        // this.postInfo = { author: "", date: "", comments: "" };
        // this.image = image;
    }


    static Build(post: Post)
    {
        return new Post(post.title, post.description, post.category, post.postInfo, post.imagePath, post.postDetailUrl, post.postContent, post.tags, post.comments)
    }

}


