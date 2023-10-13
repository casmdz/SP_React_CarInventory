import AddCarForm from "./form/AddCarForm";
import UpdateCarForm from "./form/UpdateCarForm";
// import DeleteCarForm from "./DeleteCarForm";
import BasicModal, { styles } from "../../components/BasicModal";


interface CarModalProps {
  open: boolean;
  onClose: () => void;
  formType: "add" | "update" | "delete" | null;
  selectedCarId?: string[] | null; // got an error when using 'null' 
  setSelectedCarId?: (id: string | null ) => void; // set State to update the Ui because u dont want to mess up the form
}


// const CarModal = ({ open, onClose, formType }: CarModalProps) => {
const CarModal = ({ open, onClose, formType, selectedCarId, setSelectedCarId }: CarModalProps) => {

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
      description = `Update your car details for Car ID: ${selectedCarId || ''}`;
      formContent = <UpdateCarForm onClose={onClose} styles={styles} selectedCarId={selectedCarId} />;
      break;
    default:
      title = "Car Dashboard Form";
      description = "Fill out the details according to the button you clicked"; 
      break;
  }

  return (

  <BasicModal
  open={open}
  onClose={onClose}
  title={title}
  description={description}
  content={formContent}
    />
  );
};

export default CarModal;