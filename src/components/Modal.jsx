// @src/components/Modal.jsx

import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { BiHappyBeaming } from "react-icons/bi";
import { MdMouse } from "react-icons/md";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Social Media Friend Tracker</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Welcome to my Social Friend Tracker App.<br></br>
            <p>Track your new friends on Social Media</p>
            The Green tab <BiHappyBeaming style={{ color: "green" }} /> means
            that you <br></br>want to contact your new friend soon. <br></br>
            2X
            <MdMouse style={{ color: "green" }} /> to add the green tab.
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
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
