import { client } from '../../libs/client';
import styles from '../styles/Home.module.scss';

export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <img src={`${blog.eyecatch.url}?fit=crop&w=950&h=500`} />
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <p>カテゴリー：{blog.category.name}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};