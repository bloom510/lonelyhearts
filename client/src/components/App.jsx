import React, { Component } from 'react';
import { Layout } from 'antd';
import { Logo } from './Logo';
import Search from './search';
import { appStyles } from '../styles'

const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
        <div className="App">
            <Layout>
                <Header style={appStyles.header}>
                    <Logo />
                </Header>
                <Content>
                    <Search />
                </Content> 
                <Footer><small>@bloom.510</small></Footer> 
            </Layout>
        </div>
        );
    }
}

export default App;
