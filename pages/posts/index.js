import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

export default function AllPostsPage({ posts }) {
    return (
        <>
            <Head>
                <title>All my Posts</title>
                <meta name={'description'} content={'A list of programming-related tutorials and posts!'}/>
            </Head>
            <AllPosts posts={posts}/>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            posts: getAllPosts()
        },
        revalidate: 2000
    }
}