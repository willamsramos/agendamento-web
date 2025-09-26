import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import { doctors, doctors_services } from "../../constants/data.js";

function AppointmentAdd() {
    return <>
        <Navbar />

        <div className="container-fluid mt-page">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="col-12 mt-2">
                    <h2>Novo Agendamento</h2>
                </div>

                <div className="col-12 mt-4">
                    <label htmlFor="doctor" className="form-label">Médico</label>
                    <div className="form-control mb-2">
                        <select name="doctor" id="doctor">
                            <option value="0">Selecione o Médico</option>

                            {doctors.map((d) => (
                                <option key={d.id_doctor} value={d.id_doctor}>{d.name}</option>
                            ))}

                        </select>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <label htmlFor="service" className="form-label">Serviço</label>
                    <div className="form-control mb-2">
                        <select name="service" id="service">
                            <option value="0">Selecione o serviço</option>

                            {doctors_services.map((d) => (
                                <option key={d.id_service} value={d.id_service}>{d.description}</option>
                            ))}

                        </select>
                    </div>
                </div>

                <div className="col-12 mt-3">
                    <label htmlFor="doctor" className="form-label">Serviço</label>
                    <div className="form-control mb-2">
                        <select name="doctor" id="doctor">
                            <option value="0">Selecione o serviço</option>

                            {doctors.map((d) => (
                                <option key={d.id_doctor} value={d.id_doctor}>{d.name}</option>
                            ))}

                        </select>
                    </div>
                </div>
                <div className="col-6 mt-3">
                    <label htmlFor="bookingDate" className="form-label">Data</label>
                    <input type="date" className="form-control" name="bookingDate" />
                </div>
                <div className="col-6 mt-3">
                    <label htmlFor="bookingDate" className="form-label">Horário</label>
                    <select>
                        <option value="0">Horário</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:006">13:00</option>
                        <option value="14:00">14:00</option>
                    </select>
                </div>
                <div className="col-12 mt-4">
                   <div className="d-flex justify-content-end">
                     <Link to="/appointments" className="btn btn-outline-primary me-3">
                     Cancelar
                     </Link>
                     <button className="btn btn-primary">Salvar Dados</button>
                   </div>
                </div>
                </div>
            </div>  
        </div>
    </>
}

export default AppointmentAdd;