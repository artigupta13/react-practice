// Layout.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
import EventsInList from './EventsInList';
import AppendList from './AppendList';
import ArrayRotation from  './ArrayRotation';
import EventBubbling from './EventBubbling';
import FormExample from './FormExample';
import PokemonApiComponent from './PokemonApiComponent';
import RefDemo from './RefDemo';
import InitializerFunction from './InitializerFunction';
import ContextPractice from './ContextPractice';
import ReduxExample from './ReduxExample';
import SelectPractice from './SelectPractice';
import UpdateDictionary from './UpdateDictionary';
import UseReducerDemo from './UseReducerDemo';
import UseRef from './UseRef';
import PassStateToBootstrapComponent  from  './PassStateToBootstrapComponent';
import ParentComponent from './UseCallBackComponent';
import UseMemo from './UseMemo';


const Home = () => {
  return (
   
    <>
      <Row>
        <Col xs={2} id="sidebar">
          <Menu />
        </Col>
        <Col xs={6} id="page-content">
       
        <Routes>

        <Route path="/EventsInList" element={<EventsInList/>} />
        <Route path="/AppendList" element={<AppendList/>} />
        <Route path="/ArrayRotation" element={<ArrayRotation/>} />
        <Route path="/FormExample" element={<FormExample/>} />
        <Route path="/InitializerFunction" element={<InitializerFunction/>} />
        <Route path="/EventBubbling" element={<EventBubbling/>} />
        <Route path="/PokemonApiComponent" element={<PokemonApiComponent/>} />
        <Route path="/RefDemo" element={<RefDemo/>} />
        <Route path="/ContextPractice" element={<ContextPractice/>} />
        <Route path="/ReduxExample" element={<ReduxExample/>} />
        <Route path="/SelectPractice" element={<SelectPractice/>} />
        <Route path="/UpdateDictionary" element={<UpdateDictionary/>} />
        <Route path="/useReducer" element={<UseReducerDemo/>} />
        <Route path="/useRef" element={<UseRef/>} />
        <Route path="/passStateInBootStrap" element={<PassStateToBootstrapComponent/>}/>
        <Route path="/useCallBackDemo" element={<ParentComponent/>}/>
        <Route path="/useMemoDemo" element={<UseMemo/>}/>
        </Routes>
        </Col>
        <Col xs={4} id="page-content"></Col>
      </Row>
    </>
  );
};

export default Home;
