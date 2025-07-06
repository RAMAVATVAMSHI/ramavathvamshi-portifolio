
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ramavathvamshi2002@gmail.com',
      href: 'mailto:ramavathvamshi2002@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <div className="space-y-6">
      {contactInfo.map((info) => (
        <a
          key={info.label}
          href={info.href}
          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 group"
        >
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <info.icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              {info.label}
            </p>
            <p className="text-slate-900 dark:text-white font-semibold">
              {info.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
