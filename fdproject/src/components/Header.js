import React from "react";
import "./Header.css";
import background from "../asset/Images.png";
import google from "../asset/Google Play Black Border.png";
import apple from "../asset/App Store Black Border.png";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Listfood from "./Listfood";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  
  boxShadow: 24,
  p: 4,
};
function Header() {
  const [inputlocation,setlocation] = useState("");
  const[open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="head-cont">
      <div className="contanier">
        <h1 className="h1" >Your Favorite Food Delivery Partner</h1>
        <p>
          The food at your doorstep. Why starve when you have us. You hunger
          partner. Straight out of the oven to your doorstep.
        </p>
        <div className="wraper">
          <input
            type="text"
            placeholder="Enter your delivery location"
            required
            onChange={(e)=>{setlocation(e.target.value)}}
          ></input>
          <button onClick={handleOpen} className="button" type="submit">
            Get Started
          </button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Listfood close={setOpen}/>
        </Box>
      </Modal>
        </div>
        <div className="store">
          <button className="download"><img style={{width:186.85,height:68}} src={google} alt="google play store"></img></button>
          <button className="download"><img style={{width:186.85,height:68}} src={apple} alt="apple store"></img></button>
        </div>
      </div>
      <div>
        <div className="base">
          <img style={{ width: 500, height: 452 }} src={background}></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
