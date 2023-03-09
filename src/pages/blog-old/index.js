import { useRouter  } from "next/router";
import Link from "next/link";

import BlogCard from "@/components/Blog/BlogCard-old";


const BlogList = (props) => {
    const router = useRouter()
    const ListBlog = props.data.data;
    console.log(props.data);
    console.log(ListBlog);

    return <div className="container">

    {serviceData.map(({id, attributes }) => (
        <Link key={id} href={'/blog/' + attributes.slug}>
            
            <BlogCard tags={attributes.tags.data}
                    name={attributes.Name}
                    image={attributes.image.data.attributes.formats.thumbnail.url}
                    author={attributes.author}
                    description={attributes.description}
                    title={attributes.title}
                    date={attributes.date}
                    />{attributes.Name}
                    
        </Link>
    ))}

</div>

}
export default BlogPage;
export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/api/blogs/?populate=*`)
    const data = await res.json()
    return {
        props: {data}, // will be passed to the page component as props
    }
}