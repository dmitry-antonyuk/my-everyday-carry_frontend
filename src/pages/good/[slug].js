import Link from "next/link";
// import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
import ReactMarkdown from 'react-markdown';
import GoodCard from "@/components/Good/GoodCard";
import GoodGallery from "@/components/Good/GoodGallery";


const Good = (props) => {

	const {
		type, 
		name, 
		price, 
		amazonLink, 
		description, 
		characterisctics,
		pros,
		gallery,
		cons,
		dimensions,
		weight,
		materials,
		additionalFeatures,
		height
	} = props.data.attributes;
	const tags = props.data.attributes;
	const image = props.data.attributes.image.data.attributes.url;
	

	console.log("tags", tags)

	console.log("props", props)
	// console.log("tags2", props.data.attributes)

	return (
		<div className="container">
			<GoodCard
				image={image}
				name={name}
				type={type}
				price={price}
				amazonLink={amazonLink}
				description={description}
				characterisctics={characterisctics}
				pros={pros}
				cons={cons}
				dimensions={dimensions}
				weight={weight}
				materials={materials}
				additionalFeatures={additionalFeatures}
				height={height}				
			/>
			<GoodGallery
				gallery={gallery}
			/>
		</div>
	);
};
export default Good;

export async function getStaticProps(context) {
  const res = await fetch(

    `${process.env.API_URL}/goods?filters[slug][$eq]=${context.params.slug}&populate[0]=tags&populate[1]=image.singleMedia&populate[2]=gallery.media`
  );

  const response = await res.json();

  return {
    props: { data: response.data[0] }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {

  const res = await fetch(`${process.env.API_URL}/goods/`);
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

