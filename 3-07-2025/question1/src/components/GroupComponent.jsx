import React ,{useState,useEffect} from 'react'
import Component1 from './Component1.jsx'
import './GroupComponent.css'
const GroupComponent = () => {
    const  p1="Dogs are known for their unshakable loyalty, boundless energy, and loving nature. Whether it’s guarding your home, going on walks, or simply wagging their tails when you return, dogs are emotionally in tune with their owners. They thrive on affection, activity, and companionship — making them perfect for families, kids, and even seniors. Their ability to sense moods and provide comfort makes dogs more than just pets — they’re best friends with fur."
    const img1="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
    const h1="🐶  Dogs: The Devoted Companions"
    const  p2="Cats offer a unique blend of independence and affection. Unlike dogs, they don’t require constant attention, making them ideal for busy people or those living in small apartments. Their calm demeanor, playful curiosity, and soft purrs add peace and warmth to any home. A cat may not always ask for your attention, but when it curls up beside you or greets you with a soft meow — it's a moment of pure connection."
    const img2="https://images.unsplash.com/photo-1503777119540-ce54b422baff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
    const h2="🐱  Cats: The Graceful, Independent Souls"
    const  p3="Birds bring song, color, and charm into our lives. From chirping finches to talking parrots, they can be incredibly social and intelligent. Birds are low-maintenance compared to dogs or cats and require less space, making them great for small homes or pet lovers with limited time. They thrive in happy, enriched environments and can form strong bonds with their owners — often responding to voices or learning tricks over time."
    const img3="https://images.unsplash.com/photo-1526296609207-80e77afde33d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHN8ZW58MHx8MHx8fDA%3D"
    const h3="🐦 Birds: The Colorful, Musical Companions"
    

     const [theme,setTheme] = useState('dark')
     useEffect(()=>{
        const curr_theme=localStorage.getItem('themeMode');
        if(curr_theme){
            setTheme(JSON.parse(curr_theme))
        }
     },[])

     useEffect(()=>{
        localStorage.setItem('themeMode',JSON.stringify(theme));
     },[theme])

     function handleThemeChange(){
        setTheme(prev=>prev=='dark'?'light':'dark')

     }
  return (
    <div id='wrapper ' className={theme}>
        <button onClick={handleThemeChange}>Theme mode is {theme}</button>
        <Component1 p={p1} image={img1}  heading={h1} Theme={theme}/>
        <Component1 p={p2} image={img2}  heading={h2} Theme={theme}/>
        <Component1 p={p3} image={img3}  heading={h3} Theme={theme}/>
      
    </div>
  )
}

export default GroupComponent
