import React, { FC, useState } from "react";
import { UserOutlined, ClockCircleOutlined, LineChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import styled from "styled-components/macro";
import { colors } from "colors/colors";
import { device } from "styles/fast";
import { Link } from "react-router-dom";
import useLocationQuery from "hooks/useLocationQuery";
import SubMenu from "antd/lib/menu/SubMenu";
import ConnectWalletButton from "components/ConnectWalletButton/ConnectWalletButton";
import { FlexRow } from "components/box";

const { Content, Footer, Sider, Header } = Layout;

const LayoutAntDWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  #components-layout-demo-responsive .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  }

  .content_container {
    background-color: black;
    padding: 2rem 2rem;
  }

  .content {
    background-color: ${colors.BG};
    padding: 2rem 2rem;
    min-height: calc(100vh - 4rem - 4rem - 5rem - 6rem);
  }

  .layoutAnt {
    min-height: 100vh;
  }
  .footer {
    height: 5rem;
    background-color: ${colors.PURPLE_DARK_BG};
    font-weight: 600;
    padding: 0;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .sider {
    position: relative;
  }
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 6rem;
  }
  @media ${device.laptop} {
    .sider {
      position: fixed;
      height: 100vh;
    }
    .layout_content {
      padding-left: 50px;
    }
  }
  .ant-layout-sider-zero-width-trigger {
    position: absolute;
  }
`;

interface Props {
  children: React.ReactNode;
}

const LayoutAntD: FC<Props> = ({ children }) => {
  let page = useLocationQuery();
  page.shift();
  return (
    <LayoutAntDWrapper>
      <Layout className="layoutAnt">
        <Sider collapsible={true} breakpoint="lg" collapsedWidth={50} className="sider">
          <Menu theme="dark" mode="inline" selectedKeys={page} defaultOpenKeys={page}>
            <Menu.Item key="" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="presale" icon={<ClockCircleOutlined />}>
              <Link to="/presale">Presale</Link>
            </Menu.Item>

            <SubMenu key="trade" icon={<LineChartOutlined />} title="Trade">
              <Menu.Item key="swap">
                <Link to="/trade/swap">Swap</Link>
              </Menu.Item>
              <Menu.Item key="liquidity">
                <Link to="/trade/liquidity">Liquidity</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="layout_content">
          <Header className="header" style={{ padding: 0 }}>
            <ConnectWalletButton />
          </Header>
          <Content className="content_container">
            <div className="content">{children}</div>
          </Content>
          <Footer className="footer" style={{ textAlign: "center" }}>
            DAPP Practice By Matthew Fu
          </Footer>
        </Layout>
      </Layout>
    </LayoutAntDWrapper>
  );
};

export default LayoutAntD;
