import React, { useState } from "react";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
//MUI MENU====================
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//MUI ICONS
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Navbare() {
    const [play, setPlay] = useState(false)
    const [menuIcon, setMenuIcon] = useState(true)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handelMenuBAr = () => {
        setPlay(true)
        setMenuIcon(false)
    }
    return (
        <div className='p-4 flex justify-between xl:items-center shadow-md items-start '>
            <img src={Logo} className="h-[50px]" alt="" />
            {/*=============menu bar================== */}
            <div className={`${play ? "newMenubar" : "menubar"} flex xl:flex-row flex-col xl:w-[70%] justify-around items-center`}>
                <CloseIcon className="closIcon" onClick={() => {
                    setPlay(false);
                    setMenuIcon(true); // instead of false
                }}
                />
                {/* left menu */}
                <ul className="flex xl:flex-row flex-col  gap-4 xl:justify-start  xl:items-center items-start">
                    <li className="font-bold xl:text-black text-white capitalize hover:text-primary"><Link to='/'>home</Link></li>
                    <li className="font-bold xl:text-black text-white capitalize hover:text-primary"><Link to='/About Us'>about us</Link></li>
                    <li>  <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="font-bold capitalize xl:text-black text-white btn"
                    >
                        Dashboard
                    </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose}><Link to=''>Team</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to=''>Review</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to=''>Shop</Link></MenuItem>
                        </Menu></li>
                    <li className="font-bold capitalize xl:text-black text-white hover:text-primary"><Link to=''>blog</Link></li>
                    <li className="font-bold capitalize xl:text-black text-white hover:text-primary"><Link to=''>faq's</Link></li>
                </ul>
                {/* rigth menu */}
                <div className="flex xl:flex-row flex-col xl:justify-start  gap-4  xl:items-center items-startr">
                    <SearchIcon className="sh-ic xl:text-black text-white" />
                    <div >
                        <ShoppingCartIcon className="sh-ic xl:text-black text-white" />
                        <span className="p-1 bg-blue text-white rounded-xl">0</span>
                    </div>
                    <Button
                        variant="contained"
                        className="cnt-btn bg-primary shadow-xl"
                        endIcon={<ArrowForwardIcon />}
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
            <MenuIcon className={`${menuIcon ? 'MenuIcon' : "NewMenuIcon"}`} onClick={handelMenuBAr} />
        </div>
    )
}

export default Navbare
