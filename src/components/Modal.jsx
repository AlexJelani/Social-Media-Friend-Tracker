// @src/components/Modal.jsx

import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { BiHappyBeaming } from "react-icons/bi";


const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Welcome to my Social Friend Tracker App.<br></br>
            The Green tab <BiHappyBeaming style={{color:"green"}}/> means that you want to contact 
            your new friend 
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              {/* <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button> */}
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
