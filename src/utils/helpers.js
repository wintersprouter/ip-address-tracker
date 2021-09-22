import axios from 'axios';
import Swal from 'sweetalert2';
const baseURL = 'https://geo.ipify.org/api/v1'

export const ipDataApiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})