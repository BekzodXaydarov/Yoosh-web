import React, { useMemo } from 'react'
import NavCard from '../nav_card/nav_card'
import { useLocation } from 'react-router-dom';

export default function NavbarComponent({ data }) {
    const { pathname } = useLocation()
    const Pathname = (path) => {
        let res = ''
        if (path.includes('chat') && path !== data[0].path) {
            for (let i = 0; i < path.length; i++) {
                res += path[i]
            }
            let ph = res.replaceAll('/', ' ').split(' ')[1]
            return res.trim() === `/${ph}` ? '/' : `/${ph}`
        } else {
            return path
        }

    }
    let ph = Pathname(pathname)
    const Data = useMemo(() => data.filter(f => f.path === ph), [ph, data])
    const children_head = Data[0]?.children[0]?.children[0]
    const children_body = Data[0]?.children[1]?.children
    console.log();
    return (
        <div>
            <div className="nav_head" key={children_head.id}>
                <h1>{children_head.title}</h1>
                {children_head.svg}
            </div>
            <div className="nav_body">
                {
                    children_body.map((item) => {
                        return (
                            <>
                                <NavCard key={item.id} img={item.svg} title={item.title} description={item.description} path={item.path} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
