const BlogCard = (props) => (
    <div>
        <h2>
            {props.name}
        </h2>
        <p>
            {props.post}
        </p>
        <img src={props.image}/>
    </div>
)
export default BlogCard;