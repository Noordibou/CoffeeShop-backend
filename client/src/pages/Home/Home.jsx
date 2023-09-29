import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarRating from '../../components/StarRating/StarRating';
import URL from '../../URL'

export default function CoffeeShopsPage() {
    const [coffeeShop, setCoffeeShop] = useState([]);

    const getCoffeeShop = () => {
        axios
            .get(URL+`/coffeeshops/`)
            .then((response) => setCoffeeShop(response.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getCoffeeShop();
    }, []);

    return (
        <div className="bg-gray-100 ">
            <main >
                <div className="mx-auto flex flex-col justify-center max-w-7xl px-8 md:px-6 lg:w-4/5  ">
                    <div className='px-12'>
                        <h1 className="text-lg md:text-2xl text-center font-semibold pt-6 ">
                            Welcome to the Ultimate Coffee Adventure!
                        </h1>
                    </div>

                    <div className="my-4 flex flex-col items-center max-w-8xl md:px-0 justify-center">
                        <img
                            src="https://images.pexels.com/photos/5812847/pexels-photo-5812847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Coffee Shops"
                            className="w-full md:h-[28rem] object-cover"
                        />
                    </div>
                    <div className=''>
                        <div className="flex flex-row">
                            <p className="mt-2 text-gray-700 text-center md:text-base text-sm md:text-left md:basis-2/3">
                                Are you a fellow coffee enthusiast? Do you find joy in the comforting aroma of freshly roasted beans and the soothing embrace of a warm cup of java? Well, you're in the right place! Join me on a journey through some of the coziest, trendiest, and most delightful coffee shops from around the world. I'm your guide to all things coffee, and I can't wait to share my caffeinated escapades with you.

                            </p>
                        </div>
                        <div className="flex flex-row md:justify-end justify-center pt-4 md:pt-0">
                            <p className="md:mt-2 text-gray-700 text-center md:text-base text-sm md:text-right font-semibold md:basis-1/3">
                                Uncover Hidden Coffee Gems
                            </p>
                        </div>
                        <div className="py-4 flex flex-row justify-center md:justify-end">
                            <img
                                src="https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Coffee Shops"
                                className="w-full md:w-3/5 max-w-2xl md:h-[22rem] object-cover "
                            />
                        </div>
                        <div className="flex flex-row md:justify-end justify-center">
                            <p className="text-gray-700 text-center md:text-base text-sm md:text-right md:basis-2/3">
                                As your coffee-sipping travel companion, I'm on a mission to unearth those hidden coffee gems that are often overlooked. From hole-in-the-wall treasures to the hippest espresso bars in town, I'll take you on a virtual tour of these caffeine havens. Together, we'll explore the unique stories behind each brew and the passionate baristas who craft them.

                            </p>
                        </div>
                        <div className="flex flex-row md:justify-start justify-center pt-4 md:pt-0">
                            <p className="md:mt-2 text-gray-700 text-center md:text-base text-sm font-semibold md:text-left md:basis-1/3">
                                Brew-tiful Experiences Await
                            </p>
                        </div>
                        <div className="py-4 flex flex-row justify-center md:justify-start ">
                            <img
                                src="https://images.unsplash.com/photo-1526547319484-63dce467060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Coffee Shops"
                                className="w-full md:w-3/5 max-w-2xl md:h-[22rem] object-cover"
                            />
                        </div>
                        <div className="flex flex-row md:justify-start justify-center">
                            <p className="text-gray-700 text-center md:text-base text-sm md:text-left md:basis-2/3">
                                Get ready to embark on a journey of aroma, flavor, and ambiance. From the artisanal roasters who take pride in their craft to the cozy corners that offer refuge from the daily grind, there's a brew-tiful experience waiting for you at every corner. So, grab your favorite mug, get comfy, and let's start this delightful coffee adventure together!

                            </p>
                        </div>
                        <div className="flex flex-row md:justify-end justify-center pt-4 md:pt-0">
                            <p className="md:mt-2 text-gray-700 text-center md:text-base text-sm font-semibold md:text-right md:basis-1/3">
                                Stay Caffeinated and Curious
                            </p>
                        </div>
                        <div className="py-4 flex flex-row justify-center md:justify-end">
                            <img
                                src="https://images.unsplash.com/photo-1524955638205-d0194538389d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                alt="Coffee Shops"
                                className="w-full md:w-3/5 max-w-2xl md:h-[22rem] object-cover"
                            />
                        </div>
                        <div className="flex flex-row md:justify-end justify-center pb-4">
                            <p className="text-gray-700 text-center md:text-base text-sm md:text-right md:basis-2/3">
                                Don't forget to stay caffeinated and curious as we dive into the world of coffee. Whether you're a seasoned coffee aficionado or a newbie looking to explore the depths of the coffee universe, there's something here for everyone. So, let's raise our cups to endless discoveries and unforgettable coffee moments. Cheers!

                            </p>
                        </div>

                        <div className="px-4 py-4 flex flex-col ">
                            <div className=" px-4 ">
                                <div className="bg-gray-300 text-center py-4 rounded-md">
                                    <p className="text-gray-700">
                                        Embrace the aroma of each review, as our passionate
                                        contributors unravel the true essence of every coffee
                                        shop, sip by sip.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold px-4 md:px-8 py-4 text-center">
                        Coffee Shop Listings
                    </h2>
                    <div className="px-4 md:px-8 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {Array.isArray(coffeeShop) && coffeeShop.length > 0 ? (
                                coffeeShop.map((shop) => (
                                    <Link to={`/details/${shop._id}`} className="group" key={shop._id}>
                                        <div className="h-full mb-4 transition-transform transform-gpu group-hover:scale-105">
                                            <div className="bg-white h-full rounded overflow-hidden shadow-lg">
                                                <img
                                                    src={shop.image}
                                                    alt={shop.name}
                                                    className="w-full h-48 object-cover"
                                                />
                                                <div className="px-6 pt-4 h-full">
                                                    <h3 className="font-bold text-xl mb-2 lg:h-12">{shop.name}</h3>
                                                    <p className="text-gray-700 text-base lg:h-14">
                                                        {shop.cityState} <br />
                                                        By: {shop.author} <br />
                                                        <StarRating rating={shop.rating} />
                                                    </p>
                                                    <div className="flex space-x-3 pt-2 text-gray-500">
                                                        <p> {new Date(shop.updatedAt).toString().slice(0, 15)}</p>
                                                        <p>{new Date(shop.updatedAt).toString().slice(16, 24)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p>No coffee shops available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
