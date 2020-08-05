import React,{useState} from 'react'

interface Person {
    name:string;
    lastName:string
}
interface Props {
    text: string;
    ok?:boolean;
    i?: number;
    fn?: (bob:string) => string;
    person?:Person
}
const TextEditable:React.FC <Props> = () => {
    const [number,setNumber] = useState<number | null>(6)
    setNumber(null)
    return <form><input/></form>
}
export default TextEditable