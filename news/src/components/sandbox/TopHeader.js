import React, {useState} from 'react'
import { Layout } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
const { Header } = Layout;

export default function TopHeader() {
    const [collapsed] = useState(false)
    return (
        <Header className='site-layout-background' style={{ padding: 0}}>
        {
            collapsed?<MenuUnfoldOutlined/>:<MenuFoldOutlined/>
        }
        </Header>
    )
}
