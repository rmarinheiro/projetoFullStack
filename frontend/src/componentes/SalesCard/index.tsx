import NotificationButton from '../notification-button';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sales } from '../../models/sales';

function SalesCard() {

    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sale, setSales] = useState<Sales[]>([])

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(response => {
                setSales(response.data.content);
            })
    }, [])

    return (
        <div className="rafametas-card">
            <h2 className="meta-sales-title">Vendas</h2>
            <div>
                <div className="rafametas-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="rafametas-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="rafametas-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="rafametas-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="rafametas-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sale.map(x => {
                                return (
                                    <tr key={x.id}>
                                        <td className="show992">{x.id}</td>
                                        <td className="show576">{new Date(x.date).toLocaleDateString()}</td>
                                        <td>{x.sellerName}</td>
                                        <td className="show992">{x.visited}</td>
                                        <td className="show992">{x.deals}</td>
                                        <td>{x.amount.toLocaleString('pt-br',{ style: 'currency', currency: 'BRL' })}</td>
                                        <td>
                                            <div className="rafametas-red-btn-container">
                                                <NotificationButton />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default SalesCard