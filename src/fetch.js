import axios from 'axios';
import credentials from './credentials.json';

const ITEMS_PER_PAGE = 10;

export const fetchContacts = (page) =>
  fetch(`https://${credentials.environment}.skipio.com/api/v2/contacts?token=${credentials.token}&page=${page}&per=${ITEMS_PER_PAGE}`)
  .then(results => results.json());

export const postText = (id, message) =>
  axios.post(`https://${credentials.environment}.skipio.com/api/v2/messages?token=${credentials.token}`, {
    recipients: [`contact-${id}`],
    message: { body: message},
  });
