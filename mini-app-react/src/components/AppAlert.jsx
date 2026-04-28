import { Alert } from "react-bootstrap";

function AppAlert({ show, variant, message, onClose }) {
  if (!show) return null;

  return (
    <Alert variant={variant} dismissible onClose={onClose}>
      {message}
    </Alert>
  );
}

export default AppAlert;