import { CONTACT_LIST } from '@/constants/ContactList';
import { Button } from '@/components/ui/button';
import { FaDownload } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div
      className="w-full mx-auto mt-10 space-y-4 p-2  after:content-[''] after:w-full after:h-0.5 after:block 
    after:bg-foreground after:opacity-30 "
    >
      <h2 className="text-primary text-center mb-5 font-bold text-2xl md:text-3xl">
        Contatos
      </h2>
      <div className="grid grid-cols-2 gap-2 w-[90%] mx-auto md:w-1/3">
        {CONTACT_LIST.map((contact) => (
          <div
            key={contact.socialMedia}
            className="flex flex-col justify-center items-center cursor-pointer rounded-full"
          >
            <div className="p-3 rounded-full hover:scale-110 transition-all">
              <a href={contact.urlSocialMedia} target="_blank">
                {contact.icon}
              </a>
            </div>
            <p className="text-foreground font-semibold text-xs lg:text-sm">
              {contact.username}
            </p>
          </div>
        ))}
      </div>
      <Button
        variant="link"
        asChild
        size="lg"
        className="w-1/3 my-5 mx-auto cursor-pointer flex md:w-1/5 text-foreground font-semibold bg-muted-foreground/20 
        hover:bg-muted-foreground/40"
      >
        <a
          href="https://drive.google.com/file/d/1pt9hJLUTQ80cPxUmuUtr7E5mIb2JHbWI/view"
          target="_blank"
          rel="noreferrer noopener"
          className=''
        >
          <span> Download CV </span>
          <FaDownload />
        </a>
      </Button>
    </div>
  );
};

export default ContactMe;
