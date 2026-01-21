import React from 'react'
import "./Header.css"
import headerimg from "../assets/Frame 560.png"

const Header = () => {
    const menuItems = [
        "Woman's Fashion",
        "Men's Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty"
    ];

    const styles = {
        sidebarMenu: {
            width: '250px',
            background: 'white'
        },
        menuItem: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        },
        arrow: {
            opacity: 0,
            transition: 'opacity 0.3s ease',
            color: '#666'
        }
    };
    
    return (
        <div className='header'>
            <div className='header-menu' style={styles.sidebarMenu}>
                {menuItems.map((item, index) => (
                    <div 
                        key={index} 
                        style={styles.menuItem}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f3f4f6';
                            e.currentTarget.querySelector('.arrow').style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.querySelector('.arrow').style.opacity = '0';
                        }}
                    >
                        <span>{item}</span>
                        <span className="arrow" style={styles.arrow}>&gt;</span>
                    </div>
                ))}
            </div>
            <hr />
            <img src={headerimg} alt="" />
        </div>
    )
}

export default Header