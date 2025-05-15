import './Emails.css'
function Email() {
  const email1 = "mauricio_hilleshe1@estudante.sesisenai.org.br";
  const email2 = "daniel_hillesheim150@estudante.sesisenai.org.br";

  return (
    <div className="app-container">
      <div className="emails-container">
        <p>{email1}</p>
        <p>{email2}</p>
      </div>
    </div>
  );
}

export default Email;