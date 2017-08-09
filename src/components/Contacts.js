import React, { Component } from 'react';
import Contact from './Contact';
import credentials from '../credentials.json';

const ITEMS_PER_PAGE = 10;

class Contacts extends Component {
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
      <div className="Contacts">
          {this.state.contacts.map(d => (
              <Contact
                avatarUrl={d.avatar_url}
                name={d.full_name}
                key={d.id}
              />
            )
          )}
      </div>
    );
  }
}

export default Contacts;
