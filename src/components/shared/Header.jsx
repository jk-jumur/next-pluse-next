
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="text-center py-8 mx-auto space-y-3">
            <Image src={logo} widtg={50} height={50} alt='Logo'/>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyy")}</p>
            Header
                      
          
        </div>
    );
};

export default Header;