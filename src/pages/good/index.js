import {useRouter} from "next/router";
import Link from "next/link";
import GoodList from "@/components/Good/GoodList";

const GoodsPage = (props) => {
    const serviceData = props.data.data;
    return <div className="container">
        {serviceData.map(({id, attributes }) => (
            <div key={id}><Link key={id} href={'/good/' + attributes.slug}> 
                <GoodList
                    name={attributes.name}
                    type={attributes.type}
                    description={attributes.description}

                    image={attributes.image.data.attributes.formats.thumbnail.url}
                    
                    price={attributes.price}
                    gallery={attributes.gallery}
                    amazonLink={attributes.amazonLink}
                />
            </Link>
                <div className="linkamazon">
                <Link href={attributes.amazonLink}> <span className="linkamazon-text">Buy</span> </Link>
                </div>
            </div>

        ))}
    </div>
}
export default GoodsPage;


export async function getStaticProps(context) {
    const res = await fetch(`${process.env.API_URL}/goods?populate[0]=image.media`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, // will be passed to the page component as props
    }
}