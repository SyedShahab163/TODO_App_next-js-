import React = require("react");
import AddTodo from "../components/Add_todo";
import {Todos} from "../components/Todos";
import Navbar from "../components/navber";
import "./globals.css";
import { RiTodoLine } from "react-icons/ri";
const Page = () => {
    return (

            <main>
                {/*<h2>*/}
                {/*    <RiTodoLIneLine>*/}
                {/*    TODO NEXT + TYPESCRIPT </RiTodoLIneLine></h2>*/}
                <h2><RiTodoLine className="icons" /> TODO NEXT + TYPESCRIPT <RiTodoLine className="icons" /> </h2>
                <Navbar/>
                <AddTodo/>
                <Todos/>
            </main>






    );
};

export default Page;
