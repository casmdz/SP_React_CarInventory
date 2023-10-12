import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import AddCarForm from "./AddCarForm";
import UpdateCarForm from "./UpdateCarForm";
import DeleteCarForm from "./DeleteCarForm";
import BasicModal from "../../../components/BasicModal";


// interface CarModalProps {
//   open: boolean;
//   onClose: () => void;
//   modalType: "add" | "update" | "delete" | null;
// }

// const CarModal: React.FC<CarModalProps> = ({ open, onClose, modalType }) => {
//   const renderForm = () => {
//     switch (modalType) {
//       case "add":
//         return <AddCarForm onClose={onClose} />;


const CarModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<string | null>(null);

  const openModal = (type: string) => {
    setIsOpen(true);
    setFormType(type);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormType(null);
  };

  const renderForm = () => {
    switch (formType) {
      case "add":
        return <AddCarForm onClose={closeModal} />;
      case "update":
        return <AddCarForm onClose={closeModal} />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Button onClick={() => openModal("add")}>Add Car</Button>
      <Button onClick={() => openModal("update")}>Update Car</Button>
      <Button onClick={() => openModal("delete")}>Delete Car</Button>


      <BasicModal
        open={isOpen}
        onClose={closeModal}
        title="!!!"
        description="abc"
        content={renderForm()}
      />    
    </div>
  );
};

export default CarModal;
