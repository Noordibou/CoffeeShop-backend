const Shop = (props) => {
    return (
        <>
            <h3>Name: {props.shop.name}</h3>
            <h3>Writer: {props.shop.author}</h3>
            <p>Location: {props.shop.location}</p>
            <p>City/State: {props.shop.cityState}</p>
            <p>Featured Items: {props.shop.featuredItems}</p>
            <p>Description: {props.shop.description}</p>
            <p>Website: {props.shop.website}</p>
            <p>Rating: {props.shop.rating}</p>
            <p>Image: {props.shop.image}</p>
        </>
    )
}

export default Shop