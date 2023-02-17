import React from 'react'
import homePage from "../asset/data";
import { AiOutlineHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { listPostAction } from '../redux/actions/listPostAction';

const Navigation = ({ check }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hadleNavBar = (id, name) => {
    dispatch(listPostAction(id));
    navigate(`/${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(' ').join('-')}/`);
  };

  return (
    <div className={`h-8 flex items-center justify-between ${!check ? 'bg-red-700 text-white' : 'bg-[#f7f7f7] text-black'}`}>
      <span className={`${!check ? 'nav-item' : 'nav-item-footer'}`}>
        <AiOutlineHome size={18} />
      </span>
      {homePage.catogery.map((item, index) => (
        <div key={index} className={`h-full relative  ${!check ? 'nav-list' : ''}`}>
          <NavLink
            to={`/${item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(' ').join('-')}/`}
            // className={`uppercase ${!check ? 'nav-item' : 'nav-item-footer'}`}
            className={({isActive}) => isActive 
            ? `uppercase ${!check ? 'nav-item bg-green-800' : 'nav-item-footer bg-red-800'}` 
            : `uppercase ${!check ? 'nav-item' : 'nav-item-footer'}`}
            onClick={() => hadleNavBar(item.id, item.name)}
          >
            {item.name}
          </NavLink>
          <div className='absolute left-0 top-full bg-green-900 min-w-[200px] hidden z-30'>
            {item.list.map((item, index) => (
              <div
                key={index}
                className='border-t-[0.3px] border-white  px-4 py-2 hover:bg-green-900 cursor-pointer'
                onClick={() => hadleNavBar(item.id, item.name)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      ))}
      <span className={`${!check ? 'nav-item' : 'nav-item-footer'}`}>
        <FiSearch size={18} />
      </span>
    </div>
  )
}

export default Navigation