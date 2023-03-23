import ProtoType from 'prop-types';
import { NotificationMessage } from './Notification.styled'

const Notification = ({ message }) => {
    return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.prototype = {
    message: ProtoType.string.isRequired,
};

export default Notification;
