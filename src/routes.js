import Dashboard from 'pages/Dashboard.js';
import Attendance from 'pages/Attendance.js';
import Setting from 'pages/Setting.js';

const Routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'fa-solid fa-house',
    component: Dashboard,
    layout: '',
  },
  {
    path: '/attendance',
    name: 'Attendance',
    icon: 'fa-solid fa-clipboard-list',
    component: Attendance,
    layout: '',
  },
  {
    path: '/setting',
    name: 'Setting',
    icon: 'fa-solid fa-gear',
    component: Setting,
    layout: '',
  },
];

export default Routes;
