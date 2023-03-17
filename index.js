import express from 'express';
import dotenv from 'dotenv'
import connection from './database/db.js'; 
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './Routes/routes.js'

//redux 
import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger';
const history=[]


const app=express();
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
 app.use('/', Routes);
const PORT=8000;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
connection(username,password);
app.listen(PORT,()=>console.log("s1 is run"))

const store=createStore(reducer,applyMiddleware(logger.default))
function reducer(state={amount:1},action){
    if(action.type==="increment"){
        return {amount:state.amount+action.payload};
    }
 return state;
}
//console.log(store.getState())
//console.log(store.getState())
// store.subscribe(()=>{
//     console.log(store.getState())
// })

// action creators
function inc(val){
return {type:"increment",payload:val}
}
// setInterval(()=>{
//     store.dispatch(inc(5))

// },2000)
