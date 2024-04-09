import Image from "next/image";

const ContactInfoItem = ({ info }  : {info : {icon : string ; title : string }} ) => {
    return (
      <div className="d-flex align-items-center gap-5">
        <Image
          src={info.icon}
          alt="icon"
          className="object-fit-contain"
          width={52}
          height={52}
        />
        <p className="lh-sm">{info.title}</p>
      </div>
    );
  };
  
  export default ContactInfoItem;
  