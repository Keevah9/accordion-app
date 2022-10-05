import React, {useRef} from 'react'
import { useGeneralContext } from './context';
const Questions = ({title, info}) => {
    const { toggle, setToggle} = useGeneralContext();
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setToggle(!toggle)}>
          {toggle ? '-' : '+'} 
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
}

export default Questions