import { useRouter  } from "next/router";
import BlogCard from "@/components/Blog/BlogCard-old";


const Post = (props) => {
    const router = useRouter()
    const { pid } = router.query
    const {Name, Post} = props.data.data.attributes;
    console.log(props.data);
    console.log(props.data.data.attributes.Image.data[0].attributes.formats.large.url);

    return (
        <>
        <BlogCard name={Name} image={props.data.data.attributes.Image.data[0].attributes.formats.large.url} post={Post}/>
        </>
    )
}
export default Post;

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/api/blogs/${context.params.pid}?populate=*`)
    const data = await res.json()

    return {
        props: {data}, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    return {
        paths: [{params: {pid: '1'}}, {params: {pid: '2'}}],
        fallback: false, // can also be true or 'blocking'
    }
}