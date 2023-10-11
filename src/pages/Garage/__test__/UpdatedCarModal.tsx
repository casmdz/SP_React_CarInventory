import BasicModal from "../../../components/ui/BasicModal"
import NewCarForm from "./NewCarForm";


const UpdatedCarModal = ({ open, onClose, styles }) => {

  const getContent = () => (
    // if (formType === 'new') {
    //   return <NewCarForm />;
    // }
    // <Box sx={[style.inputFields, style.buttons]}>
      <NewCarForm styles={styles} onClose={onClose} />
    // </Box>
  );

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="Vroom"
      description={'Add information about your car to add to our database with react-hook-forms!'}
      content={getContent()}
    // validate={() => {}}
    // formType={formType}
    />
  )
}

export default UpdatedCarModal

// <UpdatedCarModal open={isModalOpen} onClose={closeModal} formType="new" />