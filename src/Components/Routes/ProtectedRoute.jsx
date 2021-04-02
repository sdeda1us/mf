import React from 'react';
import { Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from '../Login/Login';


export default function ProtectedRoute(props) {
   const loginReducer = useSelector(state => state.loginReducer);
  const {
    component: ComponentToProtect,
    authRedirect,
    adminRedirect,
    store,
    ...otherProps
  } = props;

  let ComponentToShow;

  if (loginReducer.email) {
    ComponentToShow = ComponentToProtect;
  } else {
    ComponentToShow = Login;
  }

//   -----Leaving code below as a template in case we want/need an admin client -------//
//   if (store.user.id && store.user.admin === false && authRedirect != null ) {
//     return <Redirect exact from={otherProps.path} to={authRedirect} />;
//   } else if (store.user.id && store.user.admin === true && adminRedirect != null){
//     return <Redirect exact from={otherProps.path} to={adminRedirect} />
//   } else if (!store.user.id && authRedirect != null) {
//     ComponentToShow = ComponentToProtect;
//   }

 
  return (
    <Route
      {...otherProps}
      component={ComponentToShow}
    />
  );
};


