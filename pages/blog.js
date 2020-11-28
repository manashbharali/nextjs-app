import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Blog({ posts }) {
	return (
	<div className={styles.container}>

		<Head>
            <title>Blog</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

		<main>

			<h1 className={styles.title}> BLOG </h1>

			{posts.map((post) => (

				<div  className={styles.post}>
					<h1 className={styles.h3}>{post.title}</h1>
					<p  className={styles.para}>{post.body}</p>
				</div>
			
			))}


		</main>


		<footer className={styles.footer}>
			Deploy on Vercel
		</footer>


	</div>
	)
}

export async function getStaticProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await res.json()
	return {
	  props: {
		posts,
	  },
	}
  }
export default Blog



