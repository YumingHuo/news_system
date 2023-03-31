import React,{useState,useEffect} from 'react'
import {Button, Table,Tag} from 'antd'
import axios from 'axios'
import {DeleteOutlined,EditOutlined} from '@ant-design/icons'
export default function RightList() {
    const [dataSource, setdataSource] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/rights?_embed=children").then(res=>{
            const list = res.data
            list[0].children = ""
            setdataSource(list)
        })
    },[])

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          render:(id)=>{
          return <b>{id}</b>
          }
        },
        {
            title: '权限名称',
            dataIndex: 'title'
        },
        {
            title:"权限路径",
            dataIndex:'key',
            render:(key)=>{
            return <Tag color="orange">{key}</Tag>
            }
        },
        {
            title:"操作",
            render:()=>{
            return <div>
                <Button danger shape="circle" icon={<DeleteOutlined />} />
                <Button type="primary" shape="circle" icon={<EditOutlined />} />
            </div>
            }
        }
      ];
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} 
            pagination={{
                pageSize:5
            }}/>
        </div>
    )
}
