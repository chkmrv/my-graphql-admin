import React, { Component } from "react";
import gql from "graphql-tag"
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import "./App.scss";
import Header from "../Header"
import Transactions from "../Transactions/Transactions"

const MY_QUERY2 = gql`query {
    getTransactionIdentificationCheckFromTransaction(bank_transaction_id: "251128") {
        id,
        uuid,
        score,
        debtor_name,
        invoice_number,
        invoice_numbers,
        merchant_name,
        ticket_uuid,
        ticket_amount,
        ticket_state,
        ticket_due_date,
        ticket_outstanding_amount,
        invoice_date
    }
}`;

const MY_QUERY = gql`query {
    getBankTransactionsByState(state: "pending_identification") {
        id
        uuid
        amount
        booking_date
        debtor_name
        remittance_information
        merchant_type,
            state,
            is_merchant_greylisted
    }
}`;

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }

    componentDidMount() {
        const cache = new InMemoryCache();
        const link = new HttpLink({
            uri: 'https://efmk7otd2zbobpifz36ppguffe.appsync-api.eu-central-1.amazonaws.com/graphql',
            headers: {
                'x-api-key': 'da2-do5eyrz7ubez5pcxatveizqf6i'
            }
        });
        const apolloClient = new ApolloClient({
            link,
            cache
        })

        apolloClient.query({ query: MY_QUERY }).then(dataProvider => this.setState({ dataProvider }));

    }

    render() {
        const { dataProvider } = this.state;
        console.log('dataProvider', dataProvider)

        // if (!dataProvider) {
        //     return  <div className="App">
        //         <header className="App-header">
        //             <div>Loading</div>
        //         </header>
        //     </div>;
        // }

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

