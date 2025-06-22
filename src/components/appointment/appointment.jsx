function Appointment(props) {
  
  const dt = new Date(props.booking_date);
  
  return <tr>
    <td >{props.user}</td>
    <td >{props.doctor}</td>
    <td >{props.service}</td>
    <td >{
        new Intl.DateTimeFormat("pt-BR",{dateStyle:"short"}).format(dt)}</td>
    <td className="text-end">{
        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)}
    </td>
    <td className="text-end">
       <div className="d-inline me-3">
          <button className="btn bnt-sm btn-primary">
            <i class="bi bi-pencil-square"></i>
          </button>
       </div>
       
       <button className="btn bnt-sm btn-danger">
            <i class="bi bi-trash"></i>
          </button>
      </td>
  </tr>
}

export default Appointment;