import { useEffect, useState } from "react";




export function Button({ name, triggerKey, path }) {
    const [active, setIsActive] = useState(false)


function handleClick(id, ) {
    const audio = document.getElementById(id)
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 500);
    audio.play()
}

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key.toLowerCase() === triggerKey.toLowerCase()) {
            handleClick(`audio-${triggerKey}`, `audio-${triggerKey}`);
          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
    }, [triggerKey]);
    
    const id = `audio-${name}`


    return (
        <>
            <button onClick={() => handleClick(id, `button-${name}`)} className={` ${active ? 'active' : ''}`}>{name}</button>
            <audio id={id} src={`${path}`} type="audio/mpeg"></audio>
        </>
    )
}

