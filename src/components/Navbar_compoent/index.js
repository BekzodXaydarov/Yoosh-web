import React from 'react'
import NavCard from '../nav_card/nav_card'

export default function NavbarComponent({children}) {
    const children_head = children[0]?.children[0]
    const children_body = children[1]?.children
    return (
        <div key={children.key}>
            <div className="nav_head">
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
