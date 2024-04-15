const Alert = ({ children, onClose }) => {
    return (
      <div className="alert alert-primary alert-dismissible">
        {" "}
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          onClick={onClose}
        ></button>
      </div>
    )
  }
  
  export default Alert
  