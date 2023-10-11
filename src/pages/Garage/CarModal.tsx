import AddCarForm from "./form/AddCarForm";
// import UpdateCarForm from "./UpdateCarForm";
// import DeleteCarForm from "./DeleteCarForm";
import BasicModal, { styles } from "../../components/ui/BasicModal";


interface CarModalProps {
  open: boolean;
  onClose: () => void;
  formType: "add" | "update" | "delete" | null;
}


const CarModal = ({ open, onClose, formType }: CarModalProps) => {
  // const [formType, setFormType] = useState<string | null>(null);

  let title = "";
  let description = "";

  // const renderForm = () => {
  //   switch (formType) {
  //     case "add":
  //       return <AddCarForm onClose={onClose} styles={styles} />;
  //     case "update":
  //       return <AddCarForm onClose={onClose} styles={styles} />;
  //     default:
  //       return null;
  //   }
  // }

  switch (formType) {
    case "add":
      title = "Add Car";
      description = "Add a new car to your garage.";
      break;
    case "update":
      title = "Update Car";
      description = "Update car details.";
      break;
    // Handle other cases here
    default:
      title = "Car Dashboard Form";
      description = "Fill out the details according to the button you clicked"
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
      content={
        formType === "add" ? (
          <AddCarForm onClose={onClose} styles={styles} />
        ) : null
        // Handle other form types here
      }
    />
  );
};

export default CarModal;