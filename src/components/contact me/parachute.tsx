"use client";
import React from "react";
import { Modal, ModalTrigger } from "./animated-modal";
import './ParachuteButton.css'; // Import the new CSS file

export function ParachuteButton({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="parachute-button-container">
      <Modal>
        <ModalTrigger className="parachute-button">
          <span className="parachute-button-text">
            Send Mail
          </span>
          <div className="parachute-button-icon">
            📧
          </div>
        </ModalTrigger>
      </Modal>
    </div>
  );
}
