import React,{useEffect, useState} from 'react'
import { PageHeader, Button, Descriptions } from 'antd';
import axios from 'axios';

export default function NewsPreview(props) {
    const [newsInfo, setnewsInfo] = useState(null)
    useEffect(()=>{
        // console.log()
        axios.get(`/news/${props.match.params.id}&_expand=category&_expand=role`).then(res=>{
            setnewsInfo(res.data)
        })
    },[props.match.params.id])
    return (
        <div>
            <PageHeader
                onBack={() => window.history.back()}
                title="Title"
                subTitle="This is a subtitle"
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="创建者">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="创建时间">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="发布时间">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="区域">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="审核状态">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="发布状态">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="访问数量">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="点赞数量">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="评论数量">Lili Qu</Descriptions.Item>
                  
                </Descriptions>
            </PageHeader>

        </div>
    )
}
