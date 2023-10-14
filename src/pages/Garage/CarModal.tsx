import AddCarForm from "./form/AddCarForm";
import UpdateCarForm from "./form/UpdateCarForm";
import BasicModal, { styles } from "../../components/BasicModal";


interface CarModalProps {
  open: boolean;
  onClose: () => void;
  formType?: "add" | "update" | "delete" | null;
  id?: string[];
}


const CarModal = ( props: CarModalProps) => {

  let title = "";
  let description = "";
  let formContent = null;


  switch (props.formType) {
    case "add":
      title = "Add Car";
      description = "Add a new car to your garage.";
      formContent = <AddCarForm onClose={props.onClose} styles={styles} />;
      break;
    case "update":
      title = "Update Car";
      description = `Update your car details for Car ID: ${props.id}`; // 
      formContent = <UpdateCarForm onClose={props.onClose} styles={styles} id={props.id} />;
      // 
      break;
    default:
      title = "Car Dashboard Form";
      description = "Fill out the details according to the button you clicked"; 
      break;
  }

return (

<BasicModal
  open={props.open}
  onClose={props.onClose}
  title={title}
  description={description}
  content={formContent}
/>
);
};

export default CarModal;