import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function Home({ posts }) {
	return (
	<div className="bg-white">
		<Head>
            <title>Blog</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

		<main>
			<h1 className="text-5xl text-center font-black p-10"> BLOG </h1>
			{posts.map((post) => (
				<div  className="md:w-1/2 w-full m-auto p-5">
					<h1 className="text-3xl mb-2 font-bold capitalize">{post.title}</h1>
					<p  className="font-sans">{post.body}</p>
				</div>
			))}
		</main>

		<footer className="">
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
export default Home



