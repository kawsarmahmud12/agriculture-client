import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa6';

const CardRecipe = ({ cardRecipe }) => {
    const { cooking_method, rating, recipe_name, ingredients, img } = cardRecipe;
    const [openBtn, setOpenBtn] = useState(false);
    const favoriteBtn = () => {
        setOpenBtn(!openBtn);
        toast.success('Recipe added to favorites');
    }
    return (
        <div className='grid lg:grid-cols-6 mb-3'>
            <div>
                <img className='w-[90%]' src={img} alt="" />
            </div>
            <div>
                <p>{recipe_name}</p>
            </div>
            <div>
                {
                    ingredients.map((ingredient, index) => {
                        return <ul key={index} className='list-disc'><li>{ingredient}</li></ul>
                    })
                }
            </div>
            <div>
                <p>{cooking_method}</p>
            </div>
            <div>
                <p>{rating}</p>
            </div>
            <div className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button title='Add to favorite' onClick={favoriteBtn} disabled={openBtn} className={`flex items-center flex-col ${openBtn ? 'text-slate-400' : ''}`}><FaRegHeart className={`w-5 h-5  ${openBtn ? 'text-slate-400' : 'text-red-500'}`}></FaRegHeart> {openBtn ? 'added' : 'add'} </button>
            </div>
        </div>
    );
};

export default CardRecipe;