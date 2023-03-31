import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import Link from "next/link";

const ClinicCard = (props) => {
	return (

	<div className="good-card">
		<div className="row">
			<div className="w50">
				<div className="good-card__main-image">
					<img src={props.image} alt={props.name}/>
				</div>
			</div>

		<div className="w50"> 
		<div className="card">
			<span className="good-card__type">
				{props.type}
			</span>
			<h1 className="good-card__title">
				{props.name}
			</h1>
			<div className="good-card__description">
			{props.description}
                <div className="linkamazon2">
                    <Link href={props.amazonLink}> <span className="linkamazon-text2">Bay</span> </Link>
                </div>

			</div>
		</div>
		<div className="card">
				{props.characterisctics}
		</div>
		</div>

		</div>
	</div>

)}
export default ClinicCard;

