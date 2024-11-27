import { useEffect, useState } from 'react'
interface FadeTextProps {
    text: string
    delay?: number
}
const FadeText = ({ text, delay = 500 }: FadeTextProps) => {
    const [opacity, setOpacity] = useState('opacity-0')
    useEffect(() => {
        setTimeout(() => {
            setOpacity('opacity-100')
        }, delay)
    }, [delay])
    return (
        <div
            className={`flex flex-col w-80 leading-tight  ring-1 rounded-xl text-xl px-6 py-3 bg-slate-400/10 transition-opacity duration-1000 ease-in-out ${opacity}`}
        >
            {text}
        </div>
    )
}

export default FadeText
