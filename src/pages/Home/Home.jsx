import React, { useEffect, useState } from 'react';
import CategoryCard from '../singleComponents/CategoryCard';
import Banner from './Banner';
import Chef from '../chef/Chef';
import banner1 from '../../assets/slidier2.jpeg'
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';
import useTitle from '../../hooks/useTitle';
import about from '../../../dist/assets/about.png';
// import Chat from '../chat/Chat';
// import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
    useTitle('Home');
    const [categories, setCategories] = useState([])
    const [recipes, setRecipes] = useState([])
    const [showAll, setShowAll] = useState(false)

    const handleShowAll = () => {
        setShowAll(true)
    }
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return (
            <Loading></Loading>
        )
    }

    //

    useEffect(() => {
        fetch('http://localhost:7000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch('http://localhost:7000/chef')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error))
    })

    return (
        <div>
            {/* banner section */}
            <Banner></Banner>  

            {/* chat bott */}
            {/* <Chat></Chat> */}
            
            {/* progress bar  */}
            {/* <ProgressBar></ProgressBar> */}

            {/* about us */}
            <div className='md:flex mx-20 mt-6 mb-6'>
                <div>
                    <img src={about} alt="" />
                </div>
                <div className='ml-6'>
                    <h5 className='text-6xl font-mono'>About us</h5>
                    <hr className='w-[38%] mt-2 mb-2' />
                    <h1 className='text-4xl font-mono'>Farm-In Changing Future Of <span className='text-yellow-400'>Agriculture</span></h1>
                    <p className='text-slate-600 mt-2 mb-2'>Lorem ipsum is simply free text dolor sit amet, notted elit sed do eiusmod tempor. Lorem ipsum is simply free text dolor. simply free text dolor.</p>
                    <div className='flex'>
                    </div>
                    <button className="btn btn-outline btn-accent mt-4">See More</button>
                </div>
            </div>

            {/*Agriculture  Categories  */}
            <div className='mt-8 mb-8'>
                <h1 className='text-center text-3xl font-medium font-mono mb-2'>Agriculture Categories</h1>
                <div className='w-[30%] mx-auto bg-[#E25111] mb-2 h-[2px]'></div>
                {
                    recipes.length === 0 ?
                        <Loading /> : ''
                }
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 container'>
                    {
                        categories.map(category => <CategoryCard
                            key={category.id}
                            category={category}
                        ></CategoryCard>)
                    }
                </div>
            </div>

            {/* Our chef */}
            <div>
                <h1 className='text-center text-3xl font-medium font-mono mb-2 '>Our Agriculture</h1>
                <div className='w-[20%] mx-auto bg-[#E25111] mb-2 h-[2px]'></div>
                {
                    recipes.length === 0 ?
                        <Loading /> : ''
                }
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 container'>
                    {
                        recipes.slice(0, showAll ? 16 : 8).map(recipe => <Chef
                            key={recipe.id}
                            recipe={recipe}
                        ></Chef>)
                    }

                </div>
                {!showAll && (
                    <Link className='inline-block ml-[45%]' onClick={handleShowAll}>
                        <button className="btn btn-warning">See More</button>
                    </Link>
                )}
            </div>


            {/* Baked Chicken Breast */}
            <div className='mt-8 mb-8 relative'>
                <img className='h-[60vh] w-full' src={banner1} alt="banner" />
                <div className='bg-black top-0 opacity-75 pt-20 w-full md:h-[100vh] 
                lg:h-[60vh] absolute  text-white text-center'>
                    <h3 className='text-4xl lg:text-6xl  font-semibold'>Agriculture</h3>
                    <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek</p>
                </div>
            </div>
            {/* footer ends */}

        </div>
    );
};

export default Home;