import Link from "next/link";
import { useRouter } from "next/router";
import BlogList from "@/components/Blog/BlogList";



const BlogPage = (props) => {
	const router = useRouter()
	const serviceData = props.data.data;

	return <div>

		{serviceData.map(({ id, attributes }) => (
			<Link key={id} href={'/blog/' + attributes.slug}>
				<BlogList 
				image={attributes.image.data[0].attributes.formats.thumbnail.url} 
				title={attributes.title}
				date={attributes.date}
				/>
			</Link>
		))}

	</div>

}
export default BlogPage;


export async function getStaticProps(context) {
	const res = await fetch(`${process.env.API_URL}/blogs?populate=*`)
	const data = await res.json()
	console.log(context);
	return {
		props: { data }, // will be passed to the page component as props
	}
}
