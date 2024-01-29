import PostHeader from "./post-header";
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

export default function PostContent({ post }) {
    const customRenderers = {
        img(image) {
            return <Image
                src={`/images/posts/${post.slug}/${image.src}`}
                alt={image.alt}
                width={600}
                height={300}
            />
        },
        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

            return <SyntaxHighlighter language={language} children={code.children} style={atomDark}/>
        }
    };

    return (
        <article className={classes.content}>
            <PostHeader
                title={post.title}
                image={`/images/posts/${post.slug}/${post.image}`}
            />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    );
}