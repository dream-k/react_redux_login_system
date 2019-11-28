import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { personalActions } from '../_actions';

class PersonalPage extends React.Component {
    componentDidMount(){
        // this.props.getUserDetails(this.props.user);
        this.props.getPersonalDetails(this.props.user);
    }
    render() {
        const { user,personal } = this.props;
        return (
            <div className="container">
                <p className="back">
                    <Link to="/start">Back to Start Page</Link>
                </p>
                <p className="logBtn">
                    <Link to="/login">Logout</Link>
                </p>
                <div className="col-md-6 col-md-offset-3">
                   
                    <h1>Personal Page of {user.username}</h1>
                    
                    <div>
                        <p>Books borrowed</p>
                        {/* <ul>
                            <li>The main civilisation, by Anna Hansen, 102831372,Return by 12/11/2019</li>
                            <li>History of Russia , by Vladin Putinsky, 198302392,Returned by 09/22/2018</li>
                            <li>1984,by George Orwell, 09876542, Returned by 01/01/2001</li>
                        </ul> */}
                        {personal.items &&
                            <ul>
                                {personal.items.map((person, index) =>
                                    <li key={person.id}>
                                        {person.title}
                                    
                                    </li>
                                )}
                            </ul>
                        }
                    </div>
                    <div>
                        <p>Books reserved for you</p>
                        {/* <ul>
                            <li>The main civilisation, by Anna Hansen, 102831372,Return by 12/11/2019</li>
                            <li>History of Russia , by Vladin Putinsky, 198302392,Returned by 09/22/2018</li>
                            <li>1984,by George Orwell, 09876542, Returned by 01/01/2001</li>
                        </ul> */}
                        {personal.items &&
                            <ul>
                                {personal.items.map((person, index) =>
                                    <li key={person.id}>
                                        {person.title}
                                    
                                    </li>
                                )}
                            </ul>
                        }
                    </div>
                    <div>
                        <h2>Overdue</h2>
                        <p>You have 2 books currently overdue</p>
                        <Link to="/overdue">More Info</Link>
                    </div> 
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { authentication,personal } = state;
    const { user } = authentication;
    return { user,personal};
}
const actionCreators = {
    getPersonalDetails: personalActions.getPersonalDetails,
}
const connectedPersonalPage = connect(mapState,actionCreators)(PersonalPage);
export { connectedPersonalPage as PersonalPage };