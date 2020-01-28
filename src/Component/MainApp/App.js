import React, { Component } from "react";
import gql from "graphql-tag"
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import "./App.scss";
import Header from "../Header"
import Transactions from "../Transactions/Transactions"

const MY_QUERY2 = gql`query {

    }
}`;

const MY_QUERY = gql`query {
    
}`;

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }

    apolloClient() {
        const cache = new InMemoryCache();
        const apolloClient = new ApolloClient({
            link,
            cache
        })

        apolloClient.query({ query: MY_QUERY }).then(dataProvider => this.setState({ dataProvider }));

    }

    componentDidMount() {
       this.apolloClient()
    }

    render() {
        const { dataProvider } = this.state;
        console.log('dataProvider', dataProvider)

        if (!dataProvider) {
            return  <div className="App">
                <header className="App-header">
                    <div>Loading</div>
                </header>
            </div>;
        }

        return (
            <div className="App">
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className='sidebar-sticky'>
                                <ul className='nav flex-column'>
                                    <li className='nav-item'>
                                        <a className='nav-link active'>
                                            <img src="https://useiconic.com/open-iconic/svg/aperture.svg"/>
                                            <span>Matching Payments</span>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link'>
                                            <img src="https://useiconic.com/open-iconic/svg/beaker.svg"/>
                                            <span>Advice Letters </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <Transactions dataProvider={dataProvider}/>
                        </main>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;

