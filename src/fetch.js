import axios from 'axios';
import credentials from './credentials.json';

const ITEMS_PER_PAGE = 10;

const PREFIX = `https://${credentials.environment}.skipio.com/api/v2/`;

export const fetchContacts = (page) =>
  fetch(`${PREFIX}contacts?token=${credentials.token}&page=${page}&per=${ITEMS_PER_PAGE}`)
    .then(results => results.json());

export const postText = (id, message) =>
  axios.post(`${PREFIX}messages?token=${credentials.token}`, {
    recipients: [`contact-${id}`],
    message: { body: message},
  });

export const fetchUserById = id =>
  fetch(`${PREFIX}contacts/${id}?token=${credentials.token}`)
    .then(results => results.json());
