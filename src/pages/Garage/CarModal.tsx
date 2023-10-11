import NewCarForm from "./__test__/NewCarForm";


interface CarModalProps {
  open: boolean;
  onClose: () => void;
  formType: "new" | "update" | "delete"; // Specify valid form types here
}

const CarModal = ({ open, onClose, formType}: CarModalProps) => {
// Record<Keys, Type>
  const formComponents: Record<string, React.FC> = {
    new: NewCarForm,
    // update: UpdateMyCarForm,
    // delete: DeleteMyCarForm,
  };
  const FormComponent = formComponents[formType];



  return (
    <div>
      {open && (
        <div>
          <FormComponent />
          {/* modal styling and close button here */}
        </div>
      )}
    </div>
  );
};
export default CarModal 

// put on garage page 
// <button onClick={() => openModal('new')}>Add New Car</button>
// <button onClick={() => openModal('update')}>Update My Car</button>
// <button onClick={() => openModal('delete')}>Delete My Car</button>
