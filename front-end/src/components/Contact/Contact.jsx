import ContactItem from './ContactItem';
import { contactData } from './ContactData';

function Contact() {
  return (
    <div className="min-h-screen py-10 px-8 about-theme">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-5xl font-black uppercase mb-4">
            Contact
          </h2>
          <div className="w-20 h-2 bg-current rounded-full opacity-50" />
          <p className="mt-8 text-xl opacity-80 leading-relaxed">
            I'm an Informatics Engineering student at Universitas Negeri Surabaya. Feel free to reach out for collaborations!
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {contactData.map((item) => (
            <ContactItem key={item.id} {...item} />
          ))}
        </div>

        <div className="mt-20 opacity-40 text-sm font-medium border-t border-current border-opacity-10 pt-10 text-center">
          Informatics Engineering @ Universitas Negeri Surabaya
        </div>
      </div>
    </div>
  );
}

export default Contact;