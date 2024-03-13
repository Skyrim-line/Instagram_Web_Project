import { useEffect, useState } from 'react';


function MyClock(props) {
    const [time, setTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        // class name 
        // React 要求组件的返回值必须是单个根标签，所以这里用一个空标签包裹起来
        // 项目里面有一些CSS是和HTML标签结构有关系，此时我们包一层空标签
        <>
            <h1>React Clock</h1>
            <h2>{time.toLocaleString()}</h2>
            <h2>1+1 = {1 + 1}</h2>
        </>

    );
}

export default MyClock;
