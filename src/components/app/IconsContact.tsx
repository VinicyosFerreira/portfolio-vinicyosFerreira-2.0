import { CONTACT_LIST } from "@/constants/ContactList";

const IconsContact = () => {

    const newContactList = CONTACT_LIST.filter((contact) => {
      return contact.socialMedia !== "Whatsapp";
    })
  

  return (
    <div className="flex flex-col items-end gap-1">
      {newContactList.map((icon) => (
        <a
          key={icon.socialMedia}
          href={icon.urlSocialMedia}
          className=" scale-100 hover:bg-accent transition-all p-2 rounded-md cursor-pointer hover:scale-110"
        >
          {icon.icon}
        </a>
      ))}
    </div>
  );
};

export default IconsContact;
