import {useRouter} from "next/router";


const Service = (props) => {
    const router = useRouter()
    const {pid} = router.query
    const serviceData = props.data.data.attributes;
    console.log(props.data);
    return <div>
        <h1>
            {serviceData.Name}
        </h1>
    </div>

}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/api/services/${context.params.pid}`)
    const data = await res.json()
    console.log(context);
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

export default Service;
