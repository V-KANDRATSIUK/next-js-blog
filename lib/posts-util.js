import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
    return fs.readdirSync(postsDir);
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDir, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        slug: postSlug,
        ...data,
        content
    };
}

export function getAllPosts() {
    const postFiles = getPostsFiles();
    return postFiles
        .map(file => getPostData(file))
        .sort((postA, postB) => postA.date > postB.date ? -1 : 1);
}

export function getFeaturedPosts() {
    return getAllPosts().filter(post => post.isFeatured);
}