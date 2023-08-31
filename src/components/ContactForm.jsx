import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
const ContactForm = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const nameAlert = firstName.charAt(0).toUpperCase() + firstName.slice(1);
   const handleSubmit = (e) => {
      e.preventDefault();

      Swal.fire(`Form submitted, Thanks for your message ${nameAlert}!`);
   };

   return (
      <form
         className='z-50 w-full max-w-lg'
         onSubmit={handleSubmit}
      >
         <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
               <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-first-name'
               >
                  First Name
               </label>
               <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
               />
               {!firstName.length > 0 ? (
                  <p className='text-red-500 text-xs italic'>
                     Please fill out this field.
                  </p>
               ) : (
                  <p className='h-4'></p>
               )}
            </div>
            <div className='w-full md:w-1/2 px-3'>
               <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-last-name'
               >
                  Last Name
               </label>
               <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-last-name'
                  type='text'
                  placeholder='Doe'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
               />
            </div>
         </div>
         <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
               <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='email'
               >
                  E-mail
               </label>
               <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
               <p className='text-gray-600 text-xs italic'>
                  Some tips - as long as needed
               </p>
            </div>
         </div>
         <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
               <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='message'
               >
                  Message
               </label>
               <textarea
                  className='no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
               ></textarea>
            </div>
         </div>
         <div className='md:flex md:items-center'>
            <div className='md:w-1/3'>
               <Button type='submit'>Send</Button>
            </div>
            <div className='md:w-2/3'></div>
         </div>
      </form>
   );
};

export default ContactForm;
