import React, { useState } from 'react'
import styled from 'styled-components'
import Gif from '../assets/loading.json'
import Giff from '../assets/89525-welcome.json'
import Lottie from 'lottie-react'
import axios from 'axios'
function Home() {
    const [isLoading,setIsLoading]=useState(true)
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

            <Lottie className='img' animationData={Giff} loop={true} />
        )

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
.img{
    width:100%;
    svg{
    height:90vh!important;

    }
}
`
export default Home