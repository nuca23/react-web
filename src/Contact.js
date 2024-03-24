import React from "react";
import Contact from "react";

function Contact() {
    const navigate= useNavigate();
    function redirect() {
        navigate("/About");
    }
    return(
        <>
        <h1>
            დავით კენჭაძის
        აკადემიის გუნდს გვინდა
   რომ თქვენ გახდეთ წარმატებული პროფესიონალი,
 თქვენი თავის საუკეთესო ვერსია და ვდებთ პირობას რომ ამისთვის ყველაფერს გავაკეთებთ.
        </h1>
        </>

    );
}
export default Contact;