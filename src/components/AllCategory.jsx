import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json').then(response => response.json());



const AllCategory = () => {
    const categoriesData = use(categoriesPromise)
    return (
        <div>
            <h2 className='font-bold'>All Category ({categoriesData.length})</h2>
            <div className='grid grid-cols-1 gap-4 mt-4'>
                {
                    categoriesData.map(category => 
                    <NavLink 
                    key={category.id} 
                    to={`/news/${category.id}`} 
                    className={"hover:bg-base-200 py-2 px-3 text-accent"}>{category.name}
                    </NavLink>)  
                }
            </div>
        </div>
    );
};

export default AllCategory;