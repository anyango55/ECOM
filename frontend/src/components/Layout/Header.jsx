import React from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import { productData } from '../../static/data'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState(null);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts =productData && productData.filter((product) => {
        product.name.toLowerCase().includes(term.toLowerCase())
        });
        setSearchData(filteredProducts);
    }
  return (
    <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
            <div>
                <Link to="/">
                    <img src='https://img.freepik.com/premium-vector/pin-delivery-logo-design-with-icon-creative-concept-premium-vector_715639-228.jpg' alt='' />
                </Link>
            </div>
            {/* search box */}
            <div className='w-[50%] relative'>
                <input 
                    type='text' 
                    placeholder='Search Product...' 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    className='h-[40px] w-full px-2 border-blue-400 
                    border-[2px] rounded-md'/>
                    <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer'/>
                    {
                        searchData && searchData.length !== 0 ? (
                            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                                    {/* {searchData && searchData.map((i.index) => {
                                        const d = i.name;

                                        const product name = d.replace(/)
                                    })} */}
                            </div>
                        ) : null
                    }
            </div>
        </div>
    </div>
  )
}

export default Header