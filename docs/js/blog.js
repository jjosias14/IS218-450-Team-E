// pages/blog.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

function Blog({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('blog'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMetadata = fs.readFileSync(
      path.join('blog', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMetadata);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
