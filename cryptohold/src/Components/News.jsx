/** @format */

import React from "react";
import { useState, useEffect } from "react";
import cryptoAPI from "../Services/cryptoAPI";
import { Card, Avatar, Row, Col, Input, Spin, Space } from "antd";
// const { EditOutlined, EllipsisOutlined, SettingOutlined } from @antdesign/icons;
const { Meta } = Card;

const News = () => {
  const [loading, setLoading] = useState(true);
  const [newsFeed, setNewsFeed] = useState([]);

  // const count = simplified ? 10 : 100;

  useEffect(() => {
    cryptoAPI.getTopNews().then((response) => {
      setNewsFeed(response.data.articles);
      console.log("News Feed API:", newsFeed);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Row gutter={[64, 64]} className="crypto-news-container">
        {newsFeed?.map((article, index) => (
          <Col key={index} sm={24} md={24} lg={8} className="news-card">
            {/* <Link to={`/crypto/${currency.id}`}> */}
            <Spin spinning={loading}>
              <Card
                cover={<img alt={article.author} src={article.urlToImage} />}
                // actions={[
                //   <SettingOutlined key="setting" />,
                //   <EditOutlined key="edit" />,
                //   <EllipsisOutlined key="ellipsis" />,
                // ]}
              >
                <Meta title={article.title} description={article.description} />
              </Card>
            </Spin>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
