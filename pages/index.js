import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

export default function HomePage({ posts }) {

    return (
        <>
            <Head>
                <title>Blog 😍</title>
                <meta name='description'content={'Blog for all and everyone'}/>
            </Head>
            <Hero/>
            <FeaturedPosts posts={posts}/>
        </>
    );
}

export async function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts
        }
    }
}