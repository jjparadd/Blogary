import {Post, Author, PostInfo} from './blogpost/post'
export class UiTestData {

    private static _posts: Post[] = []; 
    public static get posts(): Post[]
    {
        return UiTestData._posts;
    }
    
    static buildTestPosts() : Post[] {
        let staticPost : Post = new Post();
        staticPost.title = "This is test title";
        
        staticPost.category = "Lifestyle";
        staticPost.postInfo = new PostInfo(new Author("Admin"), "May 31, 2020", "20");
        
        staticPost.postDetailUrl = "post-details.html";
        staticPost.postContent = `Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">Contact TemplateMo</a> for more info. Thank you.`;
        staticPost.imagePath = "assets/images/blog-post-01.jpg";
        staticPost.tags = ["Beauty", "Nature"];

        UiTestData.posts[0] = staticPost;

        let staticPost2 = new Post();
        staticPost2.title = "This is the second test title"
        staticPost2.category = "healhty"
        staticPost2.imagePath = "assets/images/blog-post-02.jpg";
        UiTestData._posts[1] = staticPost2;

        return UiTestData.posts;
    }
}
