import React, { useMemo } from 'react'
import Nav_card from '../nav_card/nav_card'
import { useLocation } from 'react-router-dom';

export default function Navbar_component({ data }) {
    const { pathname } = useLocation()
    const Pathname = (path) => {
        let ph = pathname
        let res = ''
    if(path.includes('chat') && path != data[0].path){

    for (let i = 0; i < ph.length; i++) {
          if(ph[i] == '/'){
            res += ph[i].replace('/',' ')
          }
        res +=ph[i]
          
    }
    let string = res.split(' ')[1]
    return res.trim() == '/chat' ? "/":string
    }else{
        return path
    }
    }
    const Data = useMemo(() =>
        data.filter(f => f.path.includes(Pathname(pathname))), [pathname, data]
    )
    const children_head = Data[0]?.children[0]?.children[0]
    const children_body = Data[0]?.children[1]?.children
    return (
        <div>
            <div className="nav_head">
                <h1>{children_head.title}</h1>
                {children_head.svg}
            </div>
            <div className="nav_body">
                {
                    children_body.map((item) => {
                        return (
                            <>
                                <Nav_card img={item.svg} title={item.title} description={item.description} path={item.path} />
                            </>
                        )
                    })
                }
            </div>
            {children_head?.title}
            <h1>salom</h1>

        </div>
    )
}
