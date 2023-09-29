import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Edit from '../../components/Edit/Edit';
import StarRating from '../../components/StarRating/StarRating';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import Comment from '../../components/Comment';
import { AiFillDelete } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";
import URL from '../../URL'


export default function CoffeeShopDetailPage() {
  const { id } = useParams();
  const [coffeeShop, setCoffeeShop] = useState({});
  const { user } = useContext(UserContext)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")
  const navigate = useNavigate();


  const handleDelete = () => {
    axios
      .delete(URL+`/coffeeshops/${id}/`, { withCredentials: true })
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  const handleEditSubmit = (editedShop) => {
    axios.put(URL+`/coffeeshops/${id}`, editedShop, { withCredentials: true })
      .then(res => {
        setCoffeeShop(res.data);
      })
  }
  useEffect(() => {
    const fetchPostComments = async () => {
      try {
        const res = await axios.get(URL+`/comments/coffeeshop/${id}`);
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPostComments();
  }, [id]);

  const postComment = async (e) => {
    e.preventDefault()
    try {
      await axios.post(URL+`/comments/create`,
        { comment: comment, author: user.username, coffeeShopId: id, userId: user._id },
        { withCredentials: true })

      window.location.reload(true)

    }
    catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    axios
      .get(URL+`/coffeeshops/${id}/`)
      .then((res) => setCoffeeShop(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const makeGoogleMapsLink = (locationString) => {
    if (locationString && locationString.startsWith("https://www.google.com/maps")) {
      return locationString;
    } else {
      const locationEncoded = encodeURIComponent(locationString);
      return `https://www.google.com/maps?q=${locationEncoded}`;
    }
  };

  const googleMapsLink = makeGoogleMapsLink(coffeeShop.location);

  console.log(coffeeShop)
  return (
    <>
      <div className=" min-h-screen">
      <button className="mx-4 pt-4 ">
          <Link
            to="/coffeeshops"
          >
            <IoArrowBackSharp size={24} />
          </Link>
        </button>
        <div className="container mx-auto px-6 py-4">
          <div className="md:flex justify-center items-center">
            <div className="md:w-4/5 pr-8">
              <div className=" flex flex-row justify-between">
              <h1 className="text-3xl font-bold mb-2">{coffeeShop.name}</h1>
        {user?._id === coffeeShop?.userId && <button
                    onClick={handleDelete}
                    className=" flex flex-row justify-between"
                  >
                    <AiFillDelete size={24} />
                  </button>}
                  </div>
              <p className="text-gray-700 font-semibold">
                {coffeeShop.cityState}
              </p>
              <h5 className="text-gray-600 pb-4 font-semibold ">Written by {coffeeShop.author}</h5>
              <img
                src={coffeeShop.image}
                alt={coffeeShop.name}
                className="w-full lg:w-5/6 h-96 rounded-lg object-cover"
              />
              <div className="mt-6">
                <p className="text-gray-700 my-2">{coffeeShop.description}</p>
                <p className="text-gray-700">
                  <strong>Featured Items:</strong> {coffeeShop.featuredItems}
                </p>
                <p className="text-gray-700 flex gap-2">
                  <strong>Rating:</strong> <StarRating rating={coffeeShop.rating} />
                </p>
                {coffeeShop.website && (
                  <p className="text-gray-700">
                    <strong>Website:</strong>{" "}
                    <a
                      href={coffeeShop.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {coffeeShop.website}
                    </a>
                  </p>
                )}
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-bodyColor underline hover:text-blue-600 "
                >
                  <strong>View Location</strong>
                </a>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              
              <div className="text-center mb-8 flex flex-col  ">
                {user?._id === coffeeShop?.userId && <div className='px-4 py-2 bg-gray-200 text-white hover:bg-gray-400 rounded-lg'>
                  <Edit shop={coffeeShop} onEditSubmit={handleEditSubmit} />
                </div>}
                </div>
              <div className="flex flex-col mt-4">
                <h3 className="mt-6 font-semibold">Comments:</h3>
              <div className="w-full flex flex-col">
                <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="Write a comment" className="outline-none py-2 px-4 mt-4 md:mt-0 rounded-lg" />
                <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-2 mb-4 md:mt-2 rounded-lg">Add Comment</button>
              </div>
                {comments?.map((c) => (
                  <Comment key={c._id} c={c} coffeeShop={coffeeShop} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}