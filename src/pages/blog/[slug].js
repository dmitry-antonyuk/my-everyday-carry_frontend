import Link from "next/link";
import { useRouter } from "next/router";
import BlogCard from "@/components/Blog/BlogCard";


const OneBlogPage = (props) => {
	
	const {tags} = props.data.attributes;
	
	return (
		<div>
			<BlogCard 
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

