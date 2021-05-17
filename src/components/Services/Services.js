import Service from '../Service/Service';
import { faCheck, faCoffee, faCog, faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 
const Services = () => {
    const servicesData=[
    {
    icon: <FontAwesomeIcon icon={faCheck} />,
    title: 'fixed Price Project',
    description:'Standard Single Rooms are designed in open -concept living area and have many facilities.',

},
{
    icon:<FontAwesomeIcon icon={faGem} />,
    title: 'Receive on time',
    description:'Standard Single Rooms are designed in open -concept living area and have many facilities.',
},
{
    icon:<FontAwesomeIcon icon={faCog} />,
    title: 'Fast work turnaround',
    description:'Standard Single Rooms are designed in open -concept living area and have many facilities.',
}
];
    return (
        <div className='container d-flex justify-content-between mt-5 pt-5'>
            {
                servicesData.map(service => <Service service={service}></Service> )
            }
        </div>
    );
};

export default Services;