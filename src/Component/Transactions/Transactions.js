import React, { Component } from "react";
import ScoreList from '../ScoreList'

class Transactions extends Component {
    constructor (props) {
        super(props)
        this.state = {
            active: 0,
            sumCheck: ''
        }

        this.sumCheck = this.sumCheck.bind(this)
    }

    sumCheck = (index) => {

    }

    render() {
        // console.log(this.props.dataProvider.data.getBankTransactionsByState)
        const list = this.props.dataProvider && this.props.dataProvider.data.getBankTransactionsByState || []
        return (
            <div className="table-responsive22">
                {/*<h2>Transactions</h2>*/}

                <div className="row">
                    <div className="col-4">
                        <div className="list-group-item d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Transactions</h5>
                            <small>
                                <p className="media-body mb-0 small lh-125">
                                    <strong className="d-block text-gray-dark">count: 232</strong>
                                </p>
                                <p className="media-body mb-0 small lh-125">
                                    <strong className="d-block text-gray-dark">amount: 3232$</strong>
                                </p>
                            </small>
                        </div>

                        <div className="list-group" id="list-tab" role="tablist">
                            {list.map((item, index) => {
                                return (
                                    <a className={`list-group-item list-group-item-action ${this.state.active === index ? 'active' : ''}`}
                                       id="list-home-list"
                                       data-toggle="list"
                                       href={`#${item.id}`}
                                       role="tab"
                                       aria-controls="home"
                                       onClick={() => this.setState(() => ({ active: index }))}
                                    >
                                        <p className="mb-1">{item.debtor_name}</p>
                                        <small className="pr-3">{item.id}</small>
                                        <small className="pr-3">{item.amount}</small>
                                        <small>{item.booking_date}</small>
                                    </a>
                                )
                            })}

                            {/*<a className="list-group-item list-group-item-action" id="list-profile-list"*/}
                               {/*data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>*/}
                            {/*<a className="list-group-item list-group-item-action" id="list-messages-list"*/}
                               {/*data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>*/}
                            {/*<a className="list-group-item list-group-item-action" id="list-settings-list"*/}
                               {/*data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>*/}
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="list-group-item d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Invoices</h5>
                        </div>
                        <div className="tab-content list-group-item" id="nav-tabContent">
                            {list.map((item, index) => {
                                return (
                                    <div className={`tab-pane fade ${this.state.active === index ? 'show active' : ''}`} id={item.id} role="tabpanel" aria-labelledby="list-home-list">
                                        <div className="row">
                                            <h5 className="col-12 border-bottom">
                                                Customer: {item.debtor_name} <small>{item.merchant_type}</small>
                                            </h5>
                                        </div>
                                        <div className="row head border-bottom">
                                            <div className="col-4"><strong className="text-gray-dark">Debtor</strong></div>
                                            <div className="col-4"><strong className="text-gray-dark">Purpose</strong></div>
                                            <div className="col-2"><strong className="text-gray-dark">Amount</strong></div>
                                            <div className="col-2"><strong className="text-gray-dark">Selected Amount</strong></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4"><small className="text-gray-dark">{item.debtor_name}</small></div>
                                            <div className="col-4"><small className="text-gray-dark">{item.remittance_information}</small></div>
                                            <div className="col-2"><small className="text-gray-dark">{item.amount}</small></div>
                                            <div className="col-2"><small className="text-gray-dark">'1212$'</small></div>
                                        </div>

                                        <ScoreList
                                            data={list}
                                            sumCheck={this.sumCheck()}
                                        />
                                    </div>
                                )
                            })}


                            {/*<div className="tab-pane fade show active" id="list-home" role="tabpanel"*/}
                                 {/*aria-labelledby="list-home-list">323*/}
                            {/*</div>*/}
                            {/*<div className="tab-pane fade" id="list-profile" role="tabpanel"*/}
                                 {/*aria-labelledby="list-profile-list">121212*/}
                            {/*</div>*/}
                            {/*<div className="tab-pane fade" id="list-messages" role="tabpanel"*/}
                                 {/*aria-labelledby="list-messages-list">.5454*/}
                            {/*</div>*/}
                            {/*<div className="tab-pane fade" id="list-settings" role="tabpanel"*/}
                                 {/*aria-labelledby="list-settings-list">...5454556787*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>


                {/*<table className="table table-striped table-sm">*/}
                    {/*<thead>*/}
                        {/*<tr>*/}
                            {/*<th>#</th>*/}
                            {/*<th>Header</th>*/}
                            {/*<th>Header</th>*/}
                            {/*<th>Header</th>*/}
                            {/*<th>Header</th>*/}
                        {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}
                    {/*<tr>*/}
                        {/*<td>1,001</td>*/}
                        {/*<td>Lorem</td>*/}
                        {/*<td>ipsum</td>*/}
                        {/*<td>dolor</td>*/}
                        {/*<td>sit</td>*/}
                    {/*</tr>*/}


                    {/*</tbody>*/}
                {/*</table>*/}
            </div>
        );
    }
}

export default Transactions;
