import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

export default function Navbar({ authenticate }) {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  const navigate = useNavigate();

  return (
    <nav className='navbar-section'>
      <section
        className='login-section'
        onClick={() => {
          navigate('/login');
        }}
      >
        <div className='login-btn'>
          <FontAwesomeIcon icon={faUser} />{' '}
          <span>{authenticate ? '로그아웃' : '로그인'}</span>
        </div>
      </section>
      <section className='logo-section'>
        <img
          className='logo-img'
          width={100}
          src='data:image/png;base64,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'
          alt='H&M Logo'
          onClick={() => navigate('/')}
        />
      </section>
      <section className='menu-section'>
        <ul className='menu-list'>
          {menuList.map((menu, idx) => (
            <li key={idx} className='menu'>
              {menu}
            </li>
          ))}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input className='search-input' type='text' placeholder='제품 검색' />
        </div>
      </section>
    </nav>
  );
}
