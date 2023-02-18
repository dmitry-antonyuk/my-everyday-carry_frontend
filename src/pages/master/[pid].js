import {useRouter} from "next/router";

const Master = () => {
    const router = useRouter()
    const { pid } = router.query

    return <p>Master: {pid}</p>
}
export async function getStaticProps(context) {
    const res = await fetch('http://localhost:1337/api/masters')
    const data = await res.json()
    return {
        props: {data}, // will be passed to the page component as props
    }
}

export default Master;
