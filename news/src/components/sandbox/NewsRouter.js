import React, { useEffect, useState } from 'react'
import Home from '../../views/sandbox/home/Home'
import Nopermission from '../../views/sandbox/nopermission/Nopermission'
import RightList from '../../views/sandbox/right-manage/RightList'
import RoleList from '../../views/sandbox/right-manage/RoleList'
import UserList from '../../views/sandbox/user-manage/UserList'
import { Switch, Route, Redirect } from 'react-router-dom'
import NewsAdd from '../../views/sandbox/news-manage/NewsAdd'
import NewsDraft from '../../views/sandbox/news-manage/NewsDraft'
import NewsCategory from '../../views/sandbox/news-manage/NewsCategory'
import Audit from '../../views/sandbox/audit-manage/Audit'
import AuditList from '../../views/sandbox/audit-manage/AuditList'
import Unpublished from '../../views/sandbox/publish-manage/Unpublished'
import Published from '../../views/sandbox/publish-manage/Published'
import Sunset from '../../views/sandbox/publish-manage/Sunset'
import axios from '_axios@0.21.1@axios'

const LocalRouterMap = {
    "/home":Home,
    "/user-manage/list":UserList,
    "/right-manage/role/list":RoleList,
    "/right-manage/right/list":RightList,
    "/news-manage/add":NewsAdd,
    "/news-manage/draft":NewsDraft,
    "/news-manage/category":NewsCategory,
    "/audit-manage/audit":Audit,
    "/audit-manage/list":AuditList,
    "/publish-manage/unpublished":Unpublished,
    "/publish-manage/published":Published,
    "/publish-manage/sunset":Sunset
}

export default function NewsRouter() {

    const [BackRouteList, setBackRouteList] = useState([])
    useEffect(()=>{
        Promise.all([
            axios.get("http://localhost:5000/rights"),
            axios.get("http://localhost:5000/children"),
        ]).then(res=>{
            // console.log(res)
            setBackRouteList([...res[0].data,...res[1].data])
            // console.log(BackRouteList)
        })
    },[])
    return (
        <Switch>
            {
                BackRouteList.map(item=>
                    {
                        if(checkRoute() && checkUserPermission()){
                            return <Route path={item.key} key={item.key} component={LocalRouterMap[item.key]} exact/> 
                        }
                        return <Nopermission/>
                    }   
                )
            }

            <Redirect from="/" to="/home" exact />
            {
                BackRouteList.length>0 && <Route path="*" component={Nopermission} />
            }
        </Switch>
    )
}
