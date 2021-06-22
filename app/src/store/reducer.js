import {
  SET_SEARCH,
  SET_SEARCH_LOADING,
  SET_SEARCH_ERR,
  SET_URL
} from './action'

const initialState = {
  actors: {
    international: [
      'Tom Hardy',
      'Tom Holland',
      'Tom Cruise',
      'Robert Downey, Jr',
      'Scarlett Johansson',
      'Samuel L. Jackson',
      'Chris Evans',
      'Zoe Saldana',
      'Vin Diesel',
      'Will Smith'
    ],
    indonesia: [
      'Adipati Dolken',
      'Reza Rahardian',
      'Abimana',
      'Joe Taslim',
      'Vino G. Bastian',
      'Herjunot Ali',
      'Gading Marten',
      'Roy Marten',
      'Vanesha Perscilla',
      'Iqbaal Ramadhan'
    ]
  },
  scientist: {
    international: [
      'Albert Einstein',
      'Marie Curie',
      'Isaac Newton',
      'Charles Darwin',
      'Nikola Tesla',
      'Galileo Galilei',
      'Ada Lovelace',
      'Pythagoras',
      'Carl Linnaeus',
      'Rosalind Franklin'
    ],
    indonesia: [
      'Dr. Khoirul Anwar',
      'Dr. Yogi Ahmad Erlangga',
      'Dr. Warsito Purwo Taruno',
      'Prof. Josaphat T. S. Sumantyo',
      'Dr. Eniya Listiani Dewi',
      'Dr. Johny Setiawan',
      'Prof. Mezak Arnold Ratag',
      'Mulyo Pangestu',
      'Dr. Joe Hin Tjio',
      'Prof. Dr. Ir. Sedijatmo'
    ]
  },
  politician: {
    international: [
      'Ashraf Ghani',
      'Edi Rama',
      'Alberto Fernandez',
      'Nikol Pashinyan',
      'Ali Asadov',
      'Hubert Minnis',
      'Sheikh Hasina',
      'Abdul Hamid',
      'Mia Mottley',
      'Xi Jinping'
    ],
    indonesia: [
      'Anies Baswedan',
      'Joko Widodo',
      'Ganjar Pranowo',
      'Rizal Ramli',
      'Mahfud Md',
      'Fadli Zon',
      'Ridwan Kamil',
      'Hidayat Nurwahid',
      'Erick Thohir',
      'Budiman Sudjatmiko'
    ]
  },
  search: [],
  searchErr: null,
  searchLoading: false,
  urlWeb: ''
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_URL:
      return { ...state, urlWeb: payload }
    case SET_SEARCH:
      return { ...state, search: payload }
    case SET_SEARCH_ERR:
      return { ...state, searchErr: payload }
    case SET_SEARCH_LOADING:
      return { ...state, searchLoading: payload }
    default:
      return state
  }
}

export default reducer