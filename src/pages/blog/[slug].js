import Link from "next/link";
// import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
// import ReactMarkdown from 'react-markdown';
import BlogCard from "@/components/Blog/BlogCard";

// import AuthorPhoto from "@/components/Blog/AuthorPhoto";

const OneBlogPage = (props) => {
	
	// const { title, description, richtext } = props.data.attributes;
	// const {url} = props.data.attributes.image.data[0].attributes;
	// const {name, desc } = props.data.attributes.authors.data[0].attributes;
	const {tags} = props.data.attributes;
	// const {date} = props.data.attributes;
	
	return (
		<div>
			<BlogCard 
				// title={title}
				// authorName={name}
				// authorDate={date}
				// image={url} 
				// description={description}
				tags={tags.data}




			/>
			
		</div>
	);
};
export default OneBlogPage;

export async function getStaticProps(context) {
	const res = await fetch(
		`${process.env.API_URL}/blogs?filters[slug][$eq]=${context.params.slug}&populate=*`
	);
	
	const response = await res.json();

	return {
		props: { data: response.data[0] }, // will be passed to the page component as props
	};
}

export async function getStaticPaths() {
	
	const res = await fetch(`${process.env.API_URL}/blogs?populate[0]=tags&populate[1]=authors.image.media`);
	const data = await res.json();

	return {
		paths: data.data.map(({ attributes }) => ({
			params: {
				slug: attributes.slug,
			},
		})),
		fallback: false, // can also be true or 'blocking'
	};
}

