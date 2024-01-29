import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";

export default function PostPage({ post }) {
    return (
        <>
            <Head>
                <title>
                    {post.title}
                </title>
                <meta name={'description'} content={post.excerpt}/>
            </Head>
            <PostContent post={post}/>
        </>

    );
}

export async function getStaticProps({ params }) {
    return {
        props: {
            post: getPostData(params.slug)
        },
        revalidate: 600
    }
}

export async function getStaticPaths() {
    const slugs = getPostsFiles().map(file => file.replace(/\.md$/, ''));
    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false
    }
}