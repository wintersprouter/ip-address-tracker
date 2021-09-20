import axios from 'axios';
const baseURL = 'https://geo.ipify.org/api/v1'

export const apiHelper = axios.create({
  baseURL
})