import {
  faUser,
  faCode,
  faGear
} from '@fortawesome/free-solid-svg-icons'

export const Root = {
    type: 'Root',
    children: [],
    allocation : 300,
    icon: faUser
}

export const Options = [
  {
    type: '',
    allocation : 1000,
    children: [],
    icon: faCode,
  },
  {
    type: 'Dev',
    allocation : 1000,
    children: [],
    icon: faCode,
  },
  {
    type: 'QA',
    allocation : 500,
    children: [],
    icon: faGear
  },
  {
    type: 'Manager',
    children: [],
    allocation : 300,
    icon: faUser
  },
]