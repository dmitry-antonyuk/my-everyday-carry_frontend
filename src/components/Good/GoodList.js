import Link from "next/link";

const Products = (props) => (

		<div className="product-list card">
			<div className="product-list__col product-list__col--image">
				<div className="product-list__image">
					<img src={props.image} alt={props.title}/>
				</div>
			</div>
			<div className="product-list__col">

				<div className="product-head">
					<div className="product-title-name-section">
							<div className="product-list__type">{props.type}</div>							
							<br/>
							<div className="product-price">{props.price} €</div>
							<br/>
							<div className="product-list__title">{props.name}</div>
							<br/>
							<div className="product-list__description">{props.description}</div>
					</div>
				</div>
			</div>
		</div>
)
export default Products;

