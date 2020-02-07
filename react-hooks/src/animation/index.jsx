import React,{useState, useEffect} from 'react'
import './animation.css'

function useAnimation (_clsName, duration=3000){
  const [phase, setPhase] = useState(0)
  const [className, setClassName] = useState(_clsName)
  function play(){
    setPhase(1)
  }
  useEffect(() => {
    if(phase ===1){
      setClassName(_clsName + ' ' + className + '-start')
      setTimeout(() => {
        setClassName(_clsName + ' ' + className + '-end')
        setTimeout(() => {
          setClassName(_clsName)
          setPhase(0)
        }, 0);
        
      }, duration);
    }
  }, [phase])
  return [className, play]
}
export default () => {
  const [classname, playAnimation] = useAnimation('box')
  return <div>
    <div className={classname}></div>
    <button onClick={playAnimation}>paly</button>
  </div>
}