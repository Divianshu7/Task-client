import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Gif from '../assets/loading.json'
import Giff from '../assets/8559-hey-yo.json'
import Lottie from 'lottie-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Home() {
    const history=useNavigate()
    
    useEffect(() => {
        if (!localStorage.getItem('task-user')) {
            history('/login')
        }
    }, [])
    const [isLoading,setIsLoading]=useState(true)
    console.log(isLoading)
    const load = async () => {
        try{

            await axios.get(`${process.env.REACT_APP_API}/connect`)
            setIsLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    load()
    const Loading=()=>{
        return(

            <Lottie className='img' animationData={Gif} loop={true} />
        )

    }
    const Done=()=>{
        return(
            <>
            <button onClick={handleClick}> LogOut</button>
            <button className='btn1' onClick={handleClickTwo}> Register</button>

            <Lottie className='img' animationData={Giff} loop={true} />
            </>
        )

    }
    const handleClick = () => {
        localStorage.clear()
        history('/login')
    }
    const handleClickTwo=()=>{
        localStorage.clear()
        history('/register')
    }
  return (
    <Container>
        {isLoading?Loading():Done()}
    </Container>
    )
}
const Container=styled.div`
background-color:#131324;
height:100vh;
button{
    border:none;
    float:right;
    height:5vh;
    width:20vw;
    cursor:pointer;
}
.btn1{
    float:left
}
.img{
    width:100%;
    svg{
    height:90vh!important;

    }
}
`
export default Home