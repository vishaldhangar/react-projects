import styles from "./ContactHeader.module.css";

const contactHeader = () => {
  return (
    <div className= {`container ${styles.contact_section}`}>
         <h1>Contact Us</h1>
        <p>
           LET'S CONNECT:WE ARE HERE TO HELP ADN WE WOULD LOVE TO HEAR FRO YOUR WHETHER YOU HAVE A QUESTION,COMMENT,OR JUST WANT TO CHAT,YOU CAN REACH OUT TO US THRIUGH THE CONTACT FORM OF THIS PAGE OR BY PHONE,EMIAL,OR SOCIAL MEDIA.
        </p>
    </div>
  )
}

export default contactHeader