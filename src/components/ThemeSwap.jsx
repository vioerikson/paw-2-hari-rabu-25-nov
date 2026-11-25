import { Icon, Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeSwap = () => {
    const [isDark, setIsDark] = useState(false)

    const handleTheme = () => {
        setIsDark(!isDark)
    }

    useEffect(() => {
        document.documentElement.dataset.theme = isDark ? 'garden' : 'retro'
    },[isDark])

    if (isDark){
        return <button className='btn btn-circle' onClick={handleTheme}>
            <Sun/>
        </button>
    }

  return (
    <div>
         <button className='btn btn-circle' onClick={handleTheme}>
            <Moon/>
        </button>


    </div>
  )
}

export default ThemeSwap
ThemeSwap