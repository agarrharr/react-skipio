import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import {fetchContacts} from '../fetch';
import './ContactList.css';

class ContactList extends Component {
  state = {
    contacts: [],
    current_page: 1,
  };

  componentDidMount() {
    const page = 1;
    fetchContacts(page)
      .then(results => {
        if (results.data) {
          this.setState({
            contacts: [
              ...this.state.contacts,
              ...results.data,
            ],
          });
        }
      })
      .catch(e => {
        console.warn(`Error occured fetching contacts: ${e}`);
      });
  }

  render() {
    return (
      <div>
        {this.state.contacts.map(d => (
          <Link className='ContactList__Link' to={`/sms/${d.id}`} key={d.id}>
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
