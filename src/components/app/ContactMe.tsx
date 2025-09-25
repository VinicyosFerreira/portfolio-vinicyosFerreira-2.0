import { CONTACT_LIST } from '@/constants/ContactList';
import { Button } from '@/components/ui/button';
import { FaDownload } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="w-full mx-auto mt-10 space-y-4 p-2">
      <h2 className="text-primary text-center mb-5 font-bold text-2xl">
        Contatos
      </h2>
      <div className="grid grid-cols-2 gap-2 w-1/2 mx-auto">
        {CONTACT_LIST.map((contact) => (
          <div
            key={contact.socialMedia}
            className="flex flex-col justify-center items-center cursor-pointer rounded-full"
          >
        <div className="p-3 rounded-full hover:scale-110 transition-all">
              {contact.icon}
            </div>
            <p className="text-foreground font-semibold text-sm">
              {contact.socialMedia}
            </p>
          </div>
        ))}
      </div>
      <Button variant={'outline'} size={'lg'} className="w-1/3 mx-auto cursor-pointer flex">
        Baixar CV <span><FaDownload /></span>
      </Button>
    </div>
  );
};

export default ContactMe;
