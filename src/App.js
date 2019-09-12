import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from 'react-redux';
import {buy_itemAC} from './actions';
import {remove_itemAC} from './actions';





const App = ({car, store, additionalPrice}) => {


  const removeFeature = item => {
    // dispatch an action here to remove an item
    remove_itemAC(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    buy_itemAC(item)
  };

  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car}/>
        <AddedFeatures car={car}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={store} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice,
  }
}

// const mapActionsToProps = actions => {
//   return{
    
//   }
// }

export default connect(mapStateToProps,
  {buy_itemAC, remove_itemAC}//remove item action and add item action
  )(App);
