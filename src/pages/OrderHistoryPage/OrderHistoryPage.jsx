import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import * as usersService from '../../utilities/users-service';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';
import { useState } from 'react';

export default function OrderHistoryPage({ user, setUser }) {
  const [activeOrder, setActiveOrder] = useState('');


  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />
      <OrderDetail />

    </main>
  );
}