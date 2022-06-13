import Link from "next/link";
import { client } from "../libs/client";
import styles from './styles/Home.module.scss';

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id} className={styles.blog}>
            <img src={`${blog.eyecatch.url}?fit=crop&w=200&h=100&q=20`}  />
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
            <br/>
            <span className={styles.category}>カテゴリー：{blog.category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blog: data.contents,
    },
  };
};