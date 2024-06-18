const ModalWrapper = ({children, onClick, isOpen}) => {
    return (
        <>
            {
                isOpen && (
                    <div className="modal-wrapper" onClick={(e) => {
                        if (e.target.classList.contains("modal-wrapper")) {
                            onClick()
                        }
                    }}>
                        {children}
                    </div>
                )
            }
        </>
    );
};

export default ModalWrapper;