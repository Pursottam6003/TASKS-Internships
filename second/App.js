// import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import  MyTables  from './Mycomponents/MyTables';
import { Table_1 } from './Mycomponents/Table_1';
import {Table_2} from './Mycomponents/Table_2';
import {Table_3} from './Mycomponents/Table_3';
import {Table_3b } from "./Mycomponents/Table_3b";
import { Table_3c } from './Mycomponents/Table_3c';
import { Table_4 } from "./Mycomponents/Table_4";
import { Table_5 } from './Mycomponents/Table_5';
import { Table_6 } from './Mycomponents/Table_6';
import {Footer} from "./Mycomponents/Footer";
import { Misc_Table } from './Mycomponents/Misc_Table';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
      <Header></Header>
      <MyTables></MyTables>
      <Switch>
          <Route  path="/Table_1" render={() =>{
            return (
              <>
              <Table_1></Table_1>
              </>)
            }
          }>
         </Route>

          <Route  path="/Table_2" render={() =>{
            return (
              <>
              <Table_2></Table_2>
              </>)
            }
          }>
          </Route>

                 
          <Route  path="/Table_3" render={() =>{
            return (
              <>
              <Table_3></Table_3>
              </>)
            }
          }>
          </Route>
                   
          <Route exact path="/Table_3b" render={() =>{
            return (
              <>
              <Table_3b></Table_3b>
              </>)
            }
          }>
          </Route>


                   
          <Route exact path="/Table_3c" render={() =>{
            return (
              <>
              <Table_3c></Table_3c>
              </>)
            }
          }>
          </Route>

                   
          <Route exact path="/Table_4" render={() =>{
            return (
              <>
              <Table_4></Table_4>
              </>)
            }
          }>
          </Route>

                   
          <Route exact path="/Table_5" render={() =>{
            return (
              <>
              <Table_5></Table_5>
              </>)
            }
          }>
          </Route>

                   
          <Route exact path="/Table_6" render={() =>{
            return (
              <>
              <Table_6></Table_6>
              </>)
            }
          }>
          </Route>

                   
          <Route exact path="/Misc_Table" render={() =>{
            return (
              <>
              <Misc_Table></Misc_Table>
              </>)
            }
          }>
          </Route>

           
        </Switch>

         
      <Footer></Footer> 
      </Router>
    </>
  );
}

export default App;
