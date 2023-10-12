import AddCarForm from "./form/AddCarForm";
import UpdateCarForm from "./form/UpdateCarForm";
// import DeleteCarForm from "./DeleteCarForm";
import BasicModal, { styles } from "../../components/BasicModal";


interface CarModalProps {
  open: boolean;
  onClose: () => void;
  formType: "add" | "update" | "delete" | null;
}


const CarModal = ({ open, onClose, formType }: CarModalProps) => {

  let title = "";
  let description = "";
  let formContent = null;


  switch (formType) {
    case "add":
      title = "Add Car";
      description = "Add a new car to your garage.";
      formContent = <AddCarForm onClose={onClose} styles={styles} />;
      break;
    case "update":
      title = "Update Car";
      description = "Update your car details.";
      formContent = <UpdateCarForm onClose={onClose} styles={styles} />;
      break;
    default:
      title = "Car Dashboard Form";
      description = "Fill out the details according to the button you clicked"; 
      break;
  }

  return (
      // <BasicModal
      //   open={open}
      //   onClose={onClose}
      //   title={title}
      //   // formType === "add" ? ("Add a car" : "Fill this out to add a new car to the database") 
      //   description={description}
      //   content={renderForm()}
      // /> 

      <BasicModal
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      content={formContent}
      // content={
      //   formType === "add" ? (
      //     <AddCarForm onClose={onClose} styles={styles} />
      //   ) : null
      // }
    />
  );
};

export default CarModal;