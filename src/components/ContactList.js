import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Contact from './Contact';
import credentials from '../credentials.json';

const ITEMS_PER_PAGE = 10;

class ContactList extends Component {
  state = {
    contacts: [],
    current_page: 1,
  };

  componentDidMount() {
    const token = credentials.token;
    const page = 1;
    fetch(`https://${credentials.environment}.skipio.com/api/v2/contacts?token=${token}&page=${page}&per=${ITEMS_PER_PAGE}`)
    .then(results => results.json())
    .then(results => {
      if (results.data) {
        this.setState({
          ...this.state,
          contacts: [
            ...this.state.contacts,
            ...results.data,
          ],
        });
      }
    })
    .catch(e => {
      console.warn('Error occured fetching contacts: e');
    });
  }

  render() {
    return (
        <div>
          {this.state.contacts.map(d => (
            <Link to={`/sms/${d.id}`} key={d.id}>
              <Contact
                avatarUrl={d.avatar_url}
                name={d.full_name}
              />
            </Link>
            )
          )}
        </div>
    );
  }
}

export default ContactList;
