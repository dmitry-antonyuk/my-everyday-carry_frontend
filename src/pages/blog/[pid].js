import {useRouter} from "next/router";

const Blog = () => {
    const router = useRouter()
    const { pid } = router.query

    return <p>Master: {pid}</p>
}
export async function getStaticProps(context) {
    const res = await fetch('http://localhost:1337/api/blogs')
    const data = await res.json()
    return {
        props: {data}, // will be passed to the page component as props
    }
}

export default Blog;
