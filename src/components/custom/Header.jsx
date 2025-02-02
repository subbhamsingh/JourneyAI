import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { FaGoogle } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigation } from 'react-router-dom';
import axios from 'axios';

function Header() {

  const user=JSON.parse(localStorage.getItem('user'));
   const [openDailog,setOpenDailog]=useState(false);

  useEffect(()=>{
      console.log(user);
  },[])

  const login=useGoogleLogin({
    onSuccess:(codeResp)=>GetUserProfile(codeResp),
    onError:(error)=>console.log(error)
  })

  
  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user',JSON.stringify(resp.data));
      setOpenDailog(false);
     window.location.reload();
    })
  }


    return (
      <div className="p-3 shadow-sm flex justify-between items-center px-5">
        <img src="/logo.svg" alt="Logo" />
        <div>
         {user?
          <div className='flex  items-center gap-3'>
   
          <a href='/create-trip'>
          <Button variant='outline' className='rounded-full'>+ Create Trips</Button>
          </a>


          <a href='/my-trips'>
          <Button variant='outline' className='rounded-full'>MY Trips</Button>
          </a>

         
          <Popover>
  <PopoverTrigger> <img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/></PopoverTrigger>
  <PopoverContent><h2 className='cursor-pointer' onClick={()=>{
    googleLogout();
    localStorage.clear();
   window.location.reload();
  }}>Logout </h2></PopoverContent>
</Popover>

          </div>
          :
           <Button onClick={()=>setOpenDailog(true)}>Sign In </Button>
         }
        </div>
      
        <Dialog open={openDailog}>
  
  <DialogContent>
    <DialogHeader>
     
      <DialogDescription>
       <img src="/logo.svg"/>
       <h2 className='font-bold text-lg mt-7'>sign in with google</h2>
       <p>Sign in to the App with Google authentication security </p>
       <Button 
      
       onClick={login}
       className='w-full mt-5 flex gap-4 items-center'>
       <FaGoogle className='h-7 w-7' />Sign in with Google
      
       </Button>
       
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


      </div>
    );
  }
  
  export default Header;