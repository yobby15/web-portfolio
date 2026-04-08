import { Mail, Phone, Linkedin, Github } from 'lucide-react';

function ContactItem({ label, value, link, icon }) {
  const icons = {
    Mail: Mail,
    Phone: Phone,
    Linkedin: Linkedin,
    Github: Github
  };

  const IconComponent = icons[icon];

  return (
    <div className="flex items-center gap-6 p-6 rounded-2xl border border-current border-opacity-10 bg-[#2E3448] bg-opacity-5 transition-all hover:bg-opacity-10">
      <div className="w-14 h-14 rounded-xl bg-current bg-opacity-10 flex items-center justify-center shrink-0">
        {IconComponent ? <IconComponent size={24} strokeWidth={2.5} /> : null}
      </div>

      <div className="flex flex-col text-left">
        <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">
          {label}
        </span>
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="text-xl font-bold hover:underline break-all"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

export default ContactItem;