import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notifications`)
        .then(response =>{
            alert("SMS Enviado")
        },)

}

function NotificationButton({ saleId }: Props) {
    return (

        <div className="rafametas-red-btn" onClick={()=> handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>

    )
}

export default NotificationButton
